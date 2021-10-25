import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

//Custom directives
// Vue.directive('rainbow',{
//   bind(el, binding, vnode){
//     el.style.color = "#"+[...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
//   }
// });
Vue.directive('theme',{
  bind(el, binding, vnode){
    if(binding.value=='wide'){
      el.style.maxWidth="1200px"
    }else if (binding.value=='narrow') {
      el.style.maxWidth="560px"
    }
    if(binding.arg=='column'){
      el.style.background='#ddd';
      el.style.padding='20px';
    }
  }
});

//Filters
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// });
Vue.filter('snippet', function(value){
  return value.slice(0,100)+"...";
});
new Vue({
  el: '#app',
  render: h => h(App)
})
