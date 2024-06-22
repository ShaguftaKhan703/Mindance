import React, { Component } from "react";
import Slider from "react-slick";
import Article1 from "../assets/images/article1.jpg";
import Article2 from "../assets/images/article2.jpg";
import Article3 from "../assets/images/article3.jpg";
import Article4 from "../assets/images/article4.jpg";
import Article5 from "../assets/images/article5.jpg";
import Article6 from "../assets/images/article6.jpg";
import "../assets/css/Articles.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      dots: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      speed: 500,
      rtl: true,
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
      <div className="ArticleSlider">
        <h2>Articles </h2>
        <Slider {...settings}>
          <div>
            <div className="Article">
              <img className="ArticleImage" alt="Articles" src={Article1} />
              <h3>The Devil’s Bait</h3>
              <a
                href="https://harpers.org/archive/2013/09/the-devils-bait/"
                target="_blank"
                rel="noreferrer"
              >
                <p class="alignright">Read More</p>
              </a>
              <h4 class="alignleft">by Leslie Jamison</h4>
            </div>
          </div>
          <div>
            <div className="Article">
              <img className="ArticleImage" alt="Articles" src={Article2} />
              <h3>How I let drinking take over my life</h3>
              <h5 class="alignleft">by William Leith</h5>
              <a
                href="https://www.theguardian.com/news/2018/jan/05/william-leith-alcohol-how-did-i-let-drinking-take-over-my-life"
                target="_blank"
                rel="noreferrer"
              >
                <p class="alignright">Read More</p>
              </a>
            </div>
          </div>
          <div>
            <div className="Article">
              <img className="ArticleImage" alt="Articles" src={Article3} />
              <h3>Is PTSD Contagious?</h3>
              <a
                href="https://www.motherjones.com/politics/2013/01/ptsd-epidemic-military-vets-families/"
                target="_blank"
                rel="noreferrer"
              >
                <p class="alignright">Read More</p>
              </a>
              <h5 class="alignleft">by Mac McClelland </h5>
            </div>
          </div>
          <div>
            <div className="Article">
              <img className="ArticleImage" alt="Articles" src={Article4} />
              <h3>Suffering Souls</h3>
              <a
                href="https://www.newyorker.com/magazine/2008/11/10/suffering-souls"
                target="_blank"
                rel="noreferrer"
              >
                <p class="alignright">Read More</p>
              </a>
              <h5 class="alignleft">By John Seabrook</h5>
            </div>
          </div>
          <div>
            <div className="Article">
              <img className="ArticleImage" alt="Articles" src={Article5} />
              <h3>Adventures in Depression </h3>
              <a
                href="http://hyperboleandahalf.blogspot.com/2011/10/adventures-in-depression.html"
                target="_blank"
                rel="noreferrer"
              >
                <p class="alignright">Read More</p>
              </a>
              <h5 class="alignleft">by Allie Brosh</h5>
            </div>
          </div>
          <div>
            <div className="Article">
              <img className="ArticleImage" alt="Articles" src={Article6} />
              <h3>The Illusions of Psychiatry</h3>
              <a
                href="https://www.nybooks.com/articles/2011/07/14/illusions-of-psychiatry/"
                target="_blank"
                rel="noreferrer"
              >
                <p class="alignright">Read More</p>
              </a>
              <h5 class="alignleft">by Marcia Angell</h5>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
