import React from 'react';
import Routers from "@/router"


import Tabs from "@/components/layout/tab"
class App extends React.Component{
  render(){
    return (
      <div>
        <Routers/>
        <Tabs/>
      </div>
    )
  }
}

export default App;
