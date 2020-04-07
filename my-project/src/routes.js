import home from './components/home.vue'
import About from './components/About.vue'


const routes = [
    { path: '/', component: home, name : 'Homepage'},
    {path: '/About', component: About, name : 'About' }
  ]


  export default routes