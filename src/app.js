import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('d-button', Button);
Vue.component('d-icon', Icon);
Vue.component('d-button-group', ButtonGroup);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
});

import chai from 'chai'
const  expect = chai.expect
const Constructor = Vue.extend(Button)
const button = new Constructor({
  propsData:{
    icon:'setting'
  }
})
button.$mount('#test')
const assert = button.$el.querySelector('use').getAttribute('xlink:href')
expect(assert).to.eq('#icon-setting')
