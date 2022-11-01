<template>
    <div class = "cart">
        <form id = "burgerqueen">
            <h2>Main Page</h2>

            <div class = "burger">
                <label for="FoodType">Burger: </label>
                <input type="text" id="FoodType" required="" placeholder="=Enter your food"><br><br>

                
                <label for = "Price">Buy Price: </label>
                <input type="number" id="Price" required="" > <br><br>

                <label for="quant1">Buy Quantity: </label>
                <input type="number" id="quant1" required="" placeholder="Enter the quantity"><br><br>
                
                <label for = "TotalPrice">Total Price: </label>
                <input type="number" id="TotalPrice" required="" > <br><br>
                
                <div class = "Addtocart">
                    <button id="Addtocart" type="button" v-on:click="savetofs()"> Add to cart </button>
                </div>
            </div>
        </form>


    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
methods: {
    async savetofs(){
        var a = document.getElementById("FoodType").value
        var b = document.getElementById("Price").value
        var c = document.getElementById("quant1").value
        var d = document.getElementById("TotalPrice").value
        alert("Add to cart: "+a)
        try{
        const docRef = await setDoc(doc(db,"Portfolio",a),{
        Food:a, Price: b, Quantity: c, Total_Price: d
    })
        console.log(docRef)
        document.getElementById("burgerqueen").reset();
        this.$emit("added")
        }
        catch(error) {
         console.error("Error adding to cart: ",error);
        }
    }
}
}

</script>