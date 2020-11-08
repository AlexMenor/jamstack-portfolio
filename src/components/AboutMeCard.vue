<template>
  <div class="card" id="root">
    <img src="/me.jpg" />

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
#root {
  padding: 2em;
}
img {
  max-width: 40vw;
  border-radius: 100%;
}
</style>
