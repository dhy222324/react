import React from 'react';
import {withRouter,Link} from "react-router-dom";
import { TabBar } from 'antd-mobile';
// class Table extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       routLinks:[
//         {path:"/index",name:"首页"},
//         {path:"/list",name:"列表"},
//         {path:"/test",name:"测试"},
//       ]
//     }
//   }
//   render(){
//     return (
//       <div>
//         {
//           this.state.routLinks.map((item,index)=>(
//           <Link to={item.path} key={index}>{item.name}</Link>
//           ))
//         }
//       </div>
//     )
//   }
// }
           
//   TabBar.Item -> badge={100}    badge={'new'} 

class TabBarExample extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
  }


  testTabFn(){

  }
  render() {
    
    return (
      <div style={{ position: 'fixed',width: '100%', bottom: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Msea"
            key="Msea"
            icon={
              <Link to="/index">  
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}/>
              </Link>
            }

            selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
      
            onPress={() => {
              console.log(this.props)
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>


          <TabBar.Item
            icon={
              <Link to="/list">
              <div
              style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}/>
             </Link> 
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="1904"
            key="1904"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>



          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Friend"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          </TabBar.Item>



          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
          </TabBar.Item>


        </TabBar>
      </div>
    );
  }
}



export default withRouter(TabBarExample);
