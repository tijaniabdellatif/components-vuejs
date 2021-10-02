<template>

  <based-card>
  
     <form @submit.prevent="submitData">
      
        <div class="form-control">
         
           <label for="title">Title</label>
           <input type="text" id="title" name="title" ref="titleInput"/>

        </div>

         <div class="form-control">
         
           <label for="description">Description</label>
           <textarea type="text" id="description" rows="3" name="description" ref="descriptionInput"></textarea>

        </div>

         <div class="form-control">
         
           <label for="link">Title</label>
           <input type="url" id="link" name="link"  ref="linkInput"/>

        </div>


        <div>
            <based-button type="submit">Add Ressource</based-button>
        </div>

     </form>
  </based-card>
 
  
</template>


<script>



 export default{
 
   inject:['addRessource'],

   methods:{

       submitData(){

           const userTitle = this.$refs.titleInput.value;
           const userDesc = this.$refs.descriptionInput.value;
           const userUrl = this.$refs.linkInput.value;

    

          this.addRessource(userTitle,userDesc,userUrl)
       }

   

   }



 }
</script>


<style scoped>

.form-control{

    margin : 1rem 0;
}
 label{

     font-weight: bold;
     display: block;
     margin-bottom: 0.5rem;
 }

 input,
 textarea{
   
     display: block;
     width:100%;
     font:inherit;
     padding: 0.15rem;
     border : 1px solid #ccc;

 }

 input:focus,
 textarea:focus{

     outline:none;
     border-color: #3a0061;
     background-color: #F7ebff;
 }
</style>