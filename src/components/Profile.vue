<style lang="scss" scoped>
.c-quick {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 200px;
  height: 100%;
  padding: 17px 20px;
  &__inner {
    position: relative;
    height: 100%;
    .sec {
      padding: 10px;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      border-radius: 15px;
    }
  }
  &__top {
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      width: 33px;
      height: 33px;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      color: var(--color--opacity-5);
    }
  }
  &__temperature {
    overflow: hidden;
    position: relative;
    height: 130px;
    margin-top: 10px;
    padding: 17px 20px;
    background-color: var(--color-theme-sub);
    color: var(--color-bg);
    font-size: 11px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    letter-spacing: 1px;

    &:before {
      content: "";
      position: absolute;
      top: 100%;
      left: 100%;
      width: 120px;
      height: 120px;
      margin: -75px 0 0 -75px;
      border: 20px solid var(--color-bg-opacity-1);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      box-sizing: border-box;
    }

    a {
      position: absolute;
      right: 15px;
      bottom: 15px;
      z-index: 2;
      color: #fff;
    }
    dl {
      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 90px;
        height: 90px;
        background-color: var(--color-bg-opacity-1);
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
      }
      &:before {
        bottom: 80%;
        left: 70%;
      }
      &:after {
        top: 80%;
        right: 70%;
      }
      dd {
        margin-top: 5px;
        &.type--weather {
          font-size: 9px;
          letter-spacing: 1px;
        }
      }
    }
  }
  .c-quick__device {
    position: relative;
    margin-top: 15px;
    h2 {
      height: 15px;
      margin-bottom: 9px;
      font-size: 13px;
    }
    .btn-more {
      position: absolute;
      top: 0;
      right: 0;
    }
    .el-scrollbar {
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      border-radius: 15px;
    }
    .c-card {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      gap: 14px;
      &__item {
        display: flex;
        align-items: flex-end;
        position: relative;
        width: calc(50% - 7px);
        min-height: 70px;
        padding: 7px 10px;
        background: #fff;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        border-radius: 15px;
        button {
          position: absolute;
          top: 7px;
          right: 7px;
          width: 20px;
          height: 20px;
        }
        dl {
          width: 100%;
          dt {
            font-weight: 800;
          }
          dd {
            margin-top: 3px;
            color: #999;
            font-size: 10px;
          }
        }
        .icon {
          position: absolute;
          top: 7px;
          left: 10px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.el-scrollbar.pst--scroll {
  overflow: visible;
  > .el-scrollbar__bar.is-vertical {
    right: -10px;
  }
}
.el-badge__content {
  font-size: 11px;
}
</style>

<template lang="pug">
.c-quick
  .c-quick__inner
    .c-quick__top
      a(href="javascript:;" class="btn-search" title="Search") #[mdicon(name="magnify"  size="15")]
      el-badge( :value="12" class="item")
        a(href="javascript:;" class="btn-notice" title="notice") #[mdicon(name="bell-outline" size="15")]
      a(href="javascript:;" class="btn-account" title="Account") #[mdicon(name="account-settings" size="15")]
    .c-quick__temperature
      dl
        dt Outdoor Temperature
        dd.type--number #[strong 27] #[span ℃]
        dd.type--weather Cloudy
      a(href="javascript:;") #[mdicon(name="dots-horizontal" size="15")]
    .c-quick__device
      h2 {{ msg }}
      a(href="javascript:;" class="btn-more") #[mdicon(name="dots-horizontal" size="15")]
      el-scrollbar(class="pst--scroll" height="155px")
        .c-card
          .c-card__item
            .icon #[mdicon(name="ceiling-light" size="20")]
            dl
              dt Lamp
              dd 70%
            el-button(circle) #[mdicon(name="power-standby" size="13")]
          .c-card__item
            .icon #[mdicon(name="television-classic" size="20")]
            dl
              dt Smart TV
              dd On
            el-button(class="is-active" circle) #[mdicon(name="power-standby" size="13")]
          .c-card__item
            .icon #[mdicon(name="door-open" size="20")]
            dl
              dt Door
              dd Look
            el-button(circle) #[mdicon(name="power-standby" size="13")]
          .c-card__item
            .icon #[mdicon(name="air-filter" size="20")]
            dl
              dt AC
              dd Off
            el-button(circle) #[mdicon(name="power-standby" size="13")]
          .c-card__item
            .icon #[mdicon(name="air-purifier" size="20")]
            dl
              dt AC
              dd Off
            el-button(circle) #[mdicon(name="power-standby" size="13")]
</template>

<script>
export default {
  name: "MyDevice",
  props: {
    msg: String,
  },
};
</script>
