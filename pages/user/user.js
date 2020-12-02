// pages/user/user.js
import Toast from '../../@vant/weapp/dist/toast/toast';
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      name:'周慧',
      avatarUrl:'../../assets/img/Group 3.png',
      company:'深圳市尊豪网络科技有限公司',
      tel:'18987898778'
    },
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

  },
quit(){
  app.clearUserInfo();
    wx.redirectTo({
      url: '../login/login?quit=true',
    })
  }
})