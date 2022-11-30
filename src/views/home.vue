<style lang="scss" scoped>
.item-list {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 14px;
  + .item-list {
    margin-top: 14px;
  }
  .item {
    display: flex;
    overflow: hidden;
    position: relative;
    width: calc(50% - 7px);
    min-height: 100px;
    padding: 15px;
    border: 1px solid var(--color--opacity-1);
    background: #fff;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    &.no-pd {
      padding: 0;
    }
    &.col-1 {
      width: 100%;
    }
    &.col-6 {
      width: calc(60% - 7px);
    }
    &.col-4 {
      width: calc(40% - 7px);
    }

    .inner {
      width: 100%;
      position: relative;
    }
    .title {
      display: block;
      margin-bottom: 10px;
      font-size: 10px;
    }
    .type-number {
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .btn-updown {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 20px;
      button {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 50%;
        border: 0;
        background-color: var(--color--opacity-1);
        color: var(--color-theme-sub);
        font-size: 0;
        &.btn-up {
          align-items: flex-start;
          padding-top: 5px;
          border-radius: 20px 20px 0 0;
        }
        &.btn-down {
          padding-bottom: 5px;
          align-items: flex-end;
          border-radius: 0 0 20px 20px;
        }
      }
    }
  }
}

/* Element-Plus */
.item-list {
  .el-col {
    .grid-content {
      display: flex;
      overflow: hidden;
      position: relative;
      min-height: 100px;
      padding: 15px;
      border: 1px solid var(--color--opacity-1);
      background: var(--color-bg);
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      border-radius: 15px;
      &.no-pd {
        padding: 0;
      }
      .inner {
        width: 100%;
        // display: flex;
        // flex: 1;
        position: relative;
      }
      .title {
        display: block;
        margin-bottom: 10px;
        font-size: 10px;
      }
      .type-number {
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .btn-updown {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 20px;
        button {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 50%;
          border: 0;
          background-color: var(--color--opacity-1);
          color: var(--color-theme-sub);
          font-size: 0;
          &.btn-up {
            align-items: flex-start;
            padding-top: 5px;
            border-radius: 20px 20px 0 0;
          }
          &.btn-down {
            padding-bottom: 5px;
            align-items: flex-end;
            border-radius: 0 0 20px 20px;
          }
        }
      }
    }
  }
}

.grid-content.board {
  height: 120px;
}
</style>
<style lang="scss">
.vc-container {
  border: 0;
  .vc-pane {
    min-width: 148px;
    .vc-header {
      padding: 0;

      .vc-title {
        font-size: var(--text-xs);
      }
    }
    .vc-weeks {
      min-width: 0;
      padding: 0;
    }
    .vc-day {
      min-height: 20px;
    }
    .vc-day-content,
    .vc-weekday,
    .vc-highlight {
      width: 20px;
      height: 20px;
      font-size: 10px;
    }
    .vc-arrows-container {
      padding: 0;
    }
  }
}
</style>

<template lang="pug">
.dashboard
  el-scrollbar(height="360px")
    .item-list
      .item.no-pd
        .inner
          .calendar
            v-date-picker(v-model="date"  is-range color="orange" )
      .item
        .inner
          .calendar
    .item-list
      .item
        .inner
          strong(class="title") Living room
      .item
        .inner
          strong(class="title") Living room
      .item
        .inner
          strong(class="title") Indoor Temperature
          .type-number #[strong 27] #[span ℃]
          .btn-updown
            button(class="btn-up") #[mdicon(name="chevron-up" size="15")]
            button(class="btn-down") #[mdicon(name="chevron-down" size="15")]
      .item
        .inner
          strong(class="title") Humidity
          .type-number #[strong 25] #[span %]
          .btn-updown
            button(class="btn-up") #[mdicon(name="chevron-up" size="15")]
            button(class="btn-down") #[mdicon(name="chevron-down" size="15")]
      .item
        .inner
          strong(class="title") Bed room
          .type-number #[strong 27] #[span ℃]
          .btn-updown
            button(class="btn-up") #[mdicon(name="chevron-up" size="15")]
            button(class="btn-down") #[mdicon(name="chevron-down" size="15")]
      .item
        .inner
          strong(class="title") Living room

    .item-list
      .item.no-pd.col-1
        .inner
          //- strong(class="title") Board
          el-table(:data="tableData" height="130" style="width:100%")
            el-table-column(prop="date" align="center" label="Date" min-width="80")
            el-table-column(prop="name" align="center" label="Name")

</template>

<script>
import { DatePicker } from "v-calendar";

export default {
  name: "Home",
  components: {
    DatePicker,
    // DatePicker: {
    // ...DatePicker,
    // ...DatePicker,
    // compatConfig: { MODE: 3 },
    // },
  },
  data() {
    return {
      date: new Date(),
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
        },
        {
          date: "2016-05-02",
          name: "Tom",
        },
        {
          date: "2016-05-04",
          name: "Tom",
        },
        {
          date: "2016-05-01",
          name: "Tom",
        },
      ],
    };
  },
};
</script>
