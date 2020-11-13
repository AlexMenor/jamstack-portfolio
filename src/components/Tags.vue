<template>
  <div id="tags-root">
    <div class="tag" v-for="(tag, i) in tags" :key="i">{{ tag }}</div>
  </div>
</template>

<script>
export default {
  props: ["tags"],
};
</script>

<style>
#tags-root {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.tag {
  margin-right: 10px;
  padding: 5px;
  border: 1px solid grey;
  font-size: 0.8rem;
}
</style>
