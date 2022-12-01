<style lang="scss" scoped>
.c-card {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 14px;
  + .c-card {
    margin-top: 14px;
  }
  &__item {
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
  }

  &__inner {
    width: 100%;
    position: relative;
  }

  &__title {
    display: block;
    margin-bottom: 10px;
    font-size: 10px;
  }
  &__type--number {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &__type--button {
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
      &.btn--up {
        align-items: flex-start;
        padding-top: 5px;
        border-radius: 20px 20px 0 0;
      }
      &.btn--down {
        padding-bottom: 5px;
        align-items: flex-end;
        border-radius: 0 0 20px 20px;
      }
    }
  }
}
</style>

<style lang="scss">
.vc-container {
  border: 0;
  .vc-pane {
    min-width: 130px;
    .vc-header {
      padding: 0;

      .vc-title {
        font-size: var(--text-xs);
      }
    }

    .vc-weeks {
      min-width: 0;
      padding: 0 3px;
      .vc-day {
        min-height: 20px;
      }
      .vc-day-content,
      .vc-weekday {
        font-size: 10px;
        font-family: "Lato", serif;
        letter-spacing: -1px;
      }
      .vc-day-content,
      .vc-weekday,
      .vc-highlight {
        width: 20px;
        height: 20px;
      }
      .weekday-position-6 {
        color: #55a7c8;
      }
      .weekday-position-7 {
        color: #fe0477;
      }

      .weekday-position-1 {
        .vc-highlight-base-middle,
        .vc-highlight-base-end {
          left: -3px;
          border: 1px solid #000;
        }
      }
      .weekday-position-7 {
        .vc-highlights {
          overflow: visible;
        }
        .vc-day-box-right-center,
        .vc-day-box-center-center {
          display: block;
        }
        .vc-highlight-base-start {
          margin-left: 10px;
        }

        .vc-highlight-base-start,
        .vc-highlight-base-middle {
          display: block;
          width: 25px !important;

          /* &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 100%;

            width: 10px;
            background-color: #c00;
          } */
        }
      }
    }
  }
  .vc-arrows-container {
    padding: 5px;
    .vc-arrow {
      svg {
        width: 15px;
        height: 15px;
      }
    }
  }
}
.vc-day.is-not-in-month * {
  opacity: 0.2 !important;
  pointer-events: inherit;
}
</style>

<template lang="pug">
.dashboard
  el-scrollbar(height="360px")
    .c-card
      .c-card__item.no-pd
        .c-card__inner
          .calendar
            v-date-picker(v-model="date" :first-day-of-week="2" locale="en" is-expanded is-range color="orange" )
      .c-card__item
        .c-card__inner
          .calendar
    .c-card
      .c-card__item
        .c-card__inner
          strong(class="c-card__title") Indoor Temperature
          .c-card__type--number #[strong 27] #[span ℃]
          .c-card__type--button
            button(class="btn--up") #[mdicon(name="chevron-up" size="15")]
            button(class="btn--down") #[mdicon(name="chevron-down" size="15")]
      .c-card__item
        .c-card__inner
          strong(class="c-card__title") Humidity
          .c-card__type--number #[strong 25] #[span %]
          .c-card__type--button
            button(class="btn--up") #[mdicon(name="chevron-up" size="15")]
            button(class="btn--down") #[mdicon(name="chevron-down" size="15")]
      .c-card__item
        .c-card__inner
          strong(class="c-card__title") Bed room
          .c-card__type--number #[strong 27] #[span ℃]
          .c-card__type--button
            button(class="btn--up") #[mdicon(name="chevron-up" size="15")]
            button(class="btn--down") #[mdicon(name="chevron-down" size="15")]
      .c-card__item
        .c-card__inner
          strong(class="c-card__title") Living room
    .c-card
      .c-card__item.no-pd.col-1
        .c-card__inner
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
