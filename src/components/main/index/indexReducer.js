import {fromJS,Map} from "immutable";
import { LOAD_TEST_DATA,STE_CURRENT_CITY} from "./actionCreator";

import {GET_TOPSECTION_DATA,GET_HOTSRECOMMED_DATA,GET_SHOWLIST_DATA} from "./actionType"


const defaultState=fromJS({
    num:0,
    testList:[],
    currentCity:{
        city_id:"0",
        abbreviation:"",
        name:"全国"
    },
    topSection:{},
    hotsRecommendData:[],
    showList:[]
});


export default (state=defaultState,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case LOAD_TEST_DATA:
           return  state.set("testList",fromJS(action.val));
        case STE_CURRENT_CITY:
           return  state.update("currentCity",x=>x=Map(action.val));  
        case GET_TOPSECTION_DATA:
            return state.set("topSection",fromJS(action.val));
        case GET_HOTSRECOMMED_DATA:
            return state.set("hotsRecommendData",fromJS(action.val)); 
        case GET_SHOWLIST_DATA:
            return state.update("showList",x=>x.concat(fromJS(action.val)));
    }
    return state;
}