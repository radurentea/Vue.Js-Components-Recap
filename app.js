let PlanComponent = {
  template: '#plan-template',
  props: {
    name: String,
  },
};

let PlanPickerComponent = {
  template: '#plan-picker-template',
  data() {
    return {
      plans: ["The Single", "The Curious", "The Addict",],
    };
  },
  components: {
    plan: PlanComponent,
  },
};



var app = new Vue({
  el: '#app',
  components: {
    planPicker: PlanPickerComponent,
  },
})