Vue.component('plan-picker', {
  template: '#plan-picker-template',
  props: {
    name: String,
  },
});

var app = new Vue({
  el: '#app',
  data: {
    plans: ["The Single", "The Curious", "The Addict",],
  }
})