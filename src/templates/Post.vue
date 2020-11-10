<template>
  <layout>
    <div id="post-root">
      <h1>{{ $page.post.title }}</h1>
      <post-metadata
        :createdAt="$page.post.createdAt"
        :tags="$page.post.tags"
      ></post-metadata>
      <div v-html="$page.post.content"></div>
    </div>
  </layout>
</template>

<script>
import PostMetadata from "~/components/PostMetadata.vue";
export default {
  components: { PostMetadata },
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
  max-width: 650px;
  margin: auto;
}

blockquote {
  font-style: italic;
  border-left: 1px solid #777777;
  margin-left: 0;
  padding-left: 1em;
}
</style>
