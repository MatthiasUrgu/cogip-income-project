import Carousel from "react-bootstrap/Carousel";
import s from "./style.module.scss";

function CarouselHeader({ slideFirst, slideSecond, slideThird, slideFour }) {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className={` ${s.image}`} src={slideFirst} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={`${s.image}`} src={slideSecond} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={`${s.image}`} src={slideThird} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={`${s.image}`} src={slideFour} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeader;
