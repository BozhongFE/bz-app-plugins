<template>
  <div class="app-loading" v-show="currentValue"
    @touchmove="onTouchMove"
    :style="`font-size: ${fontSize}`">
    <div class="app-loading__box">
      <em class="app-loading__icon"></em>
      <loading class="app-loading__loading"></loading>
      <span class="app-loading__content" v-if="content" v-html="content"></span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Loading from '../animation/loading.vue';
export default {
  name: 'app-loading',
  props: {
    currentValue: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      defalut: null,
    },
    // 字体大小,用于计算样式尺寸
    fontSize: {
      type: String,
      default: '10px',
    },
  },
  data() {
    return {
    };
  },
  watch: {
    // currentValue(val) {
    //   const self = this;
    //   if (val) return self.onShow();
    //   return self.onHide();
    // },
  },
  methods: {
    onTouchMove(event) {
      event.preventDefault();
    },
    // onHide() {
    //   this.currentValue = false;
    //   this.$emit('on-hide');
    // },
    // onShow() {
    //   this.$emit('on-show');
    // },
  },
  components: {
    Loading
  }
};
</script>