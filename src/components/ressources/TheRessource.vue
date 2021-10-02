<template>

<based-card>
   <based-button @click="setSelectedTab('stored-ressources')">Stored Ressources</based-button>
   <based-button @click="setSelectedTab('add-ressource')">Add Ressource</based-button>
</based-card>



</template>


<script>

import StoredRessources from './StoredRessources.vue';
import AddRessource from './AddRessource.vue';



  export default{

components:{
     StoredRessources,
     AddRessource,

},

   provide(){
           
           return{
             resources : this.storedRessources
           }
            
         
   },
    

data(){

    return {

           
            selectedTab : 'stored-ressources',
        
            storedRessources:[

                {
                id:"vue",
                title:"official guide",
                description:'The official vue js documentation',
                link:"https://vuejs.org/"
                
                },
                {
                id:"google",
                title:"google",
                description:'learn to google...',
                link:"https://google.com/"},
                
            ]
    }
  },

  methods:{

      setSelectedTab(tab){

          this.selectedTab = tab;
      }
  }

 

  }

</script>


<style scoped></style>
