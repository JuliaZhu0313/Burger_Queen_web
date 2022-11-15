<template>
  <NavBar />
  <div class="topnav">
    <h1>My Profile</h1>
  </div>

  <div class="Email">
    <div id = "Email"><h1 v-text="email"></h1></div>
  </div>

  <div class="Name">
    <div id = "Name"><h1 v-text="name"></h1></div>
  </div>

  <div class="Number">
    <div id = "Number"><h1 v-text="number"></h1></div>
  </div>

  <div class="Location" v-if="user">
    <div id = "Location"><h1 v-text="location"></h1></div> 
  </div>
  <Footer />
</template>

<script>
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { doc, getDoc, getFirestore } from "firebase/firestore"
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
const auth=getAuth();

export default {
    name: 'MyProfile',
    components:{
        NavBar,
        Footer
    },
    data(){
        return{
            user: false,
            email: '',
            name: '',
            number: '',
            location:'',
            a:{},
        }
    },
    async mounted(){
        onAuthStateChanged(auth, async (user)=>{
            if(user) {
                this.user=user;
                await this.getAll();
                this.email = "Email:" + user.email;
                this.name = "Name:" + this.a.full_name;
                this.number = "Number:" + this.a.phone;
                this.location = "Location:" + this.a.address_line_1 + ", " + this.a.address_line_2;
            }
        })
    },
    methods:{
      async getAll(){
        const db = getFirestore()
        const docRef = doc(db, 'UserProfile', String(auth.currentUser.email));
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          this.a = docSnap.data()
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
    }
      }
    }
}
</script>

<style scoped>
  .topnav {
  text-align: center;
  overflow: auto;
  background-color:#F4EDE5;
  align-content: center;
  }
  .Email{
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 7px;
  border-radius: 10%;
  margin-top: 0.5cm;
  width: 62%;
  height: 1.5cm;
  padding-top: 0.4cm;
  margin-left: 19%;
  }
  .Email label{
  width: 1cm;
  font-size: 30px;
  }

  .Name{
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 7px;
  border-radius: 10%;
  margin-top: 0.5cm;
  width: 62%;
  height: 1.5cm;
  padding-top: 0.4cm;
  margin-left: 19%;
  }
  .Name label{
  width: 1cm;
  font-size: 30px;
  }

  .Number{
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 7px;
  border-radius: 10%;
  margin-top: 0.5cm;
  width: 62%;
  height: 1.5cm;
  padding-top: 0.4cm;
  margin-left: 19%;
  }
  .Number label{
  width: 1cm;
  font-size: 30px;
  }
  .Number input{
  width: 7cm;
  height: 1cm;
  font-size: 20px;
  }

  .Location{
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 7px;
  border-radius: 10%;
  margin-top: 0.5cm;
  width: 62%;
  height: 1.5cm;
  padding-top: 0.4cm;
  margin-left: 19%;
  }
  .Location label{
  width: 1cm;
  font-size: 30px;
  }
  .Location input{
  width: 7cm;
  height: 1cm;
  font-size: 20px;
  }

  
</style>