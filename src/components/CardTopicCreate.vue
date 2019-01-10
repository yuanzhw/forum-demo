<template>
  <v-flex>
    <v-card>
      <v-form class="pa-3 pt-4">
        <v-text-field label="标题" placeholder="请输入标题" outline></v-text-field>
        <v-textarea outline label="正文" counter="500"></v-textarea>
        <v-btn color="indigo" @click="$router.push('/')">
          <span style="color:white">提交</span>
        </v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {};
</script>
