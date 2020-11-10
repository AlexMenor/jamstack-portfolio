<template>
  <layout>
    <div id="post-root">
      <h1>{{ $page.post.title }}</h1>
      <div v-html="$page.post.content"></div>
    </div>
  </layout>
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

<style>
#post-root {
  max-width: 600px;
  margin: auto;
}

blockquote {
  font-style: italic;
  border-left: 1px solid #777777;
  margin-left: 0;
  padding-left: 1em;
}
</style>
