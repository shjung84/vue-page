<style lang="scss" scoped></style>

<template lang="pug">
section(id="container") container
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
