/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { connect } from "react-redux";
import { loadHotsRecommendDataAsync } from "@/components/main/index/actionCreator";
import Swiper from "@/components/common/swiper.jsx";
class HotsRecommend extends React.Component {
  render() {
    // console.log(this.props.hotsRecommendData.toJS());
    if(this.props.hotsRecommendData.size!==0){
      return (
        <div>
          <Swiper id={"tosction"} config={{
             slidesPerView: 3.4,
             spaceBetween: 30,
          }}>
          {
            this.props.hotsRecommendData.map((item,index)=>(
              <div className="swiper-slide" key={index}>
                <div style={{width:"106px",height:"210px"}}>
                    <img src={item.get("pic")}  style={{width:"100%",height:"145px"}} />
                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
              </div>
            ))
          }
    
    
              
            {/*  */}
          </Swiper>
        </div>
      );
    }else{
      return null;
    }
  
  }
  componentDidMount() {
    this.props.loadHotsRecommendDataAsync.bind(this)();
  }
}
const mapStateToProps = state => {
  return {
    currentCity: state.getIn(["indexReducer", "currentCity"]),
    hotsRecommendData: state.getIn(["indexReducer", "hotsRecommendData"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loadHotsRecommendDataAsync() {
      loadHotsRecommendDataAsync(dispatch, {
        city_id: this.props.currentCity.get("city_id")
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HotsRecommend);
