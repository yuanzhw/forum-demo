<template>
  <v-flex>
    <v-card>
      <v-toolbar flat height="24px">
        <span>添加回复</span>
      </v-toolbar>
      <v-form class="pa-3 pt-4">
        <v-textarea outline label="回复" counter="500" v-model="content"></v-textarea>
        <v-btn color="indigo" @click="create">
          <span style="color:white">回复</span>
        </v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    content: ""
  }),
  props: {
    topic_id: String
  },
  methods: {
    create: function() {
      let data = {
        topic_id: this.topic_id,
        content: this.content
      };
      let config = {
        withCredentials: true,
        params: { token: this.Cookies.get("csrf_token") }
      };
      this.axios
        .post(this.hostname + "/api/reply/new", data, config)
        .then(resopnse => {
          console.log(resopnse);
          this.$emit('reply-created');
          this.content='';
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>
