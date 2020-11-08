<template>
  <g-link :to="post.slug" style="display: block; text-decoration: none">
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
  </g-link>
</template>

<script>
export default {
  props: ["post"],
};
</script>
