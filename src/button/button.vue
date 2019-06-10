<template>
<template>
  <button class="h-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
    <h-icon v-if="icon && !loading" :name="icon" class="icon"></h-icon>
    <h-icon name="loading" v-if="loading" class="loading icon"></h-icon>
    <div class="hots-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from '../icon'
  export default {
    name:'HotsButton',
    components:{'h-icon': Icon},
    props: {
      'icon': {},
      'loading':{
        type:Boolean,
        default:false
      },
      'iconPosition': {
        type: String,
        default: 'left',
        //属性的检查器
        validator(value) {
          return !(value !== 'left' && value !== 'right');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/_var.scss';
  $border-color-hover:#229ffd;
  $button-active-bg:lighten($border-color-hover,40%);
  .h-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: $border-color-hover;
    }
    &:active {
      background-color: $button-active-bg;
    }
    &:focus {
      outline: none;
    }
    > .hots-button-content {
      order: 2;
    }
    > .icon {
      order: 1;
      margin-right: 0.1em;
    }

    &.icon-right {
      > .hots-button-content {
        order: 1;
      }
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: 0.1em;
      }
    }
    .loading {
      @include spin;
    }
    & + & {
      margin-left: 4px;
    }
  }
</style>