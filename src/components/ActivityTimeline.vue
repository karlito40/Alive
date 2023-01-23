<script setup>
import Post from './Post.vue'

defineProps({
  timeline: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div class="ActivityTimeline">
    <Post
      v-for="post in timeline"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<style scoped>

</style>