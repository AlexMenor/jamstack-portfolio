<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" style="text-decoration:none;color:black">{{
          $static.metadata.siteName
        }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/latest-blog-posts/"
          >Latest blog posts</g-link
        >
      </nav>
    </header>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 1500px;
  margin: 0 auto;
}

.header {
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.content {
  padding-right: 20px;
  padding-left: 20px;
}

.nav__link {
  margin-left: 20px;
  text-decoration: none;
}

.flex-all-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

a {
  color: black;
}
</style>
