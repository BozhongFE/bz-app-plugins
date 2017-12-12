<template>
  <div class="app-alert">
    <app-dialog
    :value="currentValue"
    :maskAbled="maskAbled"
    :needCloseBtn="needCloseBtn"
    @on-hide="onHide"
    @on-show="onShow">
      <div class="app-dialog__hd">
        <!-- <slot name="icon"> -->
          <!-- <app-icon :icon="icon" v-if="icon"></app-icon> -->
        <!-- </slot> -->
        <slot name="title">
          <div class="app-dialog__title" v-html="title" v-if="title"></div>
        </slot>
      </div>
      <div class="app-dialog__bd">
        <slot>
          <div class="app-dialog__content" v-html="content" v-if="content"></div>
        </slot>
      </div>
      <div class="app-dialog__ft">
        <slot name="btn">
          <div class="app-dialog__btn app-dialog__btn--primary" v-html="btnText" @click="onClick(false)"></div>
        </slot>
      </div>
    </app-dialog>
  </div>
</template>
<script>
  import AppDialog from '../dialog/index.vue';
  // import AppIcon from '../icon';

  export default {
    name: 'app-alert',
    components: {
      AppDialog,
      // AppIcon,
    },
    props: {
      maskAbled: {
        type: Boolean,
        default: true,
      },
      needCloseBtn: {
        type: Boolean,
        default: true,
      },
      title: {
        type: String,
        default: null,
      },
      content: {
        type: String,
        default: null,
      },
      btnText: {
        type: String,
        default: '确认',
      },
      close: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        currentValue: false,
      };
    },
    methods: {
      onClick() {
        this.currentValue = !this.close;
        this.$emit('on-confirm');
      },
      onHide() {
        this.currentValue = false;
        this.$emit('on-hide');
      },
      onShow() {
        this.$emit('on-show');
      },
    },
  };
</script>