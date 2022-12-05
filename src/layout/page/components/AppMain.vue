<style lang="scss" scoped>
main {
  display: flex;
  flex: 1px;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-color: var(--color-bg-level-2);
  box-shadow: -10px 0 10px var(--color--opacity-3);
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    z-index: 3;
    height: 10px;
  }
  &:before {
    top: 20px;
    background: linear-gradient(var(--color-bg-level-2), transparent);
    /* background: linear-gradient(var(--color-theme-sub), transparent); */
  }
  &:after {
    bottom: 20px;
    background: linear-gradient(var(--color-theme), 40%, var(--color-theme-sub));
    background: linear-gradient(transparent, var(--color-theme-sub));
    background: linear-gradient(transparent, var(--color-bg-level-2));
  }
  .main-inner {
    position: relative;
    z-index: 2;
    width: 350px;
    padding: 20px;
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
      console.log("AppMain :", this.$route.path);
      return this.$route.path;
    },
  },
  mounted() {
    console.log(`AppMain : mounted`);
  },
};
</script>
