import {GET_TOPSECTION_DATA,GET_HOTSRECOMMED_DATA,GET_SEARCH_DATA,GET_SHOWLIST_DATA} from "./actionType"

export const LOAD_TEST_DATA = "index/get_test_data";
export const STE_CURRENT_CITY = "index/set_current_city";

const loadGetTopSectionData=val=>{
  return {
    type:GET_TOPSECTION_DATA,
    val
  }
}

const loadHotsRecommendData=val=>{
  return {
    type:GET_HOTSRECOMMED_DATA,
    val
  }
}
const loadShwoListData=val=>{
  return {
    type:GET_SHOWLIST_DATA,
    val
  }
}




var poxy = "/apis";

export const loadGetTestDate = dispatch => {
  return () => {

    fetch("/apis/api/v1/topics", {
      method: "GET"
    })
      .then(data => {
        return data.json();
      })
      .then(res => {
        dispatch({
          type: LOAD_TEST_DATA,
          val: res.data
        });
      });
  };
};

export const loadIndexCityDate = callBack => {
  fetch(poxy + "/city/city/getSortedCityList?version=6.0.8&referer=2", {
    method: "GET"
  })
    .then(data => {
      return data.json();
    })
    .then(res => {
      callBack(res);
    });
};


export const loadIndexTopSectionDate = (dispatch,params) => {
  fetch(poxy + `/home/index/getClassifyHome?version=6.0.8&referer=2&abbreviation=${params.abbreviation}&city_id=${params.city_id}`, {
    method: "GET"
  })
    .then(data => {
      return data.json();
    })
    .then(res => {
      dispatch(loadGetTopSectionData(res.data))
    });
};


export const loadHotsRecommendDataAsync = (dispatch,params) => {
  fetch(poxy + `/home/index/getHotsRecommendList?city_id=${params.city_id}&version=6.0.8&referer=2`, {
    method: "GET"
  })
    .then(data => {
      return data.json();
    })
    .then(res => {
      var  val=res.data.hots_show_list;
      dispatch(loadHotsRecommendData(val))
    });
};


export const loadSearchDataAsync = (dispatch,params) => {
  fetch(poxy + `/Show/Search/getShowList?keywords=${params.keywords}&page=1&sort_type=1&version=6.0.8&referer=2`, {
    method: "GET"
  })
    .then(data => {
      return data.json();
    })
    .then(res => {
      console.log(res);
      // var  val=res.data.hots_show_list;
      // dispatch(loadHotsRecommendData(val))
    });
};

export const loadShwoListDataLoad = (dispatch,params) => {
  fetch(poxy + `/Show/Search/getShowList?city_id=${params.city_id}&page=${params.page}&version=6.0.8&referer=2`, {
    method: "GET"
  })
    .then(data => {
      return data.json();
    })
    .then(res => {
      var  val=res.data.list;
      dispatch(loadShwoListData(val))
    });
};


