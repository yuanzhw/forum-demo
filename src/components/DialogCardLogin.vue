<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">User Login</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Username*" v-model="username" :rules="nameRules" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" :rules="passwordRules" v-model="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="$emit('login-view', false)">Close</v-btn>
        <v-btn color="blue darken-1" :disabled="!valid" flat @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: true,
    username: "",
    password: "",
    valid: true,
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 20 || "Name must be less than 20 characters"
    ],
    passwordRules: [
      v => !!v || "password is required"
    ],
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
