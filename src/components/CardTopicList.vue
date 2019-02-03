<template>
  <v-flex d-flex>
    <v-card width="100%">
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index" @click="$router.push('/topic_detail/' + item.id)">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ item.content }}</v-list-tile-sub-title>
              <!-- <v-list-tile-sub-title>topic suptitle</v-list-tile-sub-title> -->
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ getTimeDiff(item.create_time) }}</v-list-tile-action-text>
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
  mounted() {
    this.getData()
  },
  methods: {
    getData: function() {
      this.axios
        .get(this.hostname + "/api/topic/list", {
          withCredentials: true
        })
        .then(response => {
          console.log(response);
          this.items = response.data
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

