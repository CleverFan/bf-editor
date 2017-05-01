/**
 * Created by chengfan on 2017/4/19.
 */

import * as types from './type'

const mutations = {

  [types.LOGIN]: (state, data) => {
    localStorage.token = data;
    state.token = data;
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token');
    state.token = null
  },
  [types.TITLE]: (state, data) => {
    state.title = data;
  },

  changeNowDir(state, nowDir) {
    state.nowData.nowDir = nowDir
  },
  changeEditContentByFileIndex(state, index){
    state.nowData.nowFile = index;
    state.nowData.editData.mdValue = state.fileList[state.nowData.nowDir - 1].list.find((o) => o.id == index).content
  },
  changeEditData(state, data){

    state.nowData.editData.mdValue = data.mdValue
    state.nowData.editData.htmlValue = data.htmlValue

    console.log(state.nowData.editData.mdValue )
  },
  addDir(state, dirName){
    //{id: "1", name:"我是文集1" , time: "2017.1"},
    let dirLength = state.dirList.length
    let date = new Date()
    //添加文件夹
    state.dirList.push({id: dirLength++ + "", name : dirName, time: date.getYear() + "." + date.getMonth() + "." + date.getDay()})
    //初始化文件
    state.fileList.push({id : dirLength++ + "", list : []})
  },
  addFile(state, fileName){
    let date = new Date()
    let time = date.getYear() + "." + date.getMonth() + "." + date.getDay()
    let fileList = state.fileList[state.nowData.nowDir - 1].list
    fileList.push({id : fileList.length + "" , title : fileName, time : time, content: ''})
  }
}
export default mutations
