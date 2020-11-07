<template>
  <Layout>
    <console-hero consoleText="I like to do Backend Development" />
    <h1>About me</h1>

    <p>I'm a {{ age }} year old Computer Engineering student from Spain.</p>
    <p>
      After 2 years studying my degree, I found in Web and Mobile Development my
      passion. More specifically: Server Side Programming, Cloud Computing and
      API Design.
    </p>
    <p>
      I'm right now working at Pantala while I finish my degree. I'm also the
      lead of DSC in Granada.
    </p>

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
export default {
  metaInfo: {
    title: "Home",
  },
  components: { ConsoleHero },

  computed: {
    age() {
      const birthday = new Date("02/10/1999");
      const diff = Date.now() - birthday;
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
