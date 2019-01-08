<template>
  <v-flex d-flex>
    <v-card width="100%">
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              <v-list-tile-title>topic title</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">topic headline</v-list-tile-sub-title>
              <v-list-tile-sub-title>topic suptitle</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>11 min</v-list-tile-action-text>
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
    items: [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 3
      }
    ]
  })
};
</script>

