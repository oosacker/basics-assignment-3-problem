const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },

  computed: {
    result() {
      if (this.value < 37) {
        return 'Not there yet'
      } else if (this.value > 37) {
       return 'Too much'
      } else {
       return this.value
      }
    }
  },

  watch: {
    value(value) {
      setTimeout(()=> {
        this.value = 0
      }, 5000) 
    }
  },

  methods: {
    addFive() {
      this.value+=5
    },
    addOne() {
      this.value+=1
    }
  }
});

app.mount('#assignment');
