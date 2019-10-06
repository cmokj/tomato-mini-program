Page({
  data: {
    visible: false
  },
  confirm(e) {
    console.log(e.detail)
  },
  cancel(e) {
    this.setData({visible:false})
  }
})