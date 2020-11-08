<template>
  <Layout>
    <console-hero consoleText="I like to do Backend Development" />
    <about-me-card></about-me-card>

    <h1>Some of the technologies I enjoy the most are:</h1>
    <ul>
      <li>NodeJS with NestJS as a framework</li>
      <li>Spring Boot</li>
      <li>PostgreSQL and MongoDB</li>
      <li>GoLang</li>
      <li>Vue</li>
      <li>Flutter</li>
    </ul>
  </Layout>
</template>

<script>
import ConsoleHero from "~/components/ConsoleHero.vue";
import AboutMeCard from "~/components/AboutMeCard.vue";
export default {
  metaInfo: {
    title: "Home",
  },
  components: { ConsoleHero, AboutMeCard },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
