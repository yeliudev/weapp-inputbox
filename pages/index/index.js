Page({
  data: {
    showSinglelineInputbox: false,
    showMultilineInputbox: false
  },

  onSinglelineButtonTap: function () {
    this.setData({
      showSinglelineInputbox: true
    })
  },

  onMultilineButtonTap: function () {
    this.setData({
      showMultilineInputbox: true
    })
  },

  onInputCancel: function () {
    console.log('用户点击取消')
    this.setData({
      showSinglelineInputbox: false,
      showMultilineInputbox: false
    })
  },

  onInputConfirm: function (e) {
    console.log('用户点击确定，输入框内容为' + (e.detail ? (':' + e.detail) : '空'))
    this.setData({
      showSinglelineInputbox: false,
      showMultilineInputbox: false
    })
  }
})