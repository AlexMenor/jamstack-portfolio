<template>
  <div id="post-metadata-root">
    <tags :tags="tags"></tags>
    <p class="createdAt">{{ createdAtFormatted }}</p>
  </div>
</template>

<script>
import Tags from "~/components/Tags.vue";
export default {
  props: ["tags", "createdAt"],
  components: { Tags },
  computed: {
    createdAtFormatted() {
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(this.createdAt));
    },
  },
};
</script>

<style scoped>
#post-metadata-root {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.createdAt {
  font-style: italic;
  color: grey;
}
</style>
