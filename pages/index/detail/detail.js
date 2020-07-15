// pages/index/detail/detail.js

const app = getApp()
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer: [],
    question : "",
    loading : true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.answer = [];
    this.data.question = "";
    this.data.question = options.question;
  },
  getAnswer: function (question) {
    var that = this;
    var url = app.globalData.baseUrl + '?tm=' + question;
    util.http(url, 'GET', null, null, this.successCallBack, this.failCallBack);
  },
  successCallBack: function (res) {
    if (res.code == "200") {
      this.data.answer = res.data;
      //wx.lin.hideLoading()
      this.setData({
        loading: false
      })
    } else {
      wx.lin.showMessage({
        type: 'warning',
        duration: 2000,
        content: "系统异常请返回重试"
      })
      this.data.loading = false
    }
  },
  failCallBack: function (res) {
    wx.lin.showMessage({
      type: 'warning',
      duration: 1500,
      content: "系统异常请重试"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      loading: false
    })
    this.getAnswer(this.data.question);
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
    return {
      title: '我在牙刷查题微信小程序找到答案了~~~'
    }
  }
})