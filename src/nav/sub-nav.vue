<!--suppress CssUnknownTarget -->
<template>
  <div class="sub-nav" :class="{active}" v-click-outside="close">
    <span class="sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="sub-nav-icon" :class="{open}">
        <h-icon name="right"></h-icon>
      </span>
    </span>
    <div class="h-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import ClickOutside from '../click-outside'
  import HotsIcon from '../icon'
  export default {
    components: {'h-icon':HotsIcon},
    directives: {ClickOutside},
    name: "HotsSubNav",
    inject: ['root'],
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        open: false,
      }
    },
    computed: {
      active () {
        return this.root.namePath.indexOf(this.name) >= 0 ? true : false
      }
    },
    methods: {
      onClick () {
        this.open = !this.open
      },
      close () {
        this.open = false
      },
      updateNamePath () {
        this.root.namePath.unshift(this.name)
        if (this.$parent.updateNamePath) {
          this.$parent.updateNamePath()
        } else {
          // this.root.namePath = []
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/_var.scss';
  .h-sub-nav {
    position: relative;
    &.active {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $blue;
        width: 100%;
      }
    }
    &-label { padding: 10px 20px; display: block; }
    &-icon { display: none; }
    &-popover {
      background: white;
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 4px;
      white-space: nowrap;
      box-shadow: 0 0 3px fade_out(black, 0.8);
      border-radius: $border-radius;
      font-size: $font-size;
      color: $light-color;
      min-width: 8em;
    }
  }
  .sub-nav .sub-nav {
    &.active {
      &::after {
        display: none;
      }
    }
    .sub-nav-popover {
      top: 0;
      left: 100%;
      margin-left: 8px;
    }
    .sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sub-nav-icon {
      transition: transform 250ms;
      display: inline-flex; margin-left: 1em;
      svg {fill: $light-color;}
      &.open {
        transform: rotate(180deg);
      }
    }
  }
</style>