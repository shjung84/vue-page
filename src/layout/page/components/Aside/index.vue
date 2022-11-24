<style lang="scss" scoped></style>

<template lang="pug">
aside
  h1 h1
  #lnb
    ul
      li(:class="{isCurrent: newActive === 0}" @click="handleNewMenuId(0)")
        router-link(to="/home")
          mdicon(name="chart-donut-variant" size="15")
          em Dashboard
      li(:class="{isCurrent: newActive === 1}" @click="handleNewMenuId(1)")
        router-link(to="/about")
          mdicon(name="door-open" size="15")
          em Rooms
      li( :class="{isCurrent: newActive === 2}" @click="handleNewMenuId(2)")
        a(href="javascript:;")
          mdicon(name="cellphone-link" size="15")
          em Devices
      li(:class="{isCurrent: newActive === 3}" @click="handleNewMenuId(3)")
        a(href="javascript:;" )
          mdicon(name="account-group-outline" size="15")
          em Members
      li.logout
        a(href="javascript:;")
          mdicon(name="power" size="15")
          em Logout
    .slide-bar

</template>

<script>
import { ref } from "vue";

export default {
  computed: {},
  mounted() {
    console.log(`mounted`);
  },
  methods: {},
  setup() {
    const newActive = ref(0);
    const handleNewMenuId = idx => {
      newActive.value = idx;
      document.getElementsByClassName("slide-bar")[0].style.top = idx * 35 + "px";
    };
    return {
      newActive,
      handleNewMenuId,
    };
  },
};
</script>
