// pages/component/pages/yuyue/yuyue.js
var util = require('../../../../utils/util.js'); 
//获取应用实例  
var app = getApp()
Page({
  data: {
    xingming: '',
    dianhua: '',
    submited: false,
    yuyueriqi: '',
    yuyuemubiao: '',
    beizhu: ''
  },
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      yuyueriqi: time
    });
  },
  inputName: function (e) {
    this.setData({
      xingming: e.detail.value//把表单输入的值存入到data数组中
    })
  },
  inputPhone: function (e) {
    if (e.detail.cursor >= 11) {//胡：判断手机号码输入的位数是否合理
      this.setData({
        dianhua: e.detail.value
      })
      wx.hideKeyboard()//当手机号码输入到11位时隐藏输入键盘
    }
  },
  bindDateChange: function (e) {
    this.setData({
      yuyueriqi: e.detail.value
    })
  },
  inputTitle: function (e) {
    this.setData({
      yuyuemubiao: e.detail.value
    })
  },
  inputBeizhu: function (e) {
    this.setData({
      beizhu: e.detail.value
    })
  },
  formSubmit: function (e) {
    if (this.data.xingming && this.data.dianhua) {//从data数组中取变量值
      this.setData({ submited: true });
      //胡：此处调用服务器接口将数据存入数据库

      var that = this;
      var formData = e.detail.value;
      //JSON格式提交数据
      wx.request({
        url: 'https://xcx.sztjnk.com/yuyue_api.php',
        // url:'http://api.it0733.com/Backashx/Webasker.ashx',
        data: formData,
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          //that.modalTap();
        }
      })
      //数据保存完毕
      wx.showToast({
        title: '预约成功',
        icon: 'success',
        duration: 2000
      })
    } else {
      wx.showToast({//弹出提示
        title: '联系人和手机号码不能为空！',
        icon: 'loading',
        duration: 1000
      })
    }
  },
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