<template>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="$emit('drawer')"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="$router.push('/')">首页</v-btn>
        <v-btn flat v-if="isLogin">
          <v-badge color="red">
            <span slot="badge">3</span>
            <span>未读消息</span>
          </v-badge>
        </v-btn>
        <v-btn flat v-if="isLogin">个人信息</v-btn>
        <v-btn flat @click="$emit('register-view', true)" v-if="!isLogin">注册</v-btn>
        <v-btn flat @click="$emit('login-view', true)" v-if="!isLogin">登陆</v-btn>
        <v-btn flat @click="$emit('login', false)" v-if="isLogin">退出</v-btn>
      </v-toolbar-items>
    </v-toolbar>    
</template>

<script>
export default {
    data: () =>({
    }),
    props: {
        isLogin: Boolean,
    }
}
</script>
