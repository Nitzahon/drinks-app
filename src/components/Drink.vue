<template>
  <tabs>

 <tab name="Ingredients" :selected="true">
      <h1>Ingredients:{{this.details}}</h1>
      <!-- <div v-for="ingerdient in ingredients" :key="ingerdient">
        {{ingerdient}}
      </div> -->
    </tab>
    <tab name="Directions">
      <h1>Directions:</h1>
       <span>{{this.details.str.strInstructions}}</span>
    </tab>
    <tab name="Measures">
      <h1>Measures:</h1>
            <!-- <div v-for="measure in measures" :key="measure">
        {{measure}}
      </div> -->
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
    },
    measures:function(){
      let messureList=[];
      for(let key in details){
        if(key.toUpperCase().match("strMeasure")){
          messureList.push(details[key])
        }
      }
      return messureList;
    },
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