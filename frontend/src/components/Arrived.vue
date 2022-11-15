<template v-if="user">
    <img src="@/assets/logo.png" alt="Burger Queen" width="130" height="100" id="logo">
    <NavBar />
    <div class ="order">
        <div class="div1">
          <h1 class="section-title">Current Ongoing orders</h1>
          <div class = "Time"> <h1>Arrived! Please collect your food</h1></div>
        </div>
          <div class="Rec1"><h1>Order Details</h1>
    <table>
        <div v-for = "index in len" :key="index" class="cart1">
            <tr>
                <div class="burger">
                <td data-th="Product">
                    <div class="row">
                        <div>
                            <h4>{{ value.name[index - 1] }}</h4>
                        </div>
                    </div>
                </td>
                <td data-th="Price">${{ value.price[index - 1] }}</td>
                <td data-th="Quantity">Quantity: {{value.amount[index - 1]}}</td>
                </div>
            </tr>
        </div>
    </table>
    </div>
    <br><br>
    <div class="Rec2"><h1>Address details</h1>
        <h4>{{profile.address_line_1}} , {{profile.address_line_2}}</h4>
    
    </div>
    <div class="btn">
        <button 
                @click="this.$router.push('/menu')"
                class="arrive">Return to Menu
        </button>
    </div>
</div>
    
    
    </template>

<script>
import firebaseApp from '../firebase.js';
import NavBar from '@/components/NavBar.vue'
import {collection, getDocs} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { doc,getDoc } from "firebase/firestore";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
const db = getFirestore(firebaseApp);
const auth = getAuth();
export default {
    name: 'arrived',
    components:{
            NavBar,},
    
data() {
    return {
        user: false,
        order: [],
        value: [],
        profile: {},
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
            //const path2 = "UserProfile"
              const orderRef = collection(db, path1)
              //const profileRef = collection(db,path2)
              const a = await getDocs(orderRef)
              const docRef = doc(db, 'UserProfile', String(auth.currentUser.email));
              const c = await getDoc(docRef)
            
              a.forEach((doc) => {
                  this.order = [...this.order, doc.data(), ] //push to order array
              });

              //if (c.exists()) {
          //console.log("Document data:", c.data());
          this.profile = c.data()
        //} else {
          // doc.data() will be undefined in this case
          //console.log("No such document!");
    //}

              console.log(this.order)
              console.log(this.profile)
              this.value = this.order.at(this.order.length - 1)
              this.len = this.value.name.length

              

              
        } catch (e) {
            console.log(e);
        }
    },
}}
</script>

<style scoped>
.order{
 /*text-align: center;*/
 background-color:white;
    /*display: flex;*/
    align-items: center;
    text-align: center;
    min-height: 100vh;
    border: 1px solid rgb(197, 197, 197);
    box-shadow: -5px 12px 15px rgba(0, 0, 0, 0.2), 5px -5px 15px rgba(0, 0, 0, 0.19);
}
.div1{
        width: 100%;
        vertical-align: top;
        height: 30%;
    }
.Rec1 {
    /*display: flex;
    flex-direction: column;
    position:absolute; 
    left:10px;
    width: 700px;
    background-color: bisque;
  border: 2px solid green ;
  font-size: 20px;*/
    float: left;
        width: 100%;
        /*min-height: 48%;*/
        background-color: bisque;
        border: 2px solid green ;
        font-size: 20px;
}
.Rec2 {
    /*position:absolute; 
    right:10px;
    font-size: 18px;
    width: 500px;
    border: 1px solid green ;
    background-color: burlywood;
    border-radius: 12px;*/
    float: left;
        width: 100%;
        /*min-height: 48%;*/
        border: 1px solid green ;
        background-color: burlywood;
        border-radius: 12px;
        font-size: 18px;
}
.btn{
        /*background-color: #c77414;
        color: white;
        margin:auto;
        display:block;
        border-radius: 12px;
        font-weight: bold;
        padding: 20px 60px;*/
    width: 100%;
    padding: 10px;
    float: left;
    
}
.arrive{
    background-color: #c77414;
    color: white;
    margin:auto;
    border-radius: 12px;
    font-weight: bold;
}
</style>
