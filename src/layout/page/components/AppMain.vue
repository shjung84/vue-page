<style lang="scss" scoped>
main {
  display: flex;
  flex: 1px;
  position: relative;
  width: 100%;
  background-color: #f8f8f6;
  // background-color: var(--color-bg-level-3);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  .main-inner {
    position: relative;
    z-index: 2;
    width: 350px;
    padding: 20px;
    /* background-color: #f8f8f6; */
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
  }
}
</style>

<template lang="pug">
main
  .main-inner
    router-view(:key="key")
</template>

<script>
export default {
  name: "AppMain",
  components: {},
  computed: {
    key() {
      console.log(this.$route.path);
      return this.$route.path;
    },
  },
  mounted() {
    console.log(`mounted`);
  },
};
</script>
