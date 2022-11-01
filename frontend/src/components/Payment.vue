<template v-if="user">
    <NavBar />
  
  <div class ="payment">
      <h1 class="section-title">Your Order</h1>
      <table>
    <div v-for = "item in cart" :key="item.name" class="cart1">
        <tr>
            <div class="burger">
            <td data-th="Product">
                <div class="row">
                    <div>
                        <h4>{{ item.name }}</h4>
                    </div>
                </div>
            </td>
            <td data-th="Price">${{ item.price }}</td>
            <td data-th="Quantity">Quantity: {{item.amount}}</td>
            
            <td data-th="Subtotal" class="text-center">Subtotal: ${{ subtotal(item.amount, item.price) }}</td>
            
        </div>
        </tr>
        
        </div>
      </table>
      <h2 data-th="Total" class="text-center">Total: ${{total()}}</h2>
      <div class="imagebox">
  <img src="@/assets/table.png">
  <div class="bottom-bar">
    <div class = "first_line">Successfully Paid!</div>
    <div class = "second_line">We are now preparing your food...please wait</div>
    <button
          @click="this.$router.push('/Order')" 
          class="button"><h3>Check my order status</h3>
    </button>
  </div>
</div>
  </div>

      

  </template>

<script>
import firebaseApp from '../firebase.js';
import NavBar from '@/components/NavBar.vue'
import {collection, getDocs} from "firebase/firestore";
import { getFirestore } from "firebase/firestore"
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const db = getFirestore(firebaseApp);
const auth = getAuth();

export default {
    name: 'cart',
    components:{
            NavBar
    },
data() {
    return {
    cart: [],
    user: false
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
            //TODO-->pagination
            console.log(auth.currentUser.email)
            const cartRef = collection(db, String(auth.currentUser.email)) //refrence the collection
            const q = await getDocs(cartRef) //get all docs in collection
            q.forEach((doc) => {
                this.cart = [...this.cart, doc.data(), ] //push to cart array
            });
            console.log(this.cart)
        } catch (e) {
            console.log(e);
        }
    },
    subtotal(amount, price){
            return amount * price
        },

    total(){
        var sum=0;
        for(let i =0;i<this.cart.length;i++)
        {
        
        sum += this.cart[i].amount*this.cart[i].price;
        
        }
        console.log(sum);
        return sum;
        
        
    }

      
    
}}
</script>

<style scoped>
.payment{
    text-align: center;

}
.item{
    text-align: center;
}
td{
    text-align: center;
    padding: 15px;
}
.imagebox {
  position: relative;
  display: inline-block;
}

img {
    width:  600px;
    background-color:whitesmoke;
            height: 300px;
            object-fit: cover;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            vertical-align: middle;
            border: 0;
  border: 3px solid orangered;
  border-radius: 12px;
}

.first_line {
            position: absolute;
            top: 40px;
            left: 100px;
            font-size: 50px;
            color: orange
        }
  
        .second_line{
            position: absolute;
            bottom: 150px;
            left: 30px;
            font-size: 25px;
        }
.button {
    position: absolute;
    background-color: #c77414;
	color: white;
    margin:auto;
    display:block;
    border-radius: 12px;
	font-weight: bold;
    padding: 10px 40px;
    bottom: 30px;
    left: 170px;
}


</style>
