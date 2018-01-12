<template>
  <div class="app-toast" :class="[`app-toast--${type}`]" @touchmove="onTouchMove" v-show="currentValue">
    <!-- <slot name="icon">
      <i class="app-icon" :class="`app-icon__${icon}`" v-if="icon"></i>
    </slot> -->
    <slot>
      <span class="app-toast__main" v-html="toastText"></span>
    </slot>
  </div>
</template>
<script>

  export default {
    name: 'app-toast',
    props: {
      // value: Boolean,
      type: {
        type: String,
        default: 'middle', // 上中下
      },
      toastText: {
        type: String,
        default: null,
      },
      // icon: {
      //   type: String,
      //   default: null,
      // },
    },
    data() {
      return {
        currentValue: false,
      };
    },
    // watch: {
    //   value: {
    //     handler: function (val) {
    //       this.currentValue = val;
    //     },
    //     immediate: true,
    //   },
    // },
    // created() {
    //   if (typeof this.value !== 'undefined') {
    //     this.currentValue = this.value;
    //   }
    // },
    methods: {
      onTouchMove(event) {
        event.preventDefault();
      },
    },
  };

</script>
<style lang="less">
  // @import '~src/assets/css/toast.less';
</style>