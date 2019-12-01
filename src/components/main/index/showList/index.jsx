import React from "react";
import { connect } from "react-redux";
class ShwoList extends React.Component {
  render() {
    // console.log(this.props.showList.toJS())
    return (
      <div>
        <ul>
          {this.props.showList.map((item, index) => (
            <li key={index}>
              <img src={item.pic} alt="" style={{width:"100px",height:"200px"}}/>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
var mapStateToProps = state => {
  return {
    showList: state.getIn(["indexReducer", "showList"])
  };
};
var mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShwoList);
