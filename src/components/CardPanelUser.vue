<template>
  <v-flex xs3>
    <v-card v-if="isLogin">
      <v-toolbar flat height="24px">
        <span>个人信息</span>
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
        <p>&nbsp;&nbsp;{{item.signature}}</p>
      </v-flex>
      <div>
        <v-btn color="indigo" depressed @click="$router.push('/topic_create')">
          <span style="color:white">发布话题</span>
        </v-btn>
      </div>
    </v-card>
    <v-card v-if="!isLogin">
      <v-flex>
      <span>请登陆或注册</span>
      </v-flex>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  data: () => ({
    item: {}
  }),
  props: {
    isLogin: Boolean
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData: function (){
      this.axios
          .get(this.hostname + "/api/user/detail", {
            withCredentials: true
          })
          .then(response => {
            console.log(response);
            this.item = response.data
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => (this.loading = false));
    }
  }
};
</script>
