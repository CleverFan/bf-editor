/**
 * Created by chengfan on 2017/4/15.
 */
import axios from '../http'
import config from '../config'
import * as types from './type'

const actions = {

  // 登录验证三方法
  [types.LOGIN]: (context, data) => {
    context.commit(types.LOGIN, data)
  },
  [types.LOGOUT]: (context, data) => {
    context.commit(types.LOGIN, data)
  },
  [types.TITLE]: (context, data) => {
    context.commit(types.LOGIN, data)
  },
  // 封装一个 ajax 方法
  tryLogin (context) {
    axios({
      method: 'post',
      url: config.baseUrl + '/login',
      data: context.state.newUser
    }).then(function(res){
      console.log(res)
    }).catch(function(err){
      console.log(err)
    })
  },
  register(context) {
    axios({
      method: 'post',
      url: config.baseUrl + '/register',
      data: context.state.user
    }).then(function(res){
      console.log(res)
    }).catch(function(err){
      console.log(err)
    })
  },
  changeNowDir(context, nowDir){
    context.commit('changeNowDir', nowDir)
  },
  changeEditContentByFileIndex(context, index){
    context.commit('changeEditContentByFileIndex', index)
  },
  changeEditData(context, data){
    context.commit('changeEditData', data)
  },
  addDir(context,dirName){
    context.commit('addDir', dirName)
  },
  addFile(context, fileName){
    context.commit('addFile', fileName)
  }
}

export default actions
