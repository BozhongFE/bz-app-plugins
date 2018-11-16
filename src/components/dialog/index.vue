<template>
  <div class="app-dialog" @touchmove="onTouchMove" 
    v-show="currentValue" 
    :style="`font-size: ${fontSize}`">
    <div class="app-dialog__mask" @click="maskAbled && (currentValue = false)"></div>
    <div class="app-dialog__box">
      <slot></slot>
      <div class="app-dialog__close" @click="needCloseBtn && (currentValue = false)" v-show="needCloseBtn"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-dialog',
    props: {
      value: {
        type: Boolean,
        default: false,
      },
      maskAbled: {
        type: Boolean,
        default: true,
      },
      needCloseBtn: {
        type: Boolean,
        defalut: false,
      },
      // 字体大小,用于计算样式尺寸
      fontSize: {
        type: String,
        default: '10px',
      },
    },
    data() {
      return {
        currentValue: false,
      };
    },
    watch: {
      value: {
        handler: function (val) {
          this.currentValue = val;
        },
        immediate: true,
      },
      currentValue(val) {
        this.$emit(val ? 'on-show' : 'on-hide');
      }
    },
    created() {
      if (typeof this.value !== 'undefined') {
        this.currentValue = this.value;
      }
    },
    methods: {
      onTouchMove(event) {
        event.preventDefault()
      }
    }
  };
</script>
<style lang="less">
</style>