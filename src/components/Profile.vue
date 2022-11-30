<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 200px;
  height: 100%;
  padding: 17px 20px;
  .inner {
    overflow: hidden;
    position: relative;
    height: 100%;
    .sec {
      padding: 10px;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      border-radius: 15px;
    }
  }
  .top-area {
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
  .temperature {
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
    }

    a {
      position: absolute;
      right: 15px;
      bottom: 15px;
      z-index: 2;
      color: #fff;
    }
    dl {
      dd {
        margin-top: 5px;
        &.type-weather {
          font-size: 9px;
          letter-spacing: 1px;
        }
      }
    }
  }
  .device-area {
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
    .item-list {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      gap: 14px;
      .item {
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

<template lang="pug">
.profile
  .inner
    .top-area
      a(href="javascript:;" class="btn-search" title="Search") #[mdicon(name="magnify"  size="15")]
      a(href="javascript:;" class="btn-notice" title="notice") #[mdicon(name="bell-outline" size="15")]
      a(href="javascript:;" class="btn-account" title="Account") #[mdicon(name="account-settings" size="15")]
    .temperature
      dl
        dt Outdoor Temperature
        dd.type-number #[strong 27] #[span ℃]
        dd.type-weather Cloudy
      a(href="javascript:;") #[mdicon(name="dots-horizontal" size="15")]
    .device-area
      h2 {{ msg }}
      a(href="javascript:;" class="btn-more") #[mdicon(name="dots-horizontal" size="15")]
      el-scrollbar(height="155px")
        .item-list
          .item
            .icon #[mdicon(name="ceiling-light" size="20")]
            dl
              dt Lamp
              dd 70%
            el-button(circle) #[mdicon(name="power-standby" size="13")]
          .item
            .icon #[mdicon(name="television-classic" size="20")]
            dl
              dt Smart TV
              dd On
            el-button(class="is-active" circle) #[mdicon(name="power-standby" size="13")]
          .item
            .icon #[mdicon(name="door-open" size="20")]
            dl
              dt Door
              dd Look
            el-button(circle) #[mdicon(name="power-standby" size="13")]
          .item
            .icon #[mdicon(name="air-filter" size="20")]
            dl
              dt AC
              dd Off
            el-button(circle) #[mdicon(name="power-standby" size="13")]
          .item
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
