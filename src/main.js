import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import CardPanelUser from './components/CardPanelUser'
import CardPanelAuthor from './components/CardPanelAuthor'
import CardTopicList from './components/CardTopicList'
import CardTopicDetail from './components/CardTopicDetail'
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
      Panel: CardPanelUser,
    },
  },
  {
    path: '/login',
    components: {
      default: CardTopicList,
      Panel: CardPanelUser,
      Card: CardLogin,
    },
  },
  {
    path: '/register',
    components: {
      default: CardTopicList,
      Panel: CardPanelUser,
      Card: CardRegister,
    },
  },
  {
    path: '/topic_create',
    components: {
      default: CardTopicCreate,
    },
  },
  {
    path: '/topic_detail',
    components: {
      default: CardTopicDetail,
      Panel: CardPanelAuthor,

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
