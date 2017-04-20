/**
 * Created by chengfan on 2017/4/19.
 */
const mutations = {
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
  }
}
export default mutations
