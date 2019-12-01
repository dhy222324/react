import {LIST_GET_TABSDATA_DATA,LIST_GET_TABSDATACONCAT_DATA} from "./actionType"



const loadListGetTabsData=val=>{
  return {
    type:LIST_GET_TABSDATA_DATA,
    val
  }
}

const loadListGetTabsDataConcat=val=>{
  return {
    type:LIST_GET_TABSDATACONCAT_DATA,
    val
  }
}

var poxy = "/apis";
export const loadListTabsDataAsync = (dispatch,params,fn) => {

  fetch(poxy + `/Show/Search/getShowList?category=${params.category}&city_id=${params.city_id}&page=${params.page}&keywords=&version=6.0.8&referer=2`, {
    method: "GET"
  })
    .then(data => {
      return data.json();
    })
    .then(res => {
      var val=res.data.list;
      fn();
      if(params.status==="concat"){
        dispatch(loadListGetTabsDataConcat(val));  //合并dispatch
      }else{
        dispatch(loadListGetTabsData(val));       //覆盖dispatch
      }
    });
};



