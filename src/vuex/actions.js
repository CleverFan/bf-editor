/**
 * Created by chengfan on 2017/4/15.
 */
import axios from 'axios'
import config from '../config'

const actions = {
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
  }
}

export default actions
