<template v-if="user">
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
            <td data-th="Quantity">
                <button class="minus" @click="minus(item.name)" type="button">-</button>
                <input type="number" :value="item.amount" min="1" :id="item.name">
                <button  class="plus" @click = "plus(item.name)" type="button">+</button>
            </td>
            <td data-th="Subtotal" class="text-center">Subtotal: ${{ subtotal(item.amount, item.price) }}</td>
            <td>
                <button class="delete" @click="new_delete(item.name);">Delete</button>
            </td>
        </div>
        </tr>
    </div>
</table>
<div class="empty_cart" v-if="cart.length==0">
    <h2> There's nothing in your shopping cart! </h2>
</div>
    <button
          @click="this.$router.push('/menu')" 
          class="button"><h3>Save and go back to Menu</h3>
    </button>
    <br><br>
    <button 
          @click="this.$router.push('/payment')"
          class="order">Make Payment</button>
</template>
<script>
    import firebaseApp from '../firebase.js';
    import {collection, getDocs} from "firebase/firestore";
    import { getFirestore, doc, updateDoc,deleteDoc} from "firebase/firestore"
    import {getAuth, onAuthStateChanged} from 'firebase/auth';

    const db = getFirestore(firebaseApp);
	export default {
        name: 'cart',
    data() {
        return {
		cart: [],
        user: false
    }
	},
	async mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user)=>{
            if (user) { 
                this.user=user;
                await this.getAll();
            } 
            });
        //await this.getAll();
	},

    methods: {
		async getAll() {
            const auth = await getAuth();
			try {
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
        plus(id){
            const auth = getAuth();
            var a = document.getElementById(id).value
            try{
                a ++
                document.getElementById(id).value = a
                const d_minus={
                    amount: a
                }
                updateDoc(doc(db, String(auth.currentUser.email), id), d_minus)
                for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].name == id){
                    this.cart[i].amount ++
                }
            }
            }
            catch(error){
                console.error("Error adding:  ", error)
            }

        },
        minus(id){
            const auth = getAuth();
            var a = document.getElementById(id).value
            try{
                if (a <= 1) {
                    a = 1
                } else{
                    a -=1
                    for (let i = 0; i < this.cart.length; i++) {
                    if (this.cart[i].name == id){
                        this.cart[i].amount --
                    }
                }
                }
                document.getElementById(id).value = a
                const d_plus={
                    amount: a
                }
                updateDoc(doc(db, String(auth.currentUser.email), id), d_plus)
            }
            catch(error){
                console.error("Error removing item!")
            }
        },
        subtotal(amount, price){
            return amount * price
        },
        new_delete(item){
        const auth = getAuth();
        try{
            deleteDoc(doc(db, String(auth.currentUser.email), item))
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].name == item){
                    this.cart.splice(i, 1)
                }
            }
            alert("Delete successfully!")
        }
        catch(error){
                console.error("Error removing item!")
            }
        },
    },
}
</script>
<style scoped>
td{
    padding: 15px;
}
.button, .order{
    background-color: #c77414;
	color: white;
    margin:auto;
    display:block;
    border-radius: 12px;
	font-weight: bold;
    padding: 10px 40px;
}
.empty_cart{
    text-align: center;
}
</style>
