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
        <v-btn flat>未读消息</v-btn>
        <v-btn flat>个人信息</v-btn>
        <v-btn flat>注册</v-btn>
        <v-btn flat>登陆</v-btn>
        <v-btn flat>退出</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-layout row>
        <Topics></Topics>
        <Panel></Panel>
      </v-layout>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-container>
</template>

<script>
import Topics from "./Topics"
import Panel from "./Panel"

export default {
  components: {
    Topics,
    Panel,
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>
