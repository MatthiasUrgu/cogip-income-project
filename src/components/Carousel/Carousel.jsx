import Carousel from "react-bootstrap/Carousel";
import s from "./style.module.scss";

function CarouselHeader({ slideFirst, slideSecond, slideThird}) {
  return (
    <Carousel fade>
      
      <Carousel.Item>
        <img className={`${s.image}`} src={slideFirst} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={`${s.image}`} src={slideSecond} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={`${s.image}`} src={slideThird} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeader;
