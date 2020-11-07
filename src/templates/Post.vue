<template>
  <h1>{{ $page.post.title }}</h1>
</template>

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
