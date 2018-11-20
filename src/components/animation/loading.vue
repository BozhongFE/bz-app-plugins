<template>
  <main class="animation-loading">
    <div class="loading-item" v-for="i in 12" :key="i" :style="`transform: rotate(${i * 30}deg)`">
      <em class="loading-item__block"></em>
      <em class="loading-item__block" :style="`animation-delay: ${i * .125}s;`"></em>
    </div>
  </main>
</template>

<script>
  // export default {
  //   // props: {
  //   //   // 字体大小,用于计算样式尺寸
  //   //   fontSize: {
  //   //     type: String,
  //   //     default: '10px',
  //   //   },
  //   // },
  // }
</script>
<style lang="less" scoped>
  @keyframes colorChange {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .animation-loading {
    position: relative;
    width: 2.6em;
    height: 2.6em;
    box-sizing: border-box;
    font-size: inherit;
  }
  .loading-item {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: center center;
  }
  .loading-item__block {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 0.65em;
    height: 0.3em;
    border-radius: 0.15em;
    background-color: #fff;
  }
  .loading-item__block:last-child {
    opacity: 0;
    background-color: #949497;
    animation-name: colorChange;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
</style>
