<template>
    <div class="topnav">
        <img src="@/assets/logo.png" alt="Burger Queen" width="80" height="80" id="logo">
        <a class="active" href="#menu">MENU</a>
        <a href="#cart">CART</a>
        <a href="#order">ORDER</a>
        <a href="#login">LOG IN</a>
        <button class ="cart" @click="Addtocart" type="button">Add to cart</button>
    </div>

    <div class="menu">
        <div class="column">
            <img src="@/assets/pic1.png" alt = "Burger1" width = 400 height=400 class="burger">
            <div class="number">
                <button class="minus" @click="minus('amount1')" type="button">-<br></button>
                <input type="text" value=0 id="amount1"/>
                <button  class="plus" @click = "plus('amount1')" type="button">+<br></button>
            </div>
        </div>

        <div class = "column">
            <img src="@/assets/pic2.png" alt = "Burger2" width = 400 height=400 class="burger">
            <div class="number">
                <button class="minus" @click="minus('amount2')" type="button">-<br></button>
                <input type="text" value=0 id="amount2"/>
                <button  class="plus" @click = "plus('amount2')" type="button">+<br></button>
            </div>
        </div>

        <div class = "column">
            <img src="@/assets/pic3.png" alt = "Burger3" width = 400 height=400 class="burger">
            <div class="number">
                <button class="minus" @click="minus('amount3')" type="button">-<br></button>
                <input type="text" value=0 id="amount3"/>
                <button  class="plus" @click = "plus('amount3')" type="button">+<br></button>
            </div>
        </div>

        <div class = "column">
            <img src="@/assets/pic4.png" alt = "Burger4" width = 400 height=400 class="burger">
            <div class="number">
                <button class="minus" @click="minus('amount4')" type="button">-<br></button>
                <input type="text" value=0 id="amount4"/>
                <button  class="plus" @click = "plus('amount4')" type="button">+<br></button>
            </div>
        </div>

        <div class = "column">
            <img src="@/assets/pic5.png" alt = "Burger5" width = 400 height=400 class="burger">
            <div class="number">
                <button class="minus" @click="minus('amount5')" type="button">-<br></button>
                <input type="text" value=0 id="amount5"/>
                <button  class="plus" @click = "plus('amount5')" type="button">+<br></button>
            </div>
        </div>

        <div class = "column">
            <img src="@/assets/pic6.png" alt = "Burger6" width = 400 height=400 class="burger">
            <div class="number">
                <button class="minus" @click="minus('amount6')" type="button">-<br></button>
                <input type="text" value=0 id="amount6"/>
                <button  class="plus" @click = "plus('amount6')" type="button">+<br></button>
            </div>
        </div>

        <div class = "column">
            <img src="@/assets/pic7.png" alt = "Burger7" width = 400 height=400 class="burger">
            <div class="number">
                <button class="minus" @click="minus('amount7')" type="button">-<br></button>
                <input type="text" value=0 id="amount7"/>
                <button  class="plus" @click = "plus('amount7')" type="button">+<br></button>
            </div>
        </div>

        <div class = "column">
            <img src="@/assets/pic8.png" alt = "Burger8" width = 400 height=400 class="burger">
            <div class="number">
                <button class="minus" @click="minus('amount8')" type="button">-<br></button>
                <input type="text" value=0 id="amount8"/>
                <button  class="plus" @click = "plus('amount8')" type="button">+<br></button>
            </div>
        </div>
    </div>
    <div id="app" v-cloak>
    <div class="h-screen bg-blue-200"></div>
    <div class="h-screen bg-blue-300"></div>
    <div class="h-screen bg-blue-400"></div>
    <div class="h-screen bg-blue-500"></div>
    <div class="h-screen bg-blue-600"></div>
    <transition name="fade">
        <div id="pagetop" class="fixed right-0 bottom-0" v-show="scY > 300" @click="toTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
            stroke="#4a5568"
            stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
            <path d="M18 15l-6-6-6 6"/>
        </svg>
        </div>
    </transition>
    </div>
</template>

<script>
export default {
    data (){
        return {
            scTimer: 0,
            scY: 0,
        }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        Addtocart(){
            try{
                alert("Successfully add to cart")
            }
            catch(error){
                console.error("Error adding to cart!")
            }
        },
        plus(id){
            var a = document.getElementById(id).value
            try{
                a ++
                document.getElementById(id).value = a
                alert("Successfully added")
            }
            catch(error){
                console.error("Error adding item!")
            }

        },
        minus(id){
            var a = document.getElementById(id).value
            try{
                if (a == 0) {
                    a = 0
                } else{
                    a -=1
                }
                document.getElementById(id).value = a
                alert("Successfully removed")
            }
            catch(error){
                console.error("Error removing item!")
            }
        },
        handleScroll: function () {
            if (this.scTimer) return;
            this.scTimer = setTimeout(() => {
                this.scY = window.scrollY;
                clearTimeout(this.scTimer);
                this.scTimer = 0;
                }, 100);
      },
      toTop: function () {
            window.scrollTo({
            top: 0,
            behavior: "smooth"
            });
      },
    }

}
</script>

<style>
        .topnav {
          overflow: auto;
          background-color:#F4EDE5;
          align-content: center;
        }
        
        .topnav a {
          background-color: hsl(32, 44%, 21%);
          float: left;
          color: #f2f2f2;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
          justify-content: flex-start;
        }
        .topnav img{
            float: left;
        }
        
        .topnav a:hover {
          background-color: #F4EDE5;
          color: black;
        }
        
        .topnav a.active {
          background-color: #F4EDE5;
          color: black;
        }

        .topnav button{
            background-color: coral;
            float: right;
            font-size: 17px;
            text-align: center;
            border-radius: 10px; 
        }

        .topnav button:hover{
            background-color: #F4EDE5;
        }

        .number{
            margin: 100px;
        }
        .minus, .plus{
			width:40px;
			height:40px;
			background:#f2f2f2;
			border-radius:4px;
			padding:8px 5px 8px 5px;
			border:1px solid #ddd;
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-size: 17px;
            border-radius: 10px; 
        }
        .number input{
			height:34px;
            width: 70px;
            text-align: center;
            font-size: 26px;
			border:1px solid #ddd;
			border-radius:4px;
            display: inline-block;
            vertical-align: middle;}

        .column {
            position: relative;
            float: left;
            flex: 50%;
            padding: 5px;
        }   
        .menu {
            gap: 10px 20px;
            overflow: auto;
            justify-content: space-between;
            margin-left: auto;
            margin-right: auto;
        }
        .menu img{
            width:  400px;
            height: 400px;
            object-fit: cover;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: auto;
            margin-right: auto;
        }
		

</style>
