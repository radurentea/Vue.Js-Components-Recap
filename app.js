let PlanComponent = {
  template: '#plan-template',
  props: {
    name: String,
    selectedPlan: {
      type: String,
    },
  },
  methods: {
    select() {
      this.$emit('select', this.name);
    },
  },
  computed: {
    isSelected() {
      return this.name === this.selectedPlan;
    },
  },
};

let PlanPickerComponent = {
  template: '#plan-picker-template',
  data() {
    return {
      plans: ["The Single", "The Curious", "The Addict",],
      selectedPlan: null,
    };
  },
  methods: {
    selectPlan(payload) {
      this.selectedPlan = payload;
    }
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