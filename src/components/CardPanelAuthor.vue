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
          <span>yuanzhw</span>
        </v-flex>
        <v-flex xs5>
          <v-spacer></v-spacer>
        </v-flex>
      </v-layout>
      <v-flex>
        <span>&nbsp;&nbsp;签名</span>
      </v-flex>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  data: () => ({}),
  props: {
    isLogin: Boolean
  }
};
</script>
