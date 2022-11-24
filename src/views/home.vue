<style lang="scss" scoped></style>

<template lang="pug">
.dashboard
  el-row(:gutter="20" class="row-bg")
    el-col(:span="6" class="grid-content ep-bg-purple") 1
    el-col(:span="6" class="grid-content ep-bg-purple") 1
    el-col(:span="6" class="grid-content ep-bg-purple") 1
    el-col(:span="6" class="grid-content ep-bg-purple") 1
  el-row(:gutter="20")
    el-col(:span="10" class="grid-content ep-bg-purple") 1
    el-col(:span="10" class="grid-content ep-bg-purple") 1
  el-row(:gutter="20")
    el-col(:span="20" class="grid-content ep-bg-purple") 2
  el-button Button
  el-button(type="primary") Button
  el-button(el-button type="danger" :icon="Delete" circle)
  //- .item item
  //- .item item
  //- .item item
  //- .item item
  //- .item item
  //- .item item
HelloWorld(msg="info")
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
// import { Check, Delete, Edit, Message, Search, Star } from "@element-plus/icons-vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
