<template>
  <v-flex d-flex>
    <v-card width="100%">
      <v-toolbar flat height="24px">
        <span>回复</span>
      </v-toolbar>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.username }}</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ item.content }}</v-list-tile-sub-title>
              <!-- <v-list-tile-sub-title>topic suptitle</v-list-tile-sub-title> -->
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon color="grey lighten-1">star_border</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  data: () => ({
    items: []
  }),
  props:{
      topic_id: String      
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.axios
        .get(this.hostname + "/api/reply/list/" + this.topic_id, {
          withCredentials: true
        })
        .then(response => {
          console.log(response);
          this.items = response.data;
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

