import CarouselHeader from "../../components/Carousel/Carousel";
import SlideFirst from "../../assets/img/slide1.jpg";
import SlideSecond from "../../assets/img/slide2.jpg";
import slideThird from "../../assets/img/slide3.jpg";
import slideFour from "../../assets/img/slide4.jpg";
export function Contact() {
  return (
    <div>
      <div>'Contact us'</div>
      <CarouselHeader
        slideFirst={SlideFirst}
        slideSecond={SlideSecond}
        slideThird={slideThird}
        slideFour={slideFour}
      />
    </div>
  );
}
