import React from "react";

import TopBar from "@/components/main/index/topBar";
import TopSection from "@/components/main/index/topSection";
import HotsRecommend from "@/components/main/index/HotsRecommend";
import ShowList from "@/components/main/index/showList";
import PullLoad from "@/components/main/index/pullLoad";

class Index extends React.Component {
  render() {
    return (
      <div id="index">
        <TopBar />

        <PullLoad>
          <TopSection />
          <HotsRecommend />
          <ShowList />
        </PullLoad>
      </div>
    );
  }
}

export default Index;
