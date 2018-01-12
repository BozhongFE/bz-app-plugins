<template>
  <div class="app-loading" v-show="currentValue"
    @touchmove="onTouchMove">
    <!-- <div class="app-loading__mask"></div> -->
    <div class="app-loading__box">
      <em class="app-loading__icon"></em>
      <span class="app-loading__content" v-if="content" v-html="content"></span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
  };
</script>
<style lang="less">
  // @import '~src/assets/css/loading.less';
</style>