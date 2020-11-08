<template>
  <Layout>
    <div class="flex-all-center">
      <div>
        <post-preview
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        ></post-preview>
      </div>
    </div>
  </Layout>
</template>

<script>
import PostPreview from "~/components/PostPreview.vue";
export default {
  components: {
    PostPreview,
  },
  metaInfo: {
    title: "My latest blog posts",
  },
};
</script>

<page-query>
query {
  posts: allPost(sortBy: "createdAt", order: DESC) {
    edges {
      node {
        id
        title
        description
        createdAt
        picture
        tags
        slug
      }
    }
  }
}

</page-query>
