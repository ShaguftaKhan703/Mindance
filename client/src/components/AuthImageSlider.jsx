import Slider from "react-slick";
import '../assets/css/slick.css';
import '../assets/css/slick-theme.css';
import Image1 from '../assets/images/self_love.png';
import Image2 from '../assets/images/meditation.png';
import Image3 from '../assets/images/ptsd.png';

export const AuthImageSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="auth-slider">
      <Slider {...settings}>
        <div>
          <img className="slider-image" src={Image1} alt="" />
          <p className="slider-text">Self love starts with being kind to yourself.</p>
        </div>
        <div>
          <img className="slider-image" src={Image2} alt="" />
          <p className="slider-text">A healthy mind in a healthy body.</p>
        </div>
        <div>
          <img className="slider-image" src={Image3} alt="" />
          <p className="slider-text">Don't be afraid to reach out for help.</p>
        </div>
      </Slider>
    </div>
  );
}