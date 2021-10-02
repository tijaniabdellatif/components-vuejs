<template>
    
    <main-header title="tutorial"></main-header>
    <the-ressource></the-ressource>
   


</template>


<script>


import MainHeader from './components/layouts/MainHeader.vue';
import TheRessource from './components/ressources/TheRessource.vue';
export default{


    components:{
            
            MainHeader,
            TheRessource,
    },


}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap');

*{
    box-sizing: border-box;
}

html {

    font-family: 'Open Sans Condensed', sans-serif;
}

body{
    margin: 0;
}

</style>