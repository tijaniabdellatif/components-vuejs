<template>

<based-card>
   <based-button @click="setSelectedTab('stored-ressources')">Stored Ressources</based-button>
   <based-button mode="flat" @click="setSelectedTab('add-ressource')">Add Ressource </based-button>
</based-card>


<keep-alive>
       <component :is="selectedTab"></component>
</keep-alive>
 





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
             resources : this.storedRessources,
             addRessource : this.addRessource
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
                link:"https://google.com/"
                },
                
            ]
    }
  },

  methods:{

      setSelectedTab(tab){

          this.selectedTab = tab;
      },

      addRessource(title,description,url){

          const newResource = {

              id:new Date().toISOString(),
              title:title,
              description:description,
              link:url
                
          }


          this.storedRessources.unshift(newResource);
          this.selectedTab = "stored-ressources";


      }
  }

 

  }

</script>


<style scoped></style>
