<template>
  <main class="loading" :style="`font-size:${unit}`">
    <div class="loading-item" v-for="i in 12" :key="i" :style="`transform: rotate(${i * 30}deg)`">
      <em class="loading-item__block"></em>
      <em class="loading-item__block" :style="`animation-delay: ${i * .125}s;`"></em>
    </div>
  </main>
</template>

<script>
  export default {
    props: {
      unit: {
        type: String,
        default: '10px',
      },
    },
  }
</script>
<style less scoped>
  @keyframes colorChange {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  .loading {
    position: relative;
    width: 14em;
    height: 14em;
    padding: .5em;
    box-sizing: border-box;
    font-size: inherit;
  }
  .loading-item {
    position: absolute;
    top: .5em;
    left: .5em;
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
    width: 4.3em;
    height: 1.35em;
    border-radius: 0.675em;
    background-color: #fff;
  }
  .loading-item__block:last-child {
    opacity: 0;
    background-color: #d4d4d4;
    animation-name: colorChange;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
</style>
