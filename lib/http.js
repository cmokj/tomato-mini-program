const { host, t_app_id, t_app_secret } = getApp().globalData;

const _http = (method, url, data) => {
  return new Promise((resolve,reject) => {
    wx.request({
      data,
      method,
      url: `${host}${url}`,
      header: {
        Authorization: `Bearer ${wx.getStorageSync('X-token')}`,
        "t-app-id": t_app_id,
        "t-app-secret": t_app_secret
      },
      dataType: 'json',
      success: (response) => {
        let statusCode = response.statusCode;
        if(statusCode >= 400) {
          if(statusCode === 401) {
            wx.redirectTo({
              url: '/pages/login/login',
            })
          }
          reject({statusCode,response})
        } else {
          resolve({statusCode,response})
        }
      },
      fail: (errors) => {
        wx.showToast({
          title: '请求失败',
          icon: 'none'
        });
        reject(errors);
      }
    })
  })
}

const http = {
  get: (url,params) => _http('GET',url,params),
  post: (url,data) => _http('POST',url,data),
  put: (url,data) => _http('PUT',url,data),
  delete: (url,data) => _http('DELETE',url,data)
}

module.exports = {
  http
}