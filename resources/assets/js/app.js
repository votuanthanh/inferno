import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Sidebar from './components/sidebar/Collapse'

console.log(Sidebar);

Vue.component('sidebar-collapse', Sidebar)

// Adding the X-CSRF-Token to all axios request
axios.interceptors.request.use(function(config){
  config.headers['X-CSRF-TOKEN'] = window.Laravel.csrfToken
  return config
})

// Making axios available as $http
// so that the ajax calls are not axios dependent
Vue.prototype.$http = axios

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const app = new Vue({
  el: '#app'
})

app.$http.get('/api/hello').then(res => {
    console.log(res);
});
