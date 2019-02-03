import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import CardPanelUser from './components/CardPanelUser'
import CardPanelAuthor from './components/CardPanelAuthor'
import CardTopicList from './components/CardTopicList'
import CardTopicDetail from './components/CardTopicDetail'
import CardTopicCreate from './components/CardTopicCreate'
import axios from 'axios'
import Cookies from 'js-cookie'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.axios = axios
Vue.prototype.Cookies = Cookies
Vue.prototype.hostname = 'http://localhost:2000'
Vue.prototype.getTimeDiff = function(t){
  let create_time = new Date(t * 1000)
  let diff =Date.now() - create_time
  let day = Math.floor(diff / (1000 * 3600 * 24))
  let hour = Math.floor(diff % (1000 * 3600 * 24) / (1000 * 3600))
  let minute = Math.ceil(diff % (1000 * 3600 * 24) % (1000 * 3600) / (1000 * 60))
  if (day){
    return day + '天前'
  }else if(hour){
    return hour + '小时前'
  }else if(minute){
    return minute + '分钟前'
  }
}

const routes = [
  {
    path: '/',
    components: {
      default: CardTopicList,
      Panel: CardPanelUser,
    },
  },
  {
    path: '/topic_create',
    components: {
      default: CardTopicCreate,
    },
  },
  {
    path: '/topic_detail/:id',
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
