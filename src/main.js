import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import Panel from './components/Panel'
import Topics from './components/Topics'
import LoginCard from './components/LoginCard'
import RegisterCard from './components/RegisterCard'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      default: Topics,
      Panel: Panel,
    },
  },
  {
    path: '/login',
    components: {
      default: Topics,
      Panel: Panel,
      Card: LoginCard,
    },
  },
  {
    path: '/register',
    components: {
      default: Topics,
      Panel: Panel,
      Card: RegisterCard,
    },
  },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
