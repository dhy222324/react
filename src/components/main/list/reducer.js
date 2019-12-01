import {fromJS,List} from "immutable";

import {LIST_GET_TABSDATA_DATA,LIST_GET_TABSDATACONCAT_DATA} from "./actionType"


const defaultState=fromJS({
    list:[]
});


export default (state=defaultState,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        // 设置 覆盖
        case LIST_GET_TABSDATA_DATA:
           return  state.update("list",x=>List(x=[])).set("list",fromJS(action.val));
        case LIST_GET_TABSDATACONCAT_DATA:
           return  state.update("list",x=>x.concat(fromJS(action.val)));    
           
    }
    return state;
}