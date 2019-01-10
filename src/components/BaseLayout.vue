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
    <BaseToolbar :isLogin="isLogin" @login="isLogin=$event"></BaseToolbar>
    <v-content>
      <v-layout row>
        <router-view></router-view>
        <router-view name="Panel" :isLogin="isLogin"></router-view>
        <router-view name="Card" @login="isLogin=$event"></router-view>
      </v-layout>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-container>
</template>

<script>
import BaseToolbar from './BaseToolbar'

export default {
  components: {
    BaseToolbar,
  },
  data: () => ({
    drawer: null,
    isLogin: false
  }),
  props: {
    source: String
  },
  methods: {
    logout: function() {
      this.$router.push('/')
      this.isLogin = false
    }
  }
};
</script>

<style>
a {
  color: white !important;
  text-decoration: none;
}
</style>
