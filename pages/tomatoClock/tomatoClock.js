// pages/tomatoClock/tomatoClock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultTime: 5,
    time: "",
    pauseText: "暂停",
    end: false,
    showAbandonForm: false,
    showFinishForm: false
  },

  timerId: null,

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.startClock();
  },

  changeTime: function(){
    let m = Math.floor(this.data.defaultTime/60);
    let s = this.data.defaultTime%60;
    if(m.toString().length === 1) {
      m = "0" + m;
    };
    if(s.toString().length === 1) {
      s = "0" + s;
    };
    this.setData({ time: `${m}:${s}`})
  },

  startClock: function(){
    this.changeTime();
    this.timerId = setInterval(() => {
      this.data.defaultTime--;
      this.changeTime();
      if(this.data.defaultTime === 0) {
        this.setData({
          end: !this.data.end,
          showFinishForm: !this.data.showFinishForm
        });
        return this.clearClock();
      }
    }, 1000)
  },

  clearClock: function() {
    clearInterval(this.timerId);
    this.timerId = null;
  },

  pause: function() {
    if(this.data.pauseText === "暂停") {
      this.clearClock();
      this.setData({ pauseText: "继续" });
    }else {
      this.startClock();
      this.setData({pauseText: "暂停"});
    }
  },

  abandon: function() {
    this.setData({showAbandonForm: true});
    this.clearClock();
  },
  
  confirmAbandon: function(e) {
    let content = e.detail;
    wx.navigateBack({
      to: -1
    })
  },

  confirmFinish: function(e) {
    let content = e.detail;
    this.setData({ showFinishForm: false })
  },

  hideAbandonForm: function () {
    this.setData({ showAbandonForm: false });
    this.startClock();
  },

  hideFinishForm: function () {
    this.setData({ showFinishForm: false });
  },

  anotherClock: function() {
    this.setData({
      defaultTime: 5,
      end: !this.data.end
    });
    this.startClock();
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