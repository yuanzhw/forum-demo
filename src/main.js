import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import CardPanel from './components/CardPanel'
import CardTopicList from './components/CardTopicList'
import CardLogin from './components/CardLogin'
import CardRegister from './components/CardRegister'
import CardTopicCreate from './components/CardTopicCreate'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      default: CardTopicList,
      Panel: CardPanel,
    },
  },
  {
    path: '/login',
    components: {
      default: CardTopicList,
      Panel: CardPanel,
      Card: CardLogin,
    },
  },
  {
    path: '/register',
    components: {
      default: CardTopicList,
      Panel: CardPanel,
      Card: CardRegister,
    },
  },
  {
    path: '/topic_create',
    components: {
      default: CardTopicCreate,
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
