// pages/home/component/tableList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    lists:[{title:'奥园峯会'},{title:'恒大悦龙台'}]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickBtn(e){
      console.log(e.currentTarget.dataset.btn)
    }
  }
})
