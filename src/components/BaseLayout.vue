<template>
  <v-container id="inspire" grid-list-md>
    <base-toolbar
      @logout="logout"
      @login-view="LoginView=$event"
      @detail-view="DetailView=$event"
      @register-view="RegisterView=$event"
      @drawer="drawer=!drawer"
    ></base-toolbar>
    <v-content>
      <v-layout row>
        <router-view @get-user-id="userId=$event"></router-view>
        <router-view name="Panel" :userId='userId'></router-view>
        <div>
          <dialog-card-login
            v-if="LoginView"
            @login="login"
            @login-view="LoginView=$event"
            @error-view="err"
          ></dialog-card-login>
          <dialog-card-register
            v-if="RegisterView"
            @login="login"
            @register-view="RegisterView=$event"
            @error-view="err"
            :message="message"
          ></dialog-card-register>
          <dialog-card-error
            v-if="ErrorView"
            @error-view="ErrorView=$event"
            :message="message"
          ></dialog-card-error>
          <dialog-card-user-detail
            v-if="DetailView"
            @detail-view="DetailView=$event"
          ></dialog-card-user-detail>
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
import DialogCardUserDetail from "./DialogCardUserDetail"
import { store } from '../main.js';

export default {
  components: {
    BaseToolbar,
    DialogCardLogin,
    DialogCardRegister,
    DialogCardError,
    DialogCardUserDetail,
  },
  data: () => ({
    isLogin: JSON.parse(sessionStorage.getItem('isLogin')),
    LoginView: false,
    RegisterView: false,
    ErrorView: false,
    DetailView: false,
    message: '',
    userId: '',
    store:store,
  }),
  props: {
    source: String
  },
  mounted(){
    if(sessionStorage.getItem('isLogin') === "true"){
      console.log('true')
      this.store.loginAction()
    }else if(sessionStorage.getItem('isLogin') === "false"){
      console.log('false')
      this.store.logoutAction()
    }

  },
  methods: {
    logout: function() {
      this.$router.push("/");
      this.store.logoutAction();
      sessionStorage.setItem('isLogin', JSON.stringify(false))
    },
    login: function() {
      this.store.loginAction()
      sessionStorage.setItem('isLogin', JSON.stringify(true))
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
