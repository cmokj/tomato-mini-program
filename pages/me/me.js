// pages/me/me.js
const { http } = require("../../lib/http.js");

Page({

  data: {
    historyActive: "",
    completedTodoActive: "true",
    todos: {},
  },
  
  toHistory: function() {
    this.setData({
      historyActive: "true",
      completedTodoActive: ""
    })
  },

  pageLifetimes: {
    show() {
      console.log(this.getTabBar())
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },

  // toCompletedTodo: function() {
  //   http.get('/todos', { is_group: "yes" }).then(response => {
  //     console.log(response);
  //     this.setData({
  //       historyActive: "",
  //       completedTodoActive: "true"
  //     })
  //   })
  // },

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
    http.get('/todos',{ is_group: "yes"}).then(response => {
      let todos = response.response.data.resources;
      this.setData({ todos: todos });
    })
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