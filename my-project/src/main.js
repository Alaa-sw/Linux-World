import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import home from './components/home.vue'
//import About from './components/About.vue'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)




const router = new VueRouter({
  routes // short for `routes: routes`
})



new Vue({
  
  render: h => h(App),
  router
}).$mount('#app')
