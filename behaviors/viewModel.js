/**
 * @method: 数据绑定
 * @param {String} name - 绑定的字段名，字符串，但是无法绑定如 asd[cas.dd].e
 * @param {Boolean} updateView - 是否更新视图
 */

export default Behavior({
  properties: {
    name: {
      type: String,
      value: ''
    },
    updateView: {
      type: Boolean,
      value: false
    },
  },
  data: {
    _currentPage: null, // 当前页面实例
  },
  // externalClasses: ['option-css'], // 不支持混合css
  ready() {
    this.data._currentPage = getCurrentPages().pop()
  },
  detached() {
    this.data._currentPage = null
  },
  methods: {
    _viewModel_(value) {
      // 双向绑定，传入value
      let { _currentPage } = this.data,
        { name, updateView } = this.properties,
        nameList = name.match(/[^\[\]\.]+/g)

      _currentPage && name && (updateView ? _currentPage.setData({ [name]: value }) :
        nameList.reduce((item, item2, index) => {
          if (index === nameList.length - 1) item[item2] = value
          return item[item2]
        }, _currentPage.data))
    }
  }
})