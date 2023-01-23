<script setup>
defineProps({
  canComment: {
    type: Boolean,
    default: true
  },
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="post">
    <header>
      <h3>{{ post.author.firstName }} {{  post.author.lastName }}</h3>
    </header>
    <p>
      {{ post.content }}
    </p>

    <div class="medias">
      <img 
        v-for="(media, i) in post.medias"
        :key="i"
        :src="media"
        alt=""
      />
    </div>

    <div class="interactions">
      <button>Like</button>
      <button v-if="canComment">Réagir</button>
    </div>

    <div
      v-if="post.comments.length"
      class="replies"
    >
      <Post
        v-for="comment in post.comments"
        :key="comment.id"
        :post="comment"
        :canComment="false"
      />
    </div>
  </div>
</template>

<style scoped>
.post {
  padding: 0.7rem;
  border-bottom: 1px solid pink;
}

.replies {
  margin-left: 1rem;
  border-left: 1px solid green;
}
</style>


