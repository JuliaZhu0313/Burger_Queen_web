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
              <td data-th="Quantity">{{ item.amount }}
              </td>
              <td data-th="Subtotal" class="text-center">Subtotal: ${{ subtotal(item.amount, item.price) }}</td>
              
              </div>
          </tr>
      </div>
        </table>
    <div class="pay_btn" v-if="paid == false">
        <h2 data-th="Total" class="text-center">Total: ${{total()}}</h2>
        <button @click="make_pay"> Make Payment </button>
    </div>
    <div class="imagebox" v-if="paid">
        <img src="@/assets/table.png">
        <div class="bottom-bar">
        <div class = "first_line">Successfully Paid!</div>
        <div class = "second_line">We are now preparing your food...please wait</div>
        <button
                @click="this.$router.push('/order')" 
                class="button"><h3>Check my order status</h3>
        </button>
        </div>
    </div>
</div>
  
        
  
    </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  import firebaseApp from '../firebase.js';
  import {collection, getDocs} from "firebase/firestore";
  import { getFirestore } from "firebase/firestore"
  import {getAuth, onAuthStateChanged} from 'firebase/auth';
  import { doc, setDoc,deleteDoc} from "firebase/firestore";

  const db = getFirestore(firebaseApp);
  const auth = getAuth();
  export default {
      name: 'payment',
      components:{
            NavBar,},
  data() {
      return {
      cart: [],
      user: false,
      paid: false,
      order: [],
      }
     
  },
  async mounted() {
  onAuthStateChanged(auth, async (user)=>{
  if (user) { 
      this.user=user;
      await this.getAll();
      if (this.cart.length == 0) {
        this.$router.push('/menu');
    }
  }
  });
  },
  methods: {
      async getAll() {
          try {
              const path1 = String(auth.currentUser.email) + '_orders'
              //TODO-->pagination
              console.log(auth.currentUser.email)
              const cartRef = collection(db, String(auth.currentUser.email)) //refrence the collection
              const q = await getDocs(cartRef) //get all docs in collection
              const orderRef = collection(db, path1)
              const a = await getDocs(orderRef)
              
              q.forEach((doc) => {
                  this.cart = [...this.cart, doc.data(), ] //push to cart array
              });
              a.forEach((doc) => {
                  //console.log("Data read is " + doc.data())
                  this.order = [...this.order, doc.data(), ] //push to order array
                  //console.log("Data read is " + doc.data())
              });
              console.log(this.order)
              //console.log("content in order list: " + this.order.length)
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
      },
      async make_pay(){
        const unique_num = String(this.order.length + 1)
        const path = String(auth.currentUser.email) + '_orders'
        var name1 = []
        var amount1 = []
        var price1 = []
        const date1 = new Date();
        console.log("cart length is : " + this.cart.length)
        try{
            for (var i = 0; i < this.cart.length; i++) {
                name1.push(this.cart[i].name)
                amount1.push(this.cart[i].amount)
                price1.push(this.cart[i].price)
                await deleteDoc(doc(db, String(auth.currentUser.email), this.cart[i].name));
            }
            const data = {
                name: name1,
                amount: amount1,
                price: price1,
                date: date1,
            }
            console.log(data)
            await setDoc(doc(db, path, unique_num),data)
            this.cart.splice(0,this.cart.length)
            alert("Paid successfully!")
            this.paid = true
        } catch(e) {
            console.log(e);
        }
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
      /*padding: 15px;*/
      width: 500px;
  }
  .imagebox {
    position: relative;
    text-align: center;
    display: inline-block;
  }
  img {
      width:  800px;
      background-color:whitesmoke;
              height: 500px;
              object-fit: cover;
              align-items: center;
              margin-left: auto;
              margin-right: auto;
              /*position: relative;*/
              
              vertical-align: middle;
              border: 0;
    border: 3px solid orangered;
    border-radius: 12px;
  }
  .first_line {
              /*position: absolute;
              top: 30px;
              left: 80px;*/
              /*font-size: 50px;*/
              position: absolute;
            top: 50%;
             left: 50%;
                transform: translate(-50%, -50%);
              font-size: 4vw;
              color: orange
          }
    
          .second_line{
              position: absolute;
              /*bottom: 150px;
              left: 30px;*/
              top: 100px;
              /*left: 50px;*/
              /*font-size: 25px;*/
              font-size: 1.8vw;
              left: 50%;
              transform: translate(-50%, -50%);
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
      bottom: 10px;
      left: 50%;
      transform: translate(-50%, -50%);
      
  }
  table, td, th {
  border: 1px solid black;
}
.pay_btn button{
    background-color: #c77414;
    color: white;
}
  </style>
