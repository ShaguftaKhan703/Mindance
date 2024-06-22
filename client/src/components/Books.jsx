import React, { Component } from "react";
import Slider from "react-slick";
import Books1 from "../assets/images/Books1.jpg";
import Books2 from "../assets/images/Books2.svg";
import Books3 from "../assets/images/Books3.svg";
import Books4 from "../assets/images/Books4.svg";
import Books5 from "../assets/images/Books5.svg";
import Books6 from "../assets/images/Books6.jpg";
import Books7 from "../assets/images/Books7.jpg";
import Books8 from "../assets/images/Books8.jpg";
import "../assets/css/Books.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "books",
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
      <div className="booksSlider">
        <h2>Books</h2>
        <Slider {...settings}>
          <div>
            <div className="Books">
              <a
                href="https://amzn.eu/d/9GoDKCB"
                target="_blank"
                rel="noreferrer"
              >
                <img className="BooksImage" alt="Bookss" src={Books1} />
              </a>
              <h3>THE COURAGE TO BE DISLIKED</h3>
            </div>
          </div>
          <div>
            <div className="Books">
              <a
                href="https://amzn.eu/d/c7EoFgV"
                target="_blank"
                rel="noreferrer"
              >
                <img className="BooksImage" alt="Bookss" src={Books2} />
              </a>
              <h3>The Body keeps the score</h3>
            </div>
          </div>
          <div>
            <div className="Books">
              <a
                href="https://amzn.eu/d/6qZUD3R"
                target="_blank"
                rel="noreferrer"
              >
                <img className="BooksImage" alt="Bookss" src={Books3} />
              </a>
              <h3>Stop Overthinking</h3>
            </div>
          </div>
          <div>
            <div className="Books">
              <a
                href="https://amzn.eu/d/6GzFli2"
                target="_blank"
                rel="noreferrer"
              >
                <img className="BooksImage" alt="Bookss" src={Books4} />
              </a>
              <h3>Don't CAll me crazy</h3>
            </div>
          </div>
          <div>
            <div className="Books">
              <a
                href="https://amzn.eu/d/gaL36U8"
                target="_blank"
                rel="noreferrer"
              >
                <img className="BooksImage" alt="Bookss" src={Books5} />
              </a>
              <h3>Maybe You Should talk to someone</h3>
            </div>
          </div>
          <div>
            <div className="Books">
              <a
                href="https://amzn.eu/d/gwJ7l85"
                target="_blank"
                rel="noreferrer"
              >
                <img className="BooksImage" alt="Bookss" src={Books6} />
              </a>
              <h3>Body Talk</h3>
            </div>
          </div>
          <div>
            <div className="Books">
              <a
                href="https://amzn.eu/d/5yXGJ68"
                target="_blank"
                rel="noreferrer"
              >
                <img className="BooksImage" alt="Bookss" src={Books7} />
              </a>
              <h3>Ikigai</h3>
            </div>
          </div>
          <div>
            <div className="Books">
              <a
                href="https://amzn.eu/d/cUKoP4W"
                target="_blank"
                rel="noreferrer"
              >
                <img className="BooksImage" alt="Bookss" src={Books8} />
              </a>
              <h3>Meditations</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
