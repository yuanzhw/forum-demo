<template>
  <v-flex>
    <v-flex>
    <v-card>
      <v-card-title primary-title>
        <h3 class="headline mb-0">{{ item.title }}</h3>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>{{ item.content }}</v-card-text>
    </v-card>
    </v-flex>
    <card-topic-reply :topic_id="$route.params.id" ref="reply"></card-topic-reply>
    <card-topic-reply-create :topic_id="$route.params.id" @reply-created="$refs.reply.getData()"></card-topic-reply-create>
  </v-flex>
</template>

<script>
import CardTopicReply from "./CardTopicReply.vue"
import CardTopicReplyCreate from "./CardTopicReplyCreate.vue"
export default {
  data: () => ({
    item: {},
  }),
  components:{
    CardTopicReply,
    CardTopicReplyCreate,
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
          this.item = response.data;
          this.$emit('get-user-id', this.item.user_id.toString())
        })
        .catch(error => {
          console.log(error);
          this.$emit("error-view", error.response.data);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  }
};
</script>
