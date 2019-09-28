Page({
  data: {
    visible: true
  },
  confirm(e) {
    console.log(e.detail)
  },
  cancel(e) {
    this.setData({visible:false})
  }
})