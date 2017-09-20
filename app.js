//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})

// Page({
//   //事件处理函数
//   calling: function () {
//     wx.makePhoneCall({
//       phoneNumber: '4006009222', //此号码并非真实电话号码，仅用于测试
//       success: function () {
//         console.log("拨打电话成功！")
//       },
//       fail: function () {
//         console.log("拨打电话失败！")
//       }
//     })
//   }
// })
