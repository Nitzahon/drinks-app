<template>
  <tabs>

 <tab name="Ingredients" :selected="true">
      <h1>What we do{{this.details}}</h1>
      <!-- <div v-for="ingerdient in ingredients" :key="ingerdient">
        {{ingerdient}}
      </div> -->
    </tab>
    <tab name="Pricing">
      <h1>How much we do it for</h1>
    </tab>
    <tab name="About Us">
      <h1>Why we     {{this.details}} do it</h1>
    </tab>
  </tabs>
</template>

<script>
export default {
  props: {
    details:{
      type:Array,
      required:true
    }
  },
  computed:{
    ingredients: function(){
      let ingredientList=[];
      for(let key in details){
        if(key.toUpperCase().match("strIngredient")){
          ingredientList.push(details[key])
        }
      }
      return ingredientList;
    }
  }
  // methods: {
  //   goDetailDrink: function () {
  //     this.$router.push({  path: '/dv' + this.drink.idDrink  })
  //   }
  // }
};
</script>

<style scoped>
#thumbdrink {
  height: 100px !important;
}
.box{
  margin: 0.5em;
}

</style>