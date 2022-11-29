<style lang="scss" scoped></style>

<template lang="pug">
#container
  Aside
  app-main
  Profile(msg="My Device")

</template>

<script>
import Aside from "./components/Aside";
import AppMain from "./components/AppMain";
import Profile from "@/components/Profile.vue";

export default {
  components: {
    AppMain,
    Aside,
    Profile,
  },
  computed: {},
};
</script>
