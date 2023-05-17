// app.ts
App<IAppOption>({

  globalData: {
    name: 'abc'
  },
  onLaunch(val) {
    console.log(val);
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },

})