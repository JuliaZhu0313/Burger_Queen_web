<template>
  <div class="topnav">
    <h1>Order Records</h1>
  </div>

  <div class="order" v-for="item in order" :key="item.date">
    {{ item.date }}
    <div class="food"> 
      <div class="name">Dish name</div>
      <div class="amount">Dish amount</div>
      <div class="price">Dish price</div>
    </div>
    
    <div class="food" v-for="dish in item.dishes" :key="dish">
      <div class="name">{{dish.name}}</div>
      <div class="amount">{{dish.amount}}</div>
      <div class="price">{{dish.price}}</div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'
import {collection, getDocs} from "firebase/firestore"
import { getFirestore } from "firebase/firestore"
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const db = getFirestore();
const auth = getAuth();

export default{
    name:'OrderRecords',
    data() {
        return {
        user: false,
        order: [],
        }
       
  },
  async mounted() {
    onAuthStateChanged(auth, async(user)=>{
    if (user) { 
        this.user=user;
        await this.getAll();
    }
    });
  },
  methods: {
        async getAll() {
          try {
              const path1 = String(auth.currentUser.email) + '_orders'
              const orderRef = collection(db, path1)
              const a = await getDocs(orderRef)
              a.forEach((doc) => {
                  this.order = [...this.order, doc.data(), ] //push to order array
              });
              this.order.forEach((ele) => {
                let dishes = []
                for (let i = 0; i < ele.name.length; i++) {
                  dishes.push({name: ele.name[i], amount: ele.amount[i], price: ele.price[i]})
                }
                Object.assign(ele, {dishes: dishes})
              })
              console.log(this.order)
          } catch (e) {
              console.log(e);
          }
          
    }
  },
    components: {
      Footer
    }
}
</script>

<style>
  .topnav {
  overflow: auto;
  background-color:#F4EDE5;
  align-content: center;
  }

  .order {
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 10px;
  border-radius: 10%;
  margin-top: 1.5cm;
  width: 30cm;
  padding-top: 0.4cm;
  margin-left: 8cm;
  }

  .food {
    display: flex;
  }

  .name {
    width: 50%
  }

  .amount {
    width: 20%
  }

  .price {
    width: 30%
  }
</style>