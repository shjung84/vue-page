<style lang="scss" scoped></style>

<template lang="pug">
#app
  HelloWorld(msg="Home")
  nav
    router-link(to="/") Home
    router-link(to="/about") About
  </template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
