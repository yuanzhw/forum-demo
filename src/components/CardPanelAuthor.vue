<template>
  <v-flex xs3>
    <v-card>
      <v-toolbar flat height="24px">
        <span>作者</span>
      </v-toolbar>
      <v-layout align-center justify-center>
        <v-flex text-xs-right>
          <v-avatar size="36" color="grey lighten-4">
            <img src="../assets/logo.png">
          </v-avatar>
        </v-flex>
        <v-flex>
          <span>{{item.username}}</span>
        </v-flex>
        <v-flex xs5>
          <v-spacer></v-spacer>
        </v-flex>
      </v-layout>
      <v-flex>
        <span>&nbsp;&nbsp;签名</span>
        <p>{{item.signature}}</p>
      </v-flex>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  data: function() {
    return {
      item: {}
    };
  },
  props: {
    isLogin: Boolean
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.axios
        .get(this.hostname + "/api/topic/" + this.$route.params.id, {
          withCredentials: true
        })
        .then(response => {
          console.log(response);
          let topic = response.data;
          this.axios
            .get(this.hostname + "/api/user/" + topic.user_id, {
              withCredentials: true
            })
            .then(response => {
              console.log(response);
              this.item = response.data;
            })
            .catch(error => {
              console.log(error);
              this.$emit("error-view", error.response.data);
              this.errored = true;
            })
            .finally(() => (this.loading = false));
        })
        .catch(error => {
          console.log(error);
          this.$emit("error-view", error.response.data);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>
