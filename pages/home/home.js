import Toast from '../../@vant/weapp/dist/toast/toast';

// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    tel: 18292168011,
    company: '深圳尊豪网络科技有限公司',
    list: [{
      title: '总报备',
      content: ''
    }, {
      title: '已报备',
      content: '80'
    }, {
      title: '待带看',
      content: ''
    }, {
      title: '已带看',
      content: ''
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户微信信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // wx.setNavigationBarColor({
    //   frontColor: '#ffffff', // 必写项
    //   backgroundColor: '#2896FF', // 必写项
    //   })
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
  clickCard(e) {
    // console.log(e)
    switch (e.currentTarget.dataset.index) {
      case 0:
        console.log(0)
        break;
      case 1:
        console.log(1)
        break;
      case 2:
        console.log(2)
        break;
      case 3:
        console.log(3)
        break;
      default:
        break;
    }
  },
  clickBtn(e){
    console.log(e.currentTarget.dataset.to)
  },
  toUser(){
    wx.navigateTo({
      url: '../user/user',
    })
  }
})