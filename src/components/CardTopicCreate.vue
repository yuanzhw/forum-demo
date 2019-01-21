<template>
  <v-flex>
    <v-card>
      <v-form class="pa-3 pt-4">
        <v-text-field label="标题" placeholder="请输入标题" v-model="title" outline></v-text-field>
        <v-textarea outline label="正文" counter="500" v-model="content"></v-textarea>
        <v-btn color="indigo" @click="create">
          <span style="color:white">提交</span>
        </v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    title: "",
    content: ""
  }),
  methods: {
    create: function() {
      let data = {
        title: this.title,
        content: this.content
      };
      let config = {
        withCredentials: true,
        params: {token: this.Cookies.get("csrf_token")}
      };
      this.axios
        .post(this.hostname + "/api/topic/new", data, config)
        .then(resopnse => {
          console.log(resopnse);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => (this.loading = false));
        this.$router.push('/')
    }
  }
};
</script>
