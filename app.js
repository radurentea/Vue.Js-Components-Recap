Vue.component('click-counter', {
  template: '<button @click="count++">{{ count }}</button>',
  data() {
    return {
      count: 0,
    }
  },
})

var app = new Vue({
  el: '#app',
})