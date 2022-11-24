<style lang="scss" scoped></style>

<template lang="pug">
main
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
  mounted() {
    console.log(`mounted`);
  },
};
</script>
