import React from 'react';
import {withRouter} from "react-router-dom";
class Two extends React.Component{
  render(){
    return (
      <div>
        <h1>IocList</h1>
        <button onClick={()=>{
          // console.log(this);
          this.props.history.push({pathname:"/list",search:"?caid=38"})
        }}>toList儿童</button>
      </div>
    )
  }
}

export default withRouter(Two);
