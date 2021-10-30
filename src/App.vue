<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import addBlog from "./components/addBlog.vue";
import AllDrinks from "./components/singleBlog.vue";
// import listBlogs from "./components/listBlogs.vue";
import header from "./components/header.vue";

export default {
  components: {
    // "add-blog": addBlog,
    "all-drinks-blogs": AllDrinks,
    // "list-blogs": listBlogs,
    "app-header": header,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
