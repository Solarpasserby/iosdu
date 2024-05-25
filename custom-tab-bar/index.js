// custom-tab-bar/index.js
Component({
  data: {
    selected: 0,
    unselected_class: "view-unselected",
    selected_class: "view-selected",
    list: [
      {
      pagePath: "/pages/home/home",
      text: "主 页"
      }, 
      {
      pagePath: "/pages/activities/activities",
      text: "动  态"
      },
      {
      pagePath: "/pages/products/products",
      text: "文  创"
      }, 
      {
      pagePath: "/pages/individual/individual",
      text: "个  人"
      }
    ]
  },

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      this.setData({
        selected: data.index
      })
      wx.switchTab({url})
    }
  }
})