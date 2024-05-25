Page({
  data: {
  },

  jumpToNews: function() {
     wx.navigateTo({
       url: '../news/news',
     })
  },

  jumpToNews1: function() {
    wx.navigateTo({
      url: '../news/news1',
    })
 },

 jumpToNews2: function() {
  wx.navigateTo({
    url: '../news/news2',
  })
},

jumpToNews3: function() {
  wx.navigateTo({
    url: '../news/news3',
  })
},

  onShow: function () {
    if (typeof this.getTabBar === 'function' &&  this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  }
})