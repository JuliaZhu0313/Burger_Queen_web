<template>
  <section class="menu section bd-container" id="home">

<div>
    <h2 class="section-title">Burger Menu</h2>
    <div class="menu">
        <div class="menu_content" v-for="burger in menu" :key="burger.name">
            <img :src="burger.imageAddress" alt="" class="menu_img">
            <h3 class="menu_name">{{burger.name}}</h3>
            <span class="menu_price">${{burger.price}}</span>
			<br>
            <button @click="addToCart(burger)" class="menu_button">
                Add To Cart
			</button>
        </div>
    </div>
</div>
</section>
</template>

<script>
import firebaseApp from '../firebase.js';
import {collection, getDocs} from "firebase/firestore";
import { getFirestore } from "firebase/firestore"
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { doc, setDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);
const auth = getAuth();

export default {
    name: 'mainmenu',
	data: () => ({
		menu: [],
	}),
	async mounted() {
		//await this.getAll();
		onAuthStateChanged(auth, (user)=>{
		if (user) {
			this.user=user;
			await this.getAll();
		}
		})
	},
    methods: {
		async getAll() {
			try {
				//TODO-->pagination
				const menuRef = collection(db, "menu") //refrence the collection
				const q = await getDocs(menuRef) //get all docs in collection
				q.forEach((doc) => {
					this.menu = [...this.menu, doc.data(), ] //push to menu array
				});
				console.log(this.menu)
			} catch (e) {
				console.log(e);
			}
		},
        async addToCart(burger) {
			try {
				console.log(`${burger.name} added to cart`)
				const order = {
					name: burger.name,
					price: burger.price,
					amount: 1
				}
				const docRef = await setDoc(doc(db, String(auth.currentUser.email), burger.name),order)
				alert("Add to cart successfully!")
				console.log(docRef)
			} catch (e) {
				// statements
				console.log(e);
			} 
        },
	},
}
</script>

<style scoped>
.menu_content{
    float: left;
	border-radius: 25px;
	border: 2px solid #a4670c;
	margin: 30px;
	align-items: center;
}
.menu{
	text-align: center;
	align-items: center;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

}
.menu_button{
	background-color: #c77414;
	color: white;
	text-align: center;
	border-radius: 12px;
	font-weight: bold;

}


</style>
