<template>
  <Layout>
    <console-hero consoleText="I like to do Backend Development" />
    <div class="index-content">
      <about-me-card></about-me-card>
      <div class="projects">
        <p class="projects-title">Projects I'm working on</p>
        <div class="project">
          <img
            src="/pantala.png"
            alt="Pantala logo"
            style="filter: invert(1);"
          />
          <p>
            An unlimited closet as a service. In a world where fast fashion is a
            thing, we want our customers to have choice and joy for what they
            wear while being friendly to our planet.
          </p>
        </div>
        <div class="project">
          <img src="/kanuki.png" alt="Kanuki logo" />
          <p>
            <strong>Kanuki</strong>
            is a content platform, we provide the space and tools so the
            creators can share their talent with the world.
          </p>
        </div>
      </div>
      <div class="projects">
        <p class="projects-title">Projects I've worked on</p>
        <div class="project">
          <img src="/vodafone.png" alt="Vodafone Logo" />
          <p>
            Our goal in
            <strong>Vodafone Campus Lab</strong>
            is to help palliate the loneliness of elderly persons. We combine
            the best tools and technologies of XXI century with the willingness
            of building a better society. Working to develop an effective
            solution that allows us to connect again.
          </p>
        </div>
        <div class="project">
          <img src="/routeleo.jpg" alt="Routeleo logo" />
          <p>
            In Routeleo we fulfill the dream of travellers on a budget. Discover
            the way to get more for less and be able to get to the best places
            in the world.
          </p>
        </div>
      </div>
    </div>
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

.index-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.project {
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.project > img {
  max-width: 60%;
  max-height: 70px;
  object-fit: cover;
}

.projects {
  max-width: 600px;
  min-width: 0;
}

.index-content > * {
  min-width: 0;
}
.projects-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 3em;
}
</style>
