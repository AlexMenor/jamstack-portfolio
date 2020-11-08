<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link
          to="/"
          style="text-decoration:none;color:black;letter-spacing:2px;"
        >
          <span
            style="color:white;background-color:black; padding-left:4px;padding-right:2px;margin-right:2px"
            >{{ $static.metadata.siteName[0] }}</span
          >
          <span>{{ $static.metadata.siteName.slice(1) }}</span></g-link
        >
      </strong>
      <nav class="nav">
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

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
