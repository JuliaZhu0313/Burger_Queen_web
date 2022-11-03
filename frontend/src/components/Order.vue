<template v-if="user">
<NavBar />

<div class ="order">
      <h1 class="section-title">Current Ongoing orders</h1>
      <div class = "Time"> Food is on the way 
        <h3> Estimated Arrival Time is {{timestamp()}} to {{addMinutes()}}</h3>

      </div>
      <div class="Rec1"><h1>Order Details</h1>
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
            </div>
        </tr>
    </div>
</table>
</div>
<br><br>
<div class="Rec2">Address details</div>
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

   timestamp() {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    const timestamp =  time;
    return timestamp;
  },
  
  addMinutes() {
    const minutes = 20;
    const date=new Date();
    date.setMinutes(date.getMinutes() + minutes);
    const new_time = date.getHours() + ":" + date.getMinutes();
    return new_time;
},


},
created(){

      setTimeout( () => this.$router.push('/arrived'), 5000);

    }
}



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


</style>
