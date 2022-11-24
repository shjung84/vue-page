<style lang="scss" scoped>
.dashboard {
  width: 350px;
}
</style>

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
  el-button(el-button type="danger" circle) A
  el-button.mdicon(type="danger" plain) #[mdicon(name="playlist-edit" size="19")] Danger


  el-table(:data="tableData" stripe style="width:100%")
    el-table-column(prop="date" label="Date" width="80")
    el-table-column(prop="name" label="Name" width="80")
    el-table-column(prop="address" label="Address")
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
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
};
</script>
