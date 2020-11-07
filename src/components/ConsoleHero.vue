<template>
  <div class="console-block">
    <h1>
      {{ currentConsoleText }}
      <span v-if="showUnderscore" id="console-underscore">&#95;</span>
    </h1>
  </div>
</template>

<script>
export default {
  props: ["consoleText"],
  data() {
    return {
      showUnderscore: false,
      typePosition: 0,
      typeInterval: null,
    };
  },
  mounted() {
    setInterval(this.switchUnderscoreState, 400);
    this.typeInterval = setInterval(this.stochasticTyping, 100);
  },
  methods: {
    switchUnderscoreState() {
      this.showUnderscore = !this.showUnderscore;
    },
    stochasticTyping() {
      if (Math.random() < 0.8) this.typePosition++;
      if (this.typePosition == this.consoleText.length)
        clearInterval(this.typeInterval);
    },
  },
  computed: {
    currentConsoleText() {
      return this.consoleText.slice(0, this.typePosition);
    },
  },
};
</script>

<style scoped>
.console-block {
  padding-top: 5em;
  padding-bottom: 5em;
}
</style>
