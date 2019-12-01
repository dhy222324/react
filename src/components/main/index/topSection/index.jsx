import React from "react";
import { connect } from "react-redux";
import { loadIndexTopSectionDate } from "@/components/main/index/actionCreator";
import Carousel from "./carousel"
import IcoList from "./icoList"
class TopBar extends React.PureComponent {
  render() {
    // console.log()
    // if(){

    // }else{
    //   return null;
    // }
    return (
        <div>
            
            {
              this.props.slide_list?<Carousel slide_list={this.props.slide_list}/>:null
            }
            <IcoList/>
        </div>
    );
  }
  componentDidMount(){
    this.props.loadIndexTopSectionDate.bind(this)();
  }
}
const mapStateToProps = state => {
  return {
    currentCity: state.getIn(["indexReducer", "currentCity"]),
    slide_list:state.getIn(["indexReducer","topSection","slide_list"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loadIndexTopSectionDate(){
      var temp={
        abbreviation:this.props.currentCity.get("abbreviation"),
        city_id:this.props.currentCity.get("city_id")
      }
      loadIndexTopSectionDate(dispatch,temp);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
