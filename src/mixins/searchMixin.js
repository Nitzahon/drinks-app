
var letters = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
export default{
  name: "AllDrinks",
  data() {
    return {
      drinksArray: [],
      search: "",
    };
  },
  methods: {
    
  },
  created() {
    letters.forEach((letter)=>{
      this.$http
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letter)
        .then(function (data) {
          data.body.drinks.forEach((drink)=>{

            this.drinksArray.push(drink);
          })
        });

    });
    },
    computed:{
      filteredDrinks: function () {
            return this.drinksArray.filter((drink) => {
              return drink.strDrink.match(this.search);
            });
          },
    }
}