<style lang="scss" scoped>
.dashboard {
  position: relative;
  z-index: 2;
  width: 350px;
  padding: 20px;
  background-color: #f8f8f6;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
}
</style>

<template lang="pug">
.dashboard
  .el-wrap
    el-row(:gutter="20")
      el-col(:span="12")
        .grid-content 1
      el-col(:span="12")
        .grid-content 1
    el-row(:gutter="20")
      el-col(:span="12")
        .grid-content 1
      el-col(:span="12")
        .grid-content 1
    el-row(:gutter="20")
      el-col(:span="24")
        .grid-content 1


  //- el-table(:data="tableData" stripe style="width:100%")
    el-table-column(prop="date" label="Date" width="80")
    el-table-column(prop="name" label="Name" width="80")
    el-table-column(prop="address" label="Address")

  //- .item item
  //- .item item
  //- .item item
  //- .item item
  //- .item item
  //- .item item
Profile(msg="My Device")
</template>

<script>
import Profile from "@/components/Profile.vue";

export default {
  name: "Home",
  components: {
    Profile,
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
