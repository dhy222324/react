import React from "react";
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default class  extends React.Component {
  render() {
    return (
      <div className="swiper-container" id={this.props.id} >
        <div className="swiper-wrapper">
          {/* <div class="swiper-slide">Slide 1</div> */}
          {this.props.children} 
        </div>
      </div>
    );
  }
  componentDidMount(){
        new Swiper(`#${this.props.id}`,this.props.config)
  }
}

