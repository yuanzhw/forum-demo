<template>
  <v-flex d-flex>
    <v-card width="100%">
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-btn flat @click="read_all">全部已读</v-btn>
      </v-toolbar>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index" @click="read(item)">
            <v-list-tile-content>
              <v-list-tile-sub-title
                class="text--primary"
                :class="{read: !item.read}"
              >{{ item.content }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ getTimeDiff(item.create_time) }}</v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>
import { store } from "../main.js";
export default {
  data: () => ({
    items: [],
    store: store
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.axios
        .get(this.hostname + "/api/message/list", {
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
    },
    read: function(item) {
      this.axios
        .get(this.hostname + "/api/message/" + item.id, {
          withCredentials: true
        })
        .then(response => {
          console.log(response);
          if (item.read === false) {
            item.read = true;
            this.store.setUnreadAction(this.store.stat.unread - 1);
          }
        })
        .catch(error => {
          console.log(error);
          this.$emit("error-view", error.response.data);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    read_all: function(){
      this.axios
        .get(this.hostname + "/api/message/read_all",{
          withCredentials: true
        })
        .then(response => {
          console.log(response);
          for (let i in this.items){
            this.items[i].read = true
          }
          this.store.setUnreadAction(0)
        })
        .catch(error => {
          console.log(error);
          this.$emit("error-view", error.response.data);
          this.errored = true
        })
    }
  }
};
</script>

<style scoped>
.read {
  font-weight: bold;
}
</style>
