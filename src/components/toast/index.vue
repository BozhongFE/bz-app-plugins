<template>
  <div class="app-toast" :class="[`app-toast--${type}`]" 
    :style="`font-size: ${fontSize}`"
    @touchmove="onTouchMove"
    v-show="currentValue">
    <!-- <slot name="icon">
      <i class="app-icon" :class="`app-icon__${icon}`" v-if="icon"></i>
    </slot> -->
    <div class="app-toast__main">
      <slot>
        <div class="app-toast__content" v-html="content"></div>
      </slot>
    </div>
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
      content: {
        type: String,
        default: null,
      },
      // 字体大小,用于计算样式尺寸
      fontSize: {
        type: String,
        default: '10px',
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