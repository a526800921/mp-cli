// components/Upload/Upload.js
const { _Component, _wx } = getApp().globalData

_Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isSingle: { // 单个图片上传
      type: Boolean,
      value: true
    },
    singleImgs: { // 单个图片-展示
      type: null,
      value: null,
      observer(newValue) {
        if (!newValue) return false

        this.setData({ _singleSrc: newValue })
      }
    },
    progress: { // 单个图片loading
      type: String,
      value: ''
    },
    imageList: { // 多个图片-展示
      type: Array,
      value: [],
      observer(newValue) {
        if (!newValue.length) return false

        this.setData({ _moreSrc: newValue })
      }
    },
    progressList: { // 多个图片loading
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _singleSrc: '', // 单图模式的图片
    _moreSrc: [], // 多图模式的图片
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onSelectSingle() {
      // 选择进货凭证
      _wx.chooseImage(1).then(res => {
        // 选择成功
        const path = res.tempFiles[0]

        this.setData({ _singleSrc: path })

        this.triggerParent('single', [path])
      }).catch(err => {
        // 取消选择
        console.log('取消选择', err)
      })
    },
    _onSelectMore() {
      // 选择产品图片
      const count = 9 - this.data._moreSrc.length
      
      _wx.chooseImage(count).then(res => {
        // 选择成功
        const paths = res.tempFiles // 新的图片自身是对象，可以通过存在 size 判断是否是新的图片
        const allPath = [...this.data._moreSrc, ...paths]

        this.setData({ _moreSrc: allPath })

        this.triggerParent('more', allPath)
      }).catch(err => {
        // 取消选择
        console.log('取消选择', err)
      })
    },
    _clickImage(e) {
      // 删除
      const { index } = e.target.dataset

      if (index !== void 0) {
        // 删除图片
        let _moreSrc = this.data._moreSrc.filter((res, index2) => index2 !== index)

        this.setData({ _moreSrc })

        this.triggerParent('more', _moreSrc)
      }
    },
    triggerParent(types, paths) {
      // 抛给父组件
      this.triggerEvent('uploadChange', { types, paths })
    }
  }
})
