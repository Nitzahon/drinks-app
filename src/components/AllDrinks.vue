<template>
  <div id="columns">
    <h1>All Drinks</h1>
    <div class="column show-blogs ">
    <input type="text" v-model="search" placeholder="search blogs" />
    <div class="flex-container column">
      <v-popover>
        <div class="box" v-for="drink in filteredDrinks" v-bind:key="drink.id">
          <!-- <router-link v-bind:to="'/dv' + this.drink.idDrink"> -->
          <h2 class="subtitle">{{ drink.strDrink }}</h2>
          <br />
          <img id="thumbdrink" v-bind:src="drink.strDrinkThumb" />
          <!-- </router-link> -->
        </div>
        <drinkDetails slot="popover" v-bind:details="drink">{{drink}}</drinkDetails>
      </v-popover>
      <div v-if="isEmpty">Sorry no such drink exists in our database</div>
    </div>
    </div>
    <div class="column">tesxz</div>
  </div>
</template>

<script>
import Drink from "./Drink.vue";
import searchMixin from "../mixins/searchMixin";
export default {
  // data() {
  //   return {
  //     blogs: [],
  //     search: "",
  //   };
  // },
  // methods: {},
  // created() {
  //   this.$http
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then(function (data) {
  //       console.log(data);
  //       this.blogs = [...data.body];
  //     });
  // },
  computed: {},
  components: {
    drinkDetails: Drink,
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  methods:{
       isEmpty: function () {
      return this.filteredDrinks.length === 0;
    },
  },
  directives: {
    // rainbow: {
    //   bind(el, binding, vnode) {
    //     let randomColor = Math.floor(Math.random() * 0x1000000); // integer between 0x0 and 0xFFFFFF
    //     randomColor = randomColor.toString(16); // convert to hex
    //     randomColor = ("000000" + randomColor).slice(-6); // pad with leading zeros
    //     let backColor = parseInt(randomColor, 16);
    //     backColor = 0xffffff ^ backColor;
    //     backColor = backColor.toString(16); // convert to hex
    //     backColor = ("000000" + backColor).slice(-6); // pad with leading zeros
    //     el.style.color = "#" + randomColor; // prepend #
    //     el.style.background = "#" + backColor;
    //   },
    // },
  },
  mixins: [searchMixin],
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
/* .single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
} */
#thumbdrink {
  height: 100px !important;
}
.box {
  margin: 0.5em;
}
.popover {
  background-color: #ddd;
  color: #f9f9f9;
  left: 10rem;
}
.popover-inner {
  background: #ddd;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.popover-arrow {
  border-color: black;
}
</style>
