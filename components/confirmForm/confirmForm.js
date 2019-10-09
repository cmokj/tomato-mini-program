Component({
  properties:{
    placeholder:{
      type: String,
      value: ""
    },
    visible:{
      type: Boolean,
      value: false
    },
    value:{
      type: String,
      value: ""
    }
  },
  data: {
    content: ""
  },
  methods: {
    watchValue(event) {
      this.data.content = event.detail.value;
    },
    confirm() {
      this.triggerEvent('confirm',this.data.content)
    },
    cancel() {
      this.triggerEvent('cancel', "取消")
    }
  }
})