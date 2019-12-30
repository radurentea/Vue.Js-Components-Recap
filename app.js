Vue.component('plan-picker', {
  template: '#plan-picker-template',
  data() {
    return {
      plans: ["The Single", "The Curious", "The Addict",],
    };
  },
});

Vue.component('plan', {
  template: '#plan-template',
  props: {
    name: String,
  },
});

var app = new Vue({
  el: '#app',
})