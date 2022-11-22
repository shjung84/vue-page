<style lang="scss" scoped></style>

<template lang="pug">
el-container
  Aside
  app-main
</template>

<script>
import AppMain from "./components/AppMain";
import Aside from "./components/Aside";

export default {
  components: {
    AppMain,
    Aside,
  },
  computed: {},
};
</script>
