<template>
  <div class="app-confirm">
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
          <div class="app-dialog__btn app-dialog__btn--default" v-html="btnTextCancle" @click="onClick(false)"></div>
          <div class="app-dialog__btn app-dialog__btn--primary" v-html="btnTextSubmit" @click="onClick(true)"></div>
        </slot>
      </div>
    </app-dialog>
  </div>
</template>
<script>
  import AppDialog from '../dialog/index.vue';
  // import appIcon from '../app-icon';

  export default {
    name: 'app-confirm',
    components: {
      AppDialog,
      // appIcon,
    },
    props: {
      // icon: {
      //   type: String,
      //   default: null,
      // },
      maskAbled: {
        type: Boolean,
        default: false,
      },
      needCloseBtn: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: null,
      },
      content: {
        type: String,
        default: null,
      },
      btnTextSubmit: {
        type: String,
        default: '确认',
      },
      btnTextCancle: {
        type: String,
        default: '取消',
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
      onClick(status) {
        if (status) {
          this.currentValue = !this.close;
          this.$emit('on-confirm');
        } else {
          this.currentValue = false;
          this.$emit('on-cancel');
        }
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