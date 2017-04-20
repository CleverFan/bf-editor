/**
 * Created by chengfan on 2017/4/15.
 */

const state = {
  user: {
    id:'1',
    name: 'chengfan',
    password: '123456'
  },
  newUser : {
    name: '',
    password: '',
    rePassword: '',
    github : ''
  },
  nowData : {
    nowDir : "1", // 当前文集，默认是1
    nowFile : "1", // 当前文章id，默认是1
    editData : {  // 编辑器数据
      mdValue : '', // md源码
      htmlValue: '', // html源码
    },

  },

  fileList : [
    {
      id : "1",
      list : [
        {id : "1", title : "文章1" , time:  "2017.1" , content : '### 123 \n - 123 \n - 234'},
        {id : "2", title :"文章2" , time : "2017.2" , content : '``` \n var a = 1 \n ```'}
      ]
    },
    {
      id : "2",
      list : [
        {id : "3", title :"文章3" , time : "2017.3" , content : '### 123 \n - 123 \n - 234'},
        {id : "4", title :"文章4" , time : "2017.4" , content : '``` \n var a = 1 \n ```'}
      ]
    }

  ],
  dirList : [
    {id: "1", name:"我是文集1" , time: "2017.1"},
    {id: "2", name:"我是文集2" , time: "2017.2"}
  ]
}

export default state
