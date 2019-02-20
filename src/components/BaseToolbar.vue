<template>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="$emit('drawer')"></v-toolbar-side-icon>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat @click="$router.push('/')">首页</v-btn>
      <v-btn flat v-if="isLogin" @click="$router.push('/message')">
        <v-badge color="red">
          <span slot="badge" v-if="store.stat.unread"> {{ store.stat.unread }} </span>
          <span>未读消息</span>
        </v-badge>
      </v-btn>
      <v-btn flat v-if="isLogin" @click="$emit('detail-view', true)">个人信息</v-btn>
      <v-btn flat @click="$emit('register-view', true)" v-if="!isLogin">注册</v-btn>
      <v-btn flat @click="$emit('login-view', true)" v-if="!isLogin">登陆</v-btn>
      <v-btn flat @click="$emit('logout')" v-if="isLogin">退出</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { store } from '../main.js';
export default {
  data: () => ({
    item: Object,
    store:store,
  }),
  props: {
    isLogin: Boolean
  },
  mounted(){
    this.getUnread()
  },
  methods: {
    getUnread: function() {
      this.axios
        .get(this.hostname + "/api/message/unread", {
          withCredentials: true
        })
        .then(response => {
          console.log(response);
          this.item = response.data;
          this.store.setUnreadAction(this.item.unread)
        })
        .catch(error => {
          console.log(error);
          this.$emit("error-view", error.response.data);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  }
};
</script>
