<template lang="pug">
router-view(v-if="refresh" :key="key")
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    key() {
      console.log("App :", this.$route.path);
      return this.$route.path;
    },
  },
  watch: {},
  data() {
    return {
      refresh: true,
    };
  },
  mounted() {
    console.log(`App : mounted`);
  },
};
</script>
