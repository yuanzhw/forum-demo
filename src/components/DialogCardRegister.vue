<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">User Login</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Username*" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Password*" type="password" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Email"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="$emit('register-view', false)">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="login">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: true
  }),
  props: {
    // dialog: Boolean,
  },
  methods: {
    login: function() {
      this.$emit("register-view", false);
      this.$emit('login', true)
    },
    logout: function() {
      this.router.push("/")
      this.$emit('login', false)
    }
  }
};
</script>
