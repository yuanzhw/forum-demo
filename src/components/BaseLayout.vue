<template>
  <v-container id="inspire" grid-list-md>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>首页</v-btn>
        <v-btn flat v-if="isLogin">
          <v-badge color="red">
            <span slot="badge">3</span>
          <span>未读消息</span>
          </v-badge>
        </v-btn>
        <v-btn flat v-if="isLogin">个人信息</v-btn>
        <v-btn flat v-if="!isLogin">注册</v-btn>
        <v-btn flat @click="login" v-if="!isLogin">登陆</v-btn>
        <v-btn flat @click="login" v-if="isLogin">退出</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-layout row>
        <!-- <Topics></Topics> -->
        <!-- <Panel :isLogin="isLogin"></Panel> -->
        <router-view></router-view>
        <router-view name="Panel" :isLogin="isLogin"></router-view>
      </v-layout>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-container>
</template>

<script>
import Topics from "./Topics";
import Panel from "./Panel";

export default {
  components: {
    Topics,
    Panel
  },
  data: () => ({
    drawer: null,
    isLogin: false
  }),
  props: {
    source: String
  },
  methods: {
    login: function() {
      this.isLogin = !this.isLogin;
    }
  }
};
</script>
