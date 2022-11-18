<style lang="scss" scoped>
.app-main {
  padding-bottom: 30px;
  margin: 0 auto;
  max-width: 1680px;
}
</style>

<template lang="pug">
section.app-main app-main
  router-view(:key="key")
</template>

<script>
export default {
  name: "AppMain",
  components: {},
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>
