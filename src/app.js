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
import spies from 'chai-spies'
chai.use(spies)
const  expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'setting'
    }
  })
  button.$mount('#test')
  let assert = button.$el.querySelector('use').getAttribute('xlink:href')
  expect(assert).to.eq('#icon-setting')
  button.$el.remove()
  button.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'setting',
      loading:true
    }
  })
  button.$mount()
  let assert = button.$el.querySelector('use').getAttribute('xlink:href')
  expect(assert).to.eq('#icon-loading')
  button.$el.remove()
  button.$destroy()
}
{
  let div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'setting',
      loading:true
    }
  })
  button.$mount(div)
  // let assert = button.$el.querySelector('use').getAttribute('xlink:href')
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  button.$el.remove()
  button.$destroy()
}
{
  let div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'setting',
      loading:true,
      iconPosition:'right'
    }
  })
  button.$mount(div)
  // let assert = button.$el.querySelector('use').getAttribute('xlink:href')
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'setting',
      loading:true
    }
  })
  button.$mount()
  let vm = button
  let spy = chai.spy(function(){ console.log('按钮被点击了!');})
  vm.$on('click',spy)
  vm.$el.click()
  expect(spy).to.have.been.called()

}

