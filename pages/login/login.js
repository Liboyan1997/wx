// pages/login.js
import Toast from '../../@vant/weapp/dist/toast/toast';
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: '',
    code: "",
    telError: '',
    codeMessage: '发送验证码',
    timer: null,
    time: 60,
    disabled: false
  },

  onChange(e) {
    if (e.target.id == "tel") {
      this.setData({
        tel: e.detail
      })
      if (/^1[3|4|5|7|8]\d{9}$/.test(this.data.tel)) {
        this.setData({
          telError: ""
        })
      }
      if (this.data.tel.length >= 11) {
        if (/^1[3|4|5|7|8]\d{9}$/.test(this.data.tel) == false) {
          this.setData({
            telError: "请输入正确的手机号码"
          })
        }
      }
    }
    if (e.target.id == "code") {
      this.setData({
        code: e.detail
      })
    }
  },
  sendCode() {
    if (!this.data.disabled) {
      if (/^1[3|4|5|7|8]\d{9}$/.test(this.data.tel) == false) {
        Toast.fail('请输入正确的手机号码');
      } else {
        Toast.success('已经发送验证码');
        this.data.timer = setInterval(() => {
          this.data.time--
          this.setData({
            codeMessage: this.data.time + "s后才重新发送",
            disabled: true
          })
          if (this.data.time == 0) {
            clearInterval(this.data.timer)
            this.setData({
              codeMessage: "发送验证码",
              disabled: false
            })
          }
        }, 1000)
      }
    }
  },
  loginByTel(){
    if(/^1[3|4|5|7|8]\d{9}$/.test(this.data.tel)&&this.data.code.length==6){
      if(this.data.code=='123456'){
       Toast.success('登陆成功')
      }else{
        Toast.fail('验证码不正确');
      }
    }
  },
  loginByWX(e){
    console.log(e.detail)
    console.log(app.code)
    console.log(app.appId)
    Toast.success('登录成功')
    wx.redirectTo({
      url: '../home/home',
    })
  },
  // 获取微信登陆信息
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log(e)
    if(e.quit){
      wx.nextTick(
        Toast.success('已经退出')
      )
    }
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
    clearInterval(this.data.timer)
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