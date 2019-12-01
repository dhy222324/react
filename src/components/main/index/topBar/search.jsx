import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadSearchDataAsync } from "@/components/main/index/actionCreator";

class Two extends React.Component {
  state = {
    inputVal: "",
    num: 0
  };
  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          type="text"
          value={this.state.inputVal}
          onChange={this.handelInput.bind(this)}
        />
        <button>取消</button>
      </div>
    );
  }
  handelInput(e) {
    var inputVal = e.target.value;
    /*
    this.setState({inputVal},()=>{
      // console.log(this.state.inputVal)
      // console.log(this);//Two
      // this.props.loadSearchDataAsync.call(this,inputVal);
      // console.log(this);
      // this.props.loadSearchDataAsync.bind(this)();
      // this.props.loadSearchDataAsync.bind(this)();
      // console.log("run")
      //函数防抖(debounce)   当一个动作连续执行,则执行最后一次
      搜索框输入 只需要用户最后一次输入完毕的结果,在发请求
      手机号,邮箱验证,
    })
    */
    this.setState(
      { inputVal },
      this.debounce(this.props.loadSearchDataAsync, 2000)
    );
  }

  debounce(fn, wait) {
    return () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if(this.state.inputVal==="")return; 
        fn(this.state.inputVal);
      }, wait);
    };
  }
  componentDidMount(){
    // 函数节流(throttle) 保持一段时间执行一次,降低执行频率 
    // onresize 响应式页面,每一次窗口大小改变,浏览器都要进行重绘,我们可以使用节流来进行优化
    window.addEventListener("resize",this.throttle(this.testThrottle,1000))
    // window.addEventListener("resize",this.throttle())
    // window.addEventListener("resize",this.throttle)

  }


  throttle(fn,wait){
    var last=0;
    return ()=>{
      let current_time=Date.now(); // 1574823583058
      if(current_time-last>wait){
        fn();
        last=Date.now(); //1574823583058
      }
    }
  }

  testThrottle(){
    console.log("run_success");
  }

  getSearchData() {}
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    loadSearchDataAsync(keywords) {
      loadSearchDataAsync(dispatch, { keywords });
      // console.log(this);//this.props
      // this.setState({num:1})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Two));
