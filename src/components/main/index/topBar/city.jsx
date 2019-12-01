import React from "react";
import { connect } from "react-redux";
import BScroll from 'better-scroll';
import "./city.scss";
import { loadIndexCityDate,STE_CURRENT_CITY } from "@/components/main/index/actionCreator";

class TopBar extends React.PureComponent {
 
  render() {
    return (
      <div className="city">
        <div className="left">
          <ul>
            {this.state.cityList.map((item, index) => (
              <li key={index} className="left-item">
                <h1>{item.id}</h1>
                <ul>
                  {item.list.map((value, idx) => (
                    <li key={idx} onClick={this.props.getCurrentCity.bind(this,value)}>
                      <p>{value.name}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="right" style={{position:"fixed",top:"0",right:0,fontSize:"16px",lineHeight:"10px"}}>
        <ul>
            {this.state.cityList.map((item, index) => (
              <li key={index} style={{background:this.state.num===index?"red":""}} onClick={this.selectItem.bind(this,index)}>
                <p >{item.id}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  //1.父级要有高度  css

  
  // !!!一定注意 两个异步   数据异步,渲染节点异步 

  //2.初始化 BScrolll 
  //2.1配置 启纵向滚动 实时scroll top 
  //2.2绑定监听scroll事件    获取 scrollTop成功

  //3.获取所有  .liet>li clientHeight     >[0,120,304,500....],节点直接区间


  // 4.计算 scrollTop 在这个数组哪个区间  索引值

  
  //获取 所以偶 li  clientHeight  存入数组
  constructor() {
    super();
    this.state = {
      cityList: [],
      
      listHeight:[],
      num:0
    };
  }
  componentDidMount() {
    loadIndexCityDate(res => {
      var data = res.data;
      var cityList = [];
      for (var n in data) {
        cityList.push(data[n]);
      }
      this.setState({ cityList },()=>{
        setTimeout(()=>{
          this.initBScroll.call(this);
        },100)
      });
    });
  }
  initBScroll(){
      // console.log(this);
      this.BScroll=new BScroll(document.querySelector(".left"),{
        scrollY: true,  //开启纵向滚动
        probeType:3,      //实时scroll top
        click:true
      });
      // console.dir(this.BScroll)
      this.countListHeight.call(this);
      this.BScroll.on("scroll",(pos)=>{
        this.setState({num:this.countCurrentNum.call(this,Math.abs(Math.round(pos.y)))});
      })
  }
  countListHeight(){
    var nodes=document.querySelectorAll(".left-item");
    var height=0;
    var listHeight=[];
    listHeight.push(0);
    for(var i=0;i<nodes.length;i++){
      let node=nodes[i];
      height+=node.clientHeight;
      listHeight.push(height);
    }
    this.setState({listHeight});
  }
  
  countCurrentNum(scrollTop){
    for(var i=0;i<this.state.listHeight.length;i++){
        var height1=this.state.listHeight[i];
        var height2=this.state.listHeight[i+1];
        if(scrollTop>=height1&&scrollTop<height2){
          return i;
        }
    }
    return 0;
  }
  selectItem(index){
    var node=document.querySelectorAll(".left-item")[index];
    // console.log(this.BScroll);
    this.BScroll.scrollToElement(node,100);
  }
}

const mapStateToProps = state => {
  return {
    current: state.getIn(["indexReducer", "currentCity"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCurrentCity(item) {
       var temp={
            city_id:item.id||"0",
            abbreviation:item.Abbreviation||"",
            name:item.name
        }
        dispatch({
            type:STE_CURRENT_CITY,
            val:temp
        })
        this.props.history.goBack();
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
