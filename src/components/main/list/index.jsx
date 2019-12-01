import React from "react";
import { connect } from "react-redux";
import URL from "url";
import { loadListTabsDataAsync } from "@/components/main/list/actionCreator";
import { Tabs, WhiteSpace } from "antd-mobile";
import BScroll from "better-scroll";
import { hidden } from "_ansi-colors@3.2.4@ansi-colors";

class Demo extends React.Component {
  state = {
    page: 1,
    category_id: 0
  };

  render() {
    console.log(this.props.list.toJS());
    const tabs = [
      { category_id: "0", title: "全部" },
      { category_id: "35", title: "演唱会" },
      { category_id: "36", title: "音乐会" },
      { category_id: "37", title: "话剧歌剧" },
      { category_id: "38", title: "儿童亲子" },
      { category_id: "79", title: "音乐剧" },
      { category_id: "91", title: "戏曲综艺" },
      { category_id: "99", title: "展览" },
      { category_id: "86", title: "舞蹈芭蕾" }
    ];
    return (
      <div>
        <WhiteSpace />
        <Tabs
          tabs={tabs}
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}
          onTabClick={res => {
            this.props.LoadsetTabsData.call(this, res);
          }}
        ></Tabs>
        <WhiteSpace />

        <div
          style={{
            backgroundColor: "#fff",
            height: "500px",
            overflow: hidden,
            border: "1px solid red"
          }}
          className="tab_up_load"
        >
          <ul>
            {this.props.list.map((item, index) => (
              <li key={index}>
                <img
                  src={item.get("pic")}
                  alt=""
                  style={{ width: "100px", height: "200px" }}
                />
                <p>{item.get("name")}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  componentDidMount() {
    //初始化加载动作
    //1.初始化获取 当前 tab_id 加载
    //1.1 tabbar 跳转  没有id
    //1.2 ico    跳转   38   覆盖 list
    //2 设置

    /*
        this.setState({ category_id }, () => {
            this.props.loadListTabsDataAsync.call(this); 函数里面做了   数据成功回调函数 ,主要目的 ->分离 接口异步,节点渲染异步
        });
      */

      
    //接口数据成功回调执行 初始化  BScroll
    //初始化  BScroll    ,使用函数回调,   初始化 BScroll,重新计算方法执行,通知BS方法执行
    //没有使用  tab 切换效果 ,独立 div 遍历

    //tabs切换加载动作  点击事件获取tab_id 设置 state.category_id 直接调用 接口  immutable 链式操作  赋值[],在设置

    //上拉加载动作   初始化上拉测试  切换上拉测试

    //  page 递增
    var category_id =
      URL.parse(this.props.location.search, true).query.caid || 0;

    this.setState({ category_id }, () => {
      this.props.loadListTabsDataAsync.call(this);
    });
  }
}
const mapStateToProps = state => {
  return {
    currentCity: state.getIn(["indexReducer", "currentCity"]),
    list: state.getIn(["listReducer", "list"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loadListTabsDataAsync(status) {
      var temp = {
        page: this.state.page,
        category: this.state.category_id,
        city_id: this.props.currentCity.get("city_id"),
        status
      };
      loadListTabsDataAsync(dispatch, temp, () => {
      // 接口数据回调成功
        setTimeout(() => {
         //节点渲染成功 
         //将静态并且已经渲染的真是节点高度全部获取
          this.props.initBScroll.call(this);
          this.BScroll.refresh();  //重新计算高度,并且通知   BScroll
          this.BScroll.finishPullUp();
        }, 100);
      });
    },
    LoadsetTabsData(res) {
      // console.log(res);//{category_id:"38"}
      var category_id = res.category_id; //路由ID   caid=0
      this.setState(
        {
          category_id,
          page: 1
        },
        () => {
          this.props.loadListTabsDataAsync.call(this);
        }
      );
    },

    initBScroll() {
      this.BScroll = new BScroll(document.querySelector(".tab_up_load"), {
        scrollY: true, //开启纵向滚动
        probeType: 3, //实时scroll top
        click: true,
        pullUpLoad: true
      });
      this.BScroll.on("pullingUp", pos => {
        this.setState({ page: ++this.state.page }, () => {
          // console.log(this.state.page);
          // console.log(this.state.category_id)
          this.props.loadListTabsDataAsync.call(this, "concat");
          //
          // var temp = {
          //   page,
          //   category,
          //   city_id: this.props.currentCity.get("city_id")
          // };
        });

        // this.setState({num:this.countCurrentNum.call(this,Math.abs(Math.round(pos.y)))});
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Demo);
