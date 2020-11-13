<template>
  <div id="footer-root">
    <p>
      You can check this site out on
      <a
        href="https://github.com/AlexMenor/jamstack-portfolio"
        style="color:white"
        ><img class="github-logo" src="/github.svg" alt="GH Logo"
      /></a>
    </p>
  </div>
</template>

<style>
#footer-root {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-color: black;
  color: white;
  margin-top: 10vh;
  width: 100%;
}

#footer-root > p {
  padding-left: 1em;
  font-size: 11px;
}

.github-logo {
  background-color: white;
  margin-bottom: -7px;
}
</style>
