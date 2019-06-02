<template>
  <button class="d-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
    <d-icon v-if="icon && !loading" :name="icon" class="icon"></d-icon>
    <d-icon name="loading" v-if="loading" class="loading icon"></d-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from '../icon'
  export default {
    // props: ['icon', 'iconPosition'],
    components:{'d-icon': Icon},
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

<style lang="scss">
  .d-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    > .icon {
      order: 1;
      margin-right: .1em;
    }
    > .content {
      order: 2;
    }
    &.icon-right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }
      > .content {
        order: 1;
      }
    }
    .loading{
      animation: btn-spin 1.8s linear infinite;
    }
  }
  @keyframes btn-spin {
    0%{
      transform:rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>