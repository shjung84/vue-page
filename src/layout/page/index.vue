<style lang="scss" scoped></style>

<template lang="pug">
el-container
  lnb
  app-main
</template>

<script>
import AppMain from "./components/AppMain";
import Lnb from "./components/Lnb";

export default {
  components: {
    AppMain,
    Lnb,
  },
  computed: {},
};
</script>
