<style lang="scss" scoped>
.profile {
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 20px;
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

  h1 {
    margin: 15px 0 10px;
    font-size: 16px;
  }

  .top-area {
    height: 50px;
  }
  .temperature {
    height: 100px;
    margin-top: 15px;
    background-color: #489992;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }
  .device-area {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: -5px;
    .item {
      width: calc(50% - 10px);
      min-height: 70px;
      padding: 10px;
      margin: 5px;
      background: #fff;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      border-radius: 15px;
    }
  }
}
</style>

<template lang="pug">
.profile
  .inner
    .top-area top-area
    .temperature temperature
    h1 {{ msg }}
    .device-area
      .item item
      .item item
      .item item
      .item item
      .item item

</template>

<script>
export default {
  name: "MyDevice",
  props: {
    msg: String,
  },
};
</script>
