const { http } = require("../../lib/http.js");
const { app_id, app_secret } = getApp().globalData;

Page({

  data: {

  },
  
  // code, iv, encrypted_data, app_id, app_secret
  login: function(e) {
    let code;
    let iv = e.detail.iv;
    let encrypted_data = e.detail.encryptedData;
    wx.login({
      success(res) {
        if (res.code) {
          code = res.code;
          http.post('/sign_in/mini_program_user', { code, iv, encrypted_data, app_id, app_secret }).then((response) => {
            let event = response.response;
            wx.setStorageSync('user', event.data.resource);
            wx.setStorageSync('X-token', event.header["X-token"]);
            wx.reLaunch({ url: '/pages/home/home' });
          })
        }
      }
    })
  }
})