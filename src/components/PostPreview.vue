<template>
  <g-link
    :to="post.slug"
    style="display: block; text-decoration: none"
    id="root"
  >
    <div class="card">
      <h1>{{ post.title }}</h1>
      <img :src="post.picture" />
      <p>{{ post.description }}</p>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
#root {
  max-width: 800px;
}

img {
  max-width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding-top: 2em;
  padding-bottom: 2em;
  padding-left: 4em;
  padding-right: 4em;
  margin-bottom: 2em;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
