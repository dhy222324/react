import React from "react";
import {TopBarSd} from "@/components/main/index/styled";
import {connect} from "react-redux" 
import {withRouter} from "react-router-dom";



class TopBar extends React.PureComponent{
    render(){
        return (
            <TopBarSd>
                <button onClick={this.toPath.bind(this)}>{this.props.currentCity.get("name")}</button>
                <input type="text" onFocus={()=>{
                    this.props.history.push("/search");
                }}/>
            </TopBarSd>    
        )
    }
    toPath(){
        this.props.history.push("/city");
    }
}



const mapStateToProps = state => {
    return {
        currentCity: state.getIn(["indexReducer", "currentCity"])
    };
  };
  const mapDispatchToProps = dispatch => {
    return {}
  };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopBar));