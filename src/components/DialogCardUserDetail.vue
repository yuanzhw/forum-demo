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
                <v-text-field label="用户名*" v-model="item.username" :rules="nameRules" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="邮箱*" :rules="emailRules" v-model="item.email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="签名*"
                  :rules="signatureRules"
                  v-model="item.signature"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-container>
        <small>*必填项</small>
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
      v => !!v || "请输入用户名",
      v => (!!v && v.length <= 20) || "用户名不能超过20个字符"
    ],
    emailRules: [v => !!v || "请输入邮箱"],
    signatureRules: [v => !!v || "请输入签名"]
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
