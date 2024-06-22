import React, { Component } from "react";
import Slider from "react-slick";
import Tip1 from "../assets/images/tips-1.jpg";
import Tip2 from "../assets/images/tips-2.jpg";
import Tip3 from "../assets/images/tips-3.png";
import Tip4 from "../assets/images/tips-4.jpg";
import Tip5 from "../assets/images/tips-5.jpg";
import Tip6 from "../assets/images/tips-6.jpg";
import "../assets/css/tipsSlider.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      dots: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="tipSlider">
        <h2>See All Tips</h2>
        <Slider {...settings}>
          <div className="tip">
            <div className="tip1">
              <img className="tipImage" alt="tips" src={Tip1} />
              <h3>Eat a healthy diet</h3>
            </div>
          </div>
          <div className="tip">
            <div className="tip2">
              <img className="tipImage" alt="tips" src={Tip2} />
              <h3>Spend time in nature.</h3>
            </div>
          </div>
          <div className="tip">
            <div className="tip3">
              <img className="tipImage" alt="tips" src={Tip3} />
              <h3>Connect with others.</h3>
            </div>
          </div>
          <div className="tip">
            <div className="tip4">
              <img className="tipImage" alt="tips" src={Tip4} />
              <h3>Try to get enough sleep.</h3>
            </div>
          </div>
          <div className="tip">
            <div className="tip5">
              <img className="tipImage" alt="tips" src={Tip5} />
              <h3>Be physically active. </h3>
            </div>
          </div>
          <div className="tip">
            <div className="tip6">
              <img className="tipImage" alt="tips" src={Tip6} />
              <h3>Stay positive.</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
