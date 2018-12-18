//状态拆分
import { combineReducers } from 'redux'
//历史点击
function historyHousesList(state = [], action) {
    switch (action.type) {
        //新增房产记录
        case 'ADD_HISTORY_HOUSE_ITEM': return [ action.item,...state]
        default: return state
    }
}
//合并暴露
export default combineReducers({
    //key:value,状态名：状态对应的reducer
    historyHousesList

})