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
    <base-toolbar
      :isLogin="isLogin"
      @login="isLogin=$event"
      @login-view="LoginView=$event"
      @register-view="RegisterView=$event"
      @drawer="drawer=!drawer"
    ></base-toolbar>
    <v-content>
      <v-layout row>
        <router-view></router-view>
        <router-view name="Panel" :isLogin="isLogin"></router-view>
        <div>
          <dialog-card-login
            v-if="LoginView"
            @login="isLogin=$event"
            @login-view="LoginView=$event"
            @error-view="err"
          ></dialog-card-login>
          <dialog-card-register
            v-if="RegisterView"
            @login="isLogin=$event"
            @register-view="RegisterView=$event"
          ></dialog-card-register>
          <dialog-card-error
            v-if="ErrorView"
            @error-view="ErrorView=$event"
            :message="message"
          ></dialog-card-error>
        </div>
      </v-layout>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-container>
</template>

<script>
import BaseToolbar from "./BaseToolbar";
import DialogCardLogin from "./DialogCardLogin";
import DialogCardRegister from "./DialogCardRegister";
import DialogCardError from "./DialogCardError";

export default {
  components: {
    BaseToolbar,
    DialogCardLogin,
    DialogCardRegister,
    DialogCardError,
  },
  data: () => ({
    drawer: null,
    isLogin: false,
    LoginView: false,
    RegisterView: false,
    ErrorView: false,
    message: '',
  }),
  props: {
    source: String
  },
  methods: {
    logout: function() {
      this.$router.push("/");
      this.isLogin = false;
    },
    err: function(message) {
      this.ErrorView = true;
      this.message = message;
    }
  }
};
</script>

<style scoped>
</style>
