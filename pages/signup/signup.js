// pages/signup/signup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topic:"注册账号",
    buttonText:"注册",
    navText:"已有账号？直接登录>"
  },

  toSignin: function () {
    if(this.data.topic === "注册账号") {
      this.setData({topic: "绑定PC账号"});
      this.setData({buttonText: "登录"});
      this.setData({navText: "没有账号？点击注册>"})
    } else {
      this.setData({ topic: "注册账号" });
      this.setData({ buttonText: "注册" });
      this.setData({ navText: "已有账号？点击登录>" })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})