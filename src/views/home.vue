<style lang="scss" scoped></style>

<template lang="pug">
.dashboard
  .el-wrap
    el-row(:gutter="20")
      el-col(:span="12")
        .grid-content
          .inner
            strong(class="title") Indoor Temperature
            .type-number #[strong 27] #[span ℃]
            .btn-updown
              button(class="btn-up") #[mdicon(name="chevron-up" size="15")]
              button(class="btn-down") #[mdicon(name="chevron-down" size="15")]
      el-col(:span="12")
        .grid-content
          .inner
            strong(class="title") Humidity
            .type-number #[strong 25] #[span %]
            .btn-updown
              button(class="btn-up") #[mdicon(name="chevron-up" size="15")]
              button(class="btn-down") #[mdicon(name="chevron-down" size="15")]
    el-row(:gutter="20")
      el-col(:span="12")
        .grid-content
          .inner
            strong(class="title") Bed room
      el-col(:span="12")
        .grid-content
          .inner
            strong(class="title") Living room
    el-row(:gutter="20")
      el-col(:span="24")
        .grid-content
          .inner
            strong(class="title") Spending
            el-table(:data="tableData" stripe style="width:100%")
              el-table-column(prop="date" label="Date" width="80")
              el-table-column(prop="name" label="Name" width="80")
              el-table-column(prop="address" label="Address")

</template>

<script>
export default {
  name: "Home",
  components: {},
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
