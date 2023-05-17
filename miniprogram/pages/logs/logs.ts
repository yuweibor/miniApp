// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
  data: {
    logs: [],
  },
  onLoad(e) {
      console.log(e);
      
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log
        }
      }),
    })
  },
  jumpToList(){
    wx.navigateTo({url:"../list/list"});
  }
})
