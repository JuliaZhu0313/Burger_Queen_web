<template>
  <section class="menu section bd-container" id="home">

<div>
	<h2 class="section-title">Burgers</h2>
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
	<br>
	<h2 class="section-title">Sides</h2>
	<div class="menu">
		<div class="menu_content" v-for="side in menu_sides" :key="side.name">
            <img :src="side.imageAddress" alt="" class="menu_image">
            <h3 class="menu_name">{{side.name}}</h3>
            <span class="menu_price">${{side.price}}</span>
			<br>
            <button @click="addToCart(side)" class="menu_button">
                Add To Cart
			</button>
        </div>
	</div>
	<h2 class="section-title">Beverages</h2>
	<div class="menu">
		<div class="menu_content" v-for="beverage in menu_beverages" :key="beverage.name">
            <img :src="beverage.imageAddress" alt="" class="menu_image">
            <h3 class="menu_name">{{beverage.name}}</h3>
            <span class="menu_price">${{beverage.price}}</span>
			<br>
            <button @click="addToCart(beverage)" class="menu_button">
                Add To Cart
			</button>
        </div>
	</div>
	<h2 class="section-title">Sweets</h2>
	<div class="menu">
		<div class="menu_content" v-for="sweet in menu_sweets" :key="sweet.name">
            <img :src="sweet.imageAddress" alt="" class="menu_image">
            <h3 class="menu_name">{{sweet.name}}</h3>
            <span class="menu_price">${{sweet.price}}</span>
			<br>
            <button @click="addToCart(sweet)" class="menu_button">
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
		menu_sides: [],
		menu_beverages: [],
		menu_sweets: [],
	}),
	async mounted() {
		//await this.getAll();
		onAuthStateChanged(auth, async (user)=>{
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
				const sidesRef = collection(db, "menu_sides")
				const beveragesRef = collection(db, "menu_beverages")
				const sweetsRef = collection(db, "menu_sweets")
				const q = await getDocs(menuRef) //get all docs in collection
				const q_sides = await getDocs(sidesRef)
				const q_beverages = await getDocs(beveragesRef)
				const q_sweets = await getDocs(sweetsRef)
				q.forEach((doc) => {
					this.menu = [...this.menu, doc.data(), ] //push to menu array
				});
				q_sides.forEach((doc) => {
					this.menu_sides = [...this.menu_sides, doc.data(), ] //push to menu_sides array
				});
				q_beverages.forEach((doc) => {
					this.menu_beverages = [...this.menu_beverages, doc.data(), ] //push to menu_beverages array
				});
				q_sweets.forEach((doc) => {
					this.menu_sweets = [...this.menu_sweets, doc.data(), ] //push to menu_sweets array
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
	margin: 2%;
	align-items: center;
}
.menu{
	text-align: center;
	align-items: center;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0% 2% 0% 2%;
}
.menu_button{
	background-color: #c77414;
	color: white;
	text-align: center;
	margin: 4% 4% 4% 4%;
	border-radius: 12px;
	border-color: rgb(102, 102, 102);
	border-style: solid;
	border-width: 1px;
	font-weight: bold;
	font-size: 20px;
}

.menu_image{
	width:70%;
}
.section-title{
	font-size: 40px;
}


</style>
