//index.js
//获取应用实例
Page({
  data: {
    question: ""
  },
  changeQuestion: function(e) {
    var val = e.detail.value;
    this.setData({
      question: val
    });
  },
  clearAnswer: function() {
    this.setData({
      question: ""
    })
  },
  getAnswer: function(e) {
    var that = this;
    var question = that.data.question;
    if (!question) {
      wx.lin.showMessage({
        type: 'error',
        duration: 1500,
        content: '问题不能为空'
      })
      return false;
    }
    wx.navigateTo({
      url: '../index/detail/detail?question=' + question //传递参数
    })
  },
  onLoad: function() {
    this.setData({
      question: ""
    })
  },
  onShow: function() {
  },
  onShareAppMessage: function () {
    return {
      title: '欢迎【牙刷查题】微信小程序，大学生必备~~~'
    }
  }
})