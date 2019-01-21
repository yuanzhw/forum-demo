<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">个人信息</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Username*" v-model="item.username" :rules="nameRules" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="E-mail*" :rules="emailRules" v-model="item.email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Signature*"
                  :rules="signatureRules"
                  v-model="item.signature"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="$emit('detail-view', false)">Close</v-btn>
        <v-btn color="blue darken-1" :disabled="!valid" @click="update" flat>Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: true,
    valid: true,
    item: {},
    nameRules: [
      v => !!v || "Name is required",
      v => (!!v && v.length <= 20) || "Name must be less than 20 characters"
    ],
    emailRules: [v => !!v || "E-mail is required"],
    signatureRules: [v => !!v || "Signature is required"]
  }),
  mounted() {
    this.getData();
  },
  props: {
    // dialog: Boolean,
  },
  methods: {
    getData: function() {
      this.axios
        .get(this.hostname + "/api/user/detail", {
          withCredentials: true
        })
        .then(response => {
          console.log(response);
          this.item = response.data;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    update: function() {
      if (this.$refs.form.validate()) {
        let data = this.item;
        this.axios
          .post(this.hostname + "/api/user/update", data, {
            withCredentials: true
          })
          .then(response => {
            console.log(response);
            this.$emit('detail-view', false)
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => (this.loading = false));
      }
    }
  }
};
</script>
