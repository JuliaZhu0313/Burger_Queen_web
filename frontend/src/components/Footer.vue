<template>
  <br>
  <div id="footer">
    <br>
    <div id="hyperlink">
        <br>
        <a id="aboutQB" v-on:click="AboutBQ">About QUEEN BURGER</a><br>
        <a id="helpCentre" v-on:click="HelpCentre">Help Centre</a><br>
        <a id="Privacy" v-on:click="Privacy">Privacy Policy</a><br>
    </div>
    <br>
    <div id="address" style="text-align:center;">
        <h1><strong>BURGER QUEEN</strong></h1>
        <h4>TM & © 2022 Burger Queen Corporation. Used under license. All rights reserved.</h4>
        <h4>Computing 1, 13 Computing Drive, Singapore, 117417</h4><br>
    </div>
    <div id="scrollTop" style="text-align:center;">
        <button id='topbtn' @click="topFunction"><strong>BACK TO THE TOP</strong></button>
    </div>
  </div>
</template>

<script>
export default {
    name:"Footer",
    mounted () {
    //
    },

    methods: {
        AboutBQ: function() {
            this.$router.push("/AboutUs")
        },

        HelpCentre: function() {
            this.$router.push("/HelpCentre")
        },

        Privacy: function() {
            this.$router.push("/Privacy")
        },

        topFunction: function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    }

}
</script>

<style>
#footer {
    background-color: rgb(64, 64, 64);
    overflow: auto;
    color: white;
}
#hyperlink {
    padding: 0px 580px 0px;
    text-align: left;
}
/* visited link */
#hyperlink a:visited {
  color: blue;
}

/* mouse over link */
#hyperlink a:hover {
  color: rgb(255,94,0);
}

/* selected link */
#hyperlink a:active {
  color: rgba(238, 119, 1, 0.5);
}

#topbtn{
    color: white;
    border: 1.5px solid rgb(46, 41, 41);
    border-radius: 20px;
    padding: 30px;
    background-color: rgb(255,94,0);
    text-align: center;
    margin: auto;
    font-size: 40px;
    overflow: auto;
}
#topbtn:hover{
    color: black;
    background-color: rgb(255, 94, 0);
}
</style>

