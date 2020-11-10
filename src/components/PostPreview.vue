<template>
  <g-link
    :to="post.slug"
    style="display: block; text-decoration: none"
    id="post-preview-root"
  >
    <div class="card post">
      <p id="title">{{ post.title }}</p>
      <img :src="post.picture" />
      <p>{{ post.description }}</p>
      <post-metadata
        :createdAt="post.createdAt"
        :tags="post.tags"
      ></post-metadata>
    </div>
  </g-link>
</template>

<script>
import PostMetadata from "~/components/PostMetadata.vue";
export default {
  props: ["post"],
  components: { PostMetadata },
};
</script>

<style scoped>
#post-preview-root {
  max-width: 800px;
}

img {
  max-width: 100%;
}

.post {
  padding: 1em;
  margin-bottom: 1em;
}

#title {
  font-weight: bold;
  font-size: 1rem;
}
p {
  font-size: 0.8rem;
}

@media (min-width: 600px) {
  .post {
    padding-top: 2em;
    padding-bottom: 2em;
    padding-left: 4em;
    padding-right: 4em;
    margin-bottom: 2em;
  }
  #title {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>
