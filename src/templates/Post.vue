<template>
  <h1>{{ $page.post.title }}</h1>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
    createdAt
    picture
    tags
  }
}
</page-query>
