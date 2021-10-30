import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'

Vue.directive('tooltip', VTooltip)
Vue.directive('close-popover', VClosePopover)
Vue.component('v-popover', VPopover)
Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: Routes
});
//Custom directives
// Vue.directive('rainbow',{
//   bind(el, binding, vnode){
//     el.style.color = "#"+[...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
//   }
// });
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px"
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px"
    }
    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});
Vue.component('tabs', {
  template: `
      <div>
          <div class="tabs">
            <ul>
              <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                  <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
              </li>
            </ul>
          </div>

          <div class="tabs-details">
              <slot></slot>
          </div>
      </div>
  `,
  
  data() {
      return {tabs: [] };
  },
  
  created() {
      
      this.tabs = this.$children;
      
  },
  methods: {
      selectTab(selectedTab) {
          this.tabs.forEach(tab => {
              tab.isActive = (tab.name == selectedTab.name);
          });
      }
  }
});

Vue.component('tab', {
  
  template: `

      <div v-show="isActive"><slot></slot></div>

  `,
  
  props: {
      name: { required: true },
      selected: { default: false}
  },
  
  data() {
      
      return {
          isActive: false
      };
      
  },
  
  computed: {
      
      href() {
          return '#' + this.name.toLowerCase().replace(/ /g, '-');
      }
  },
  
  mounted() {
      
      this.isActive = this.selected;
      
  }
});

//Filters
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// });
Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + "...";
});
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
