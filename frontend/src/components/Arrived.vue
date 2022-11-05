<template v-if="user">
    
    <div class ="order">
          <h1 class="section-title">Current Ongoing orders</h1>
          <div class = "Time"> <h1>Arrived! Please collect your food</h1>></div>
          <div class="Rec1"><h1>Order Details</h1>
    <table>
        <div v-for = "index in len" :key="index" class="cart1">
            <tr>
                <div class="burger">
                <td data-th="Product">
                    <div class="row">
                        <div>
                            <h4>{{ value.name[index] }}</h4>
                        </div>
                    </div>
                </td>
                <td data-th="Price">${{ value.price[index] }}</td>
                <td data-th="Quantity">Quantity: {{value.amount[index]}}</td>
                </div>
            </tr>
        </div>
    </table>
    </div>
    <br><br>
    <div class="Rec2">Address details</div>
    </div>

    <button 
            @click="this.$router.push('/afterorder')"
            class="arrive">Rate on Our Service</button>
    
    
    </template>

<script>
import firebaseApp from '../firebase.js';

import {collection, getDocs} from "firebase/firestore";
import { getFirestore } from "firebase/firestore"
import {getAuth, onAuthStateChanged} from 'firebase/auth';
const db = getFirestore(firebaseApp);
const auth = getAuth();
export default {
    name: 'arrived',
    
data() {
    return {
        user: false,
        order: [],
        value: [],
        len: 0,
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
              console.log(this.order)
              this.value = this.order.at(this.order.length - 1)
              this.len = this.value.name.length - 1
        } catch (e) {
            console.log(e);
        }
    },
}}
</script>

<style scoped>
.order{
 text-align: center;
}
.Rec1 {
    position:absolute; 
    left:10px;
    height: 300px;
    width: 700px;
    background-color: bisque;
  border: 2px solid green ;
  font-size: 20px;
}
.Rec2 {
    position:absolute; 
    right:10px;
    font-size: 18px;
    height: 200px;
    width: 500px;
    border: 1px solid green ;
    background-color: burlywood;
    border-radius: 12px;
}
.arrive{
        position:absolute; 
        background-color: #c77414;
        color: white;
        margin:auto;
        display:block;
        border-radius: 12px;
        font-weight: bold;
        padding: 20px 60px;
        left:600px;
        bottom: 70px;
    }
</style>