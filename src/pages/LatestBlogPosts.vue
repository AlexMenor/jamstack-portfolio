<template>
  <Layout>
    <div class="flex-all-center">
      <div>
        <div v-for="edge in $page.posts.edges" :key="edge.node.id">
          <h1>{{ edge.node.title }}</h1>
          <p>{{ edge.node.description }}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
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
      }
    }
  }
}

</page-query>
