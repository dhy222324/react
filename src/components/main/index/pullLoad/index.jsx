import React from "react";
import ReactDOM from "react-dom";
import { PullToRefresh } from "antd-mobile";
import { connect } from "react-redux";
import { loadShwoListDataLoad } from "@/components/main/index/actionCreator";

class Demo extends React.Component {
  state = {
    refreshing: false,
    down: true,
    height: document.documentElement.clientHeight,
    page: 1
  };

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;

    setTimeout(
      () =>
        this.setState({
          height: hei
        }),
      0
    );
    this.props.loadShwoListDataLoad.call(this, this.state.page);
  }

  render() {
    return (
      <div>
        <PullToRefresh
          damping={60}
          ref={el => (this.ptr = el)}
          style={{
            height: this.state.height,
            overflow: "auto"
          }}
          indicator={{ deactivate: "上拉可以刷新" }}
          direction={"up"}
          refreshing={this.state.refreshing}
          onRefresh={() => {
            // console.log("run");
            // eslint-disable-next-line react/no-direct-mutation-state
            this.setState({page:++this.state.page},()=>{
              // console.log();
              this.props.loadShwoListDataLoad.call(this,this.state.page);
            })

          }}
        >
          {this.props.children}
        </PullToRefresh>
      </div>
    );
  }
}
var mapStateToProps = state => {
  return {
    currentCity: state.getIn(["indexReducer", "currentCity"])
  };
};
var mapDispatchToProps = dispatch => {
  return {
    loadShwoListDataLoad(page) {
      var temp = {
        page,
        city_id: this.props.currentCity.get("city_id")
      };
      loadShwoListDataLoad(dispatch, temp);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
