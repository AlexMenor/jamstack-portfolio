<template>
  <Layout>
    <div class="flex-all-center">
      <div>
        <g-link
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          style="display: block; text-decoration: none"
          :to="edge.node.slug"
        >
          <h1>{{ edge.node.title }}</h1>
          <p>{{ edge.node.description }}</p>
        </g-link>
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
        slug
      }
    }
  }
}

</page-query>
