<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">用户注册</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="用户名*" v-model="username" :rules="nameRules" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="密码*"
                  v-model="password"
                  :rules="passwordRules"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="邮箱"></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-container>
        <small>*必填项</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="$emit('register-view', false)">关闭</v-btn>
        <v-btn color="blue darken-1" :disabled="!valid" flat @click="register">注册</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: true,
    valid: true,
    username: "",
    password: "",
    nameRules: [
      v => !!v || "请输入用户名",
      v => v.length <= 20 || "用户名不能超过20个字符"
    ],
    passwordRules: [v => !!v || "请输入密码"]
  }),
  props: {
    message: ""
    // dialog: Boolean,
  },
  methods: {
    register: function() {
      let data = {
        username: this.username,
        password: this.password
      };
      if (this.$refs.form.validate()) {
        this.axios
          .post(this.hostname + "/api/user/register", data, {
            withCredentials: true
          })
          .then(response => {
            console.log(response);
            this.$emit("register-view", false);
            this.$emit("login", true);
          })
          .catch(error => {
            console.log(error);
            this.$emit("error-view", error.response.data);
            this.$emit("register-view", false);
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
