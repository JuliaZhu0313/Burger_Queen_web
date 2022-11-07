<template v-if="user">
    <div class ="order">
          <h1 class="section-title">Current Ongoing orders</h1>
          <div class = "Time"> Food is on the way 
            <!--<h3> Estimated Arrival Time is {{timestamp()}} to {{addMinutes()}}</h3>-->
            <h3> Estimated Time taken is 20 mins </h3>
          </div>
    <div class="Rec1">
    <h1>Order Details</h1>
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
    <div class="Rec2">Address details</div>
    </div>   
    
    </template>
    
    <script>
    import firebaseApp from '../firebase.js';
    import {collection, getDocs} from "firebase/firestore";
    import { getFirestore } from "firebase/firestore"
    import {getAuth, onAuthStateChanged} from 'firebase/auth';

    const db = getFirestore(firebaseApp);
    const auth = getAuth();
    export default {
        name: 'order',
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
              this.len = this.value.name.length
              console.log(this.value, this.len)
          } catch (e) {
              console.log(e);
          }
      },
       timestamp() {
        /*var index = this.order.length - 1;
        console.log(index)*/
        const today = new Date();
        console.log(today)
        //console.log(this.value.date.toDate())
        //console.log(Date())
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
        width: 700px;
        background-color: bisque;
        border: 2px solid green ;
        font-size: 20px;
        margin: auto;
    }
    .Rec2 {
        position:absolute; 
        right:10px;
        font-size: 18px;
        width: 500px;
        border: 1px solid green ;
        background-color: burlywood;
        border-radius: 12px;
        margin: auto;
    }
    </style>