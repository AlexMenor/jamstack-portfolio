<template>
  <div class="card" id="about-me-root">
    <div class="img" />

    <p class="section-title">About me</p>
    <p>I'm a {{ age }} year old Computer Engineering student from Spain.</p>
    <p>
      After 2 years studying my degree, I found in Web and Mobile Development my
      passion. More specifically: <b>Full Stack Programming, Cloud Computing and
      API Design.</b>
    </p>
    <p>
      I'm also very interested in entrepreneurship. I've already worked in two startups, Pantala and Bounsel, and I've also won prizes related to it such as <a href="https://ugremprendedora.ugr.es/ets-de-ingenierias-informatica-y-de-telecomunicacion-final-del-iv-concurso-de-ideas/">"Concurso de Ideas ETSIIT" (2020)</a> and <a href="https://ugremprendedora.ugr.es/la-gran-final-del-iv-concurso-de-ideas-nos-descubre-15-grandes-proyectos-innovadores/">"Concurso de Ideas UGR" (2021). </a>
    </p>
    <p class="section-title">Technologies I enjoy the most</p>
    <div class="tech-grid">
      <img src="/nodejs.png" alt="Node logo" />
      <img src="/vue.svg" alt="Vue logo" />
      <img src="/flutter.png" alt="Flutter logo" />
      <img src="/go.png" alt="Go logo" />
    </div>
  </div>
</template>

<script>
export default {
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

<style scoped>
#about-me-root {
  padding: 2em;
  max-width: 400px;
}
.img {
  background-image: url(../../static/me.jpg);
  background-size: cover;
  width: 20vh;
  height: 20vh;
  border-radius: 100%;
}

.section-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0;
  text-align: center;
}

.tech-grid > img {
  width: 50px;
  height: 50px;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.tech-grid {
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
}
</style>
