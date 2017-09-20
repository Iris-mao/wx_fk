// pages/component/pages/jihuashengyu/shengyu.js
Page({
  //事件处理函数
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '4006009222', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  shouye: function () {
    wx.redirectTo({
      url: '/pages/component/index'
    })
  },
  yuyue: function () {
    wx.redirectTo({
      url: '/pages/component/pages/yuyue/yuyue'
    })
  },
  luxian: function () {
    wx.redirectTo({
      url: '/pages/component/pages/laiyuanluxian/luxian'
    })
  }
})