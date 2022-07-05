import React from 'react';
import tw from 'twin.macro';
import Slider from 'react-slick';
import { Screen0, Screen1, Screen2, Screen3, Screen4, Screen5 } from './screens';
import { ArrowIcon } from '../../assets';
import { v4 as uuidv4 } from 'uuid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as Scroll from 'react-scroll';

const Link = Scroll.Link;
const windowInnerWidth = document.documentElement.clientWidth < 1000 ? document.documentElement.clientWidth : 1000;

const buttons = [
  'ШКАФЫ-КУПЕ ВСТРОЕННЫЕ',
  'ПЕРЕГОРОДКИ МЕЖКОМНАТНЫЕ',
  'ШКАФЫ-КУПЕ ОТДЕЛЬНО СТОЯЩИЕ',
  'ДВЕРИ-КУПЕ',
  'МАНСАРДНЫЕ ШКАФЫ',
  'РАСПАШНЫЕ ШКАФЫ',
];


const Catalog = () => {
  const slider = useRef();
  const next = () => slider.current.SlickNext();
  const previous = () => slider.current.slickPrev();
  const goTo = (index) => slider.current.slickGoTo(index);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  const navButtons = buttons.map((element, index) => <SliderButton key={uuidv4()}
                                                                   onClick={() => goTo(index)}>{element}</SliderButton>);

  return (
    <Wrapper>
      <UpperBlock>
        <Title name='top-catalog'>КАТАЛОГ</Title>
        <Nav>{navButtons}</Nav>
      </UpperBlock>
      <SliderBody className='flex w-full mt-10' style={{
        width: windowInnerWidth - 48 + 'px',
      }}>
        <Slider ref={ref => (slider.current = ref)} {...settings}>
          <Screen0 />
          <Screen1 />
          <Screen2 />
          <Screen3 />
          <Screen4 />
          <Screen5 />
        </Slider>
        <SliderButtons>
          <SliderNawDown>
            <Link className='hover:bg-gray-300 active:bg-gray-500 transition-all duration-300'
                  onClick={previous} to='top-catalog' spy={true} smooth={true} offset={50} duration={500}>
              <ArrowIcon />
            </Link>
            <Link className='hover:bg-gray-300 active:bg-gray-500 rotate-180 transition-all duration-300'
                  onClick={next} to='top-catalog' spy={true} smooth={true} offset={50} duration={500}>
              <ArrowIcon />
            </Link>
          </SliderNawDown>
        </SliderButtons>
      </SliderBody>
    </Wrapper>);
};
export default Catalog;

const Wrapper = tw.div`flex flex-col justify-center w-full mt-12`;
const UpperBlock = tw.div`flex flex-col`;
const Title = tw.div`flex text-5xl font-medium sm:text-2xl sm:px-4`;
const Nav = tw.div`flex flex-wrap mt-12 px-4 gap-4`;
const SliderButton = tw.button`px-2 py-4 border cursor-pointer hover:bg-gray-300 transition-all duration-300`;
const SliderBody = tw.div`flex flex-col w-full`;
const SliderButtons = tw.div`flex justify-center w-full mt-12 sm:mt-4`;
const SliderNawDown = tw.nav`flex gap-10`;
