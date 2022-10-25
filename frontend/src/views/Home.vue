<template>
<MainMenu/>
<!-- <WelcomeCPP/>
<AddCoin @added="change" />
<ProfitDisplay :key="refreshComp"/> -->
<!-- <img id = "bg" src = "@/assets/coin2.png" alt=""> -->
</template>

<script>
// import WelcomeCPP from '@/components/WelcomeCPP.vue';
// import AddCoin from '@/components/AddCoin.vue';
// import ProfitDisplay from '@/components/ProfitDisplay.vue';
import MainMenu from '@/components/MainMenu.vue'

export default {
    name: 'App',
    components: {
        // WelcomeCPP, 
        // AddCoin, 
        // ProfitDisplay
        MainMenu
    },
    data(){
        return{
            refreshComp:0
        }
    },
    methods:{
        change(){
            this.refreshComp += 1
        }
    }
}
</script>

<style>

</style>