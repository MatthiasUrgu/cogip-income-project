import s from "./style.module.scss";
import { HeroText } from "../../components/HeroText/HeroText";
import CarouselHeader from "../../components/Carousel/Carousel";
import SlideFirst from "../../assets/img/slide2.jpg";
import SlideSecond from "../../assets/img/slide3.jpg";
import slideThird from "../../assets/img/slide4.jpg";


export function Home() {
  return (
    <div className={s.container}>
      <div className={s.heroText}>
        <HeroText
          title="Welcome to COGIP app"
          texte="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className={s.carousel}>
        <CarouselHeader 
          slideFirst={SlideFirst}
          slideSecond={SlideSecond}
          slideThird={slideThird}
          
        />
      </div>
    </div>
  );
}
