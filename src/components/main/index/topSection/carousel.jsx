import React from "react";
import { Carousel, WingBlank } from "antd-mobile";
import { CarouselWrap } from "@/components/main/index/styled";

export default class extends React.PureComponent {
  state = {
    data: [],
    imgHeight: 176
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ["1", "2", "3"]
      });
    }, 100);
  }
  render() {

    return (
      <CarouselWrap>
        <WingBlank>
          <Carousel autoplay={false} >
            {this.props.slide_list.map((item, index) => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                key={index}
                src={item.get("image_url")}
                style={{ width: "100%", verticalAlign: "top"}}
              />
            ))}
          </Carousel>
        </WingBlank>
      </CarouselWrap>
    );
  }
}
