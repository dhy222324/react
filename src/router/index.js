import React,{Fragment} from "react";
import {Route,Redirect,Switch} from "react-router-dom";

import Index from "@/components/main/index";
import List from "@/components/main/list";
import Test from "@/components/main/test";
import City from "@/components/main/index/topBar/city";
import Search from "@/components/main/index/topBar/search";

export default class  extends React.Component{
    render(){
      return (
        <Fragment>
          <Switch>
            <Route path="/index" component={Index}/>
            <Route path="/list" component={List}/>
            <Route path="/test" component={Test}/>
            <Route path="/city" component={City}/>
            <Route path="/search" component={Search}/>
            <Redirect path="/" to="/index"/>
           </Switch> 
        </Fragment>
      )
    }
  }


