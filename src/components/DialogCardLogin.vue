<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">用户登陆</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="用户名*" v-model="username" :rules="nameRules" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="密码*" type="password" :rules="passwordRules" v-model="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-container>
        <small>*必填项</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="$emit('login-view', false)">关闭</v-btn>
        <v-btn color="blue darken-1" :disabled="!valid" flat @click="login">登陆</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { store } from '../main.js';
export default {
  data: () => ({
    dialog: true,
    username: "",
    password: "",
    valid: true,
    nameRules: [
      v => !!v || "请输入用户名",
      v => v.length <= 20 || "用户名不能超过20个字符"
    ],
    passwordRules: [
      v => !!v || "请输入密码"
    ],
    store:store,
  }),
  props: {
    // dialog: Boolean,
  },
  methods: {
    login: function() {
      let data = {
        username: this.username,
        password: this.password
      };
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.axios
          .post(this.hostname + "/api/user/login", data, {
            withCredentials: true
          })
          .then(response => {
            console.log(response);
            this.$emit("login-view", false);
            this.$emit("login", true);
            this.store.loginAction()
          })
          .catch(error => {
            console.log(error);
            this.$emit("error-view", error.response.data);
            this.$emit("login-view", false);
            this.errored = true;
          })
          .finally(() => (this.loading = false));
      }
    },
    logout: function() {
      this.router.push("/");
      this.$emit("login", false);
    }
  }
};
</script>
