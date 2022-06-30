import React from 'react';
import tw from 'twin.macro';
import Slider from 'react-slick';
import { Screen0, Screen1, Screen2, Screen3, Screen4, Screen5 } from './screens';
import { ArrowIcon } from '../../assets';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as Scroll from 'react-scroll';

const Link = Scroll.Link;
const windowInnerWidth = document.documentElement.clientWidth < 1000 ? document.documentElement.clientWidth : 1000;

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };

    return (
      <Wrapper>
        <UpperBlock>
          <Title name='top-catalog'>КАТАЛОГ</Title>
          <Nav>
            <SliderButton onClick={() => this.slider.slickGoTo(0)}>ШКАФЫ-КУПЕ ВСТРОЕННЫЕ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(1)}>ПЕРЕГОРОДКИ МЕЖКОМНАТНЫЕ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(2)}>ШКАФЫ-КУПЕ ОТДЕЛЬНО СТОЯЩИЕ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(3)}>ДВЕРИ-КУПЕ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(4)}>МАНСАРДНЫЕ ШКАФЫ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(5)}>РАСПАШНЫЕ ШКАФЫ</SliderButton>
          </Nav>
        </UpperBlock>
        <SliderBody className='flex w-full mt-10' style={{
          width: windowInnerWidth - 48 + 'px',
        }}>
          <Slider ref={c => (this.slider = c)} {...settings}>
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
                      onClick={this.previous} to='top-catalog' spy={true} smooth={true} offset={50} duration={500}>
                <ArrowIcon />
              </Link>
              <Link className='hover:bg-gray-300 active:bg-gray-500 rotate-180 transition-all duration-300'
                      onClick={this.next} to='top-catalog' spy={true} smooth={true} offset={50} duration={500}>
                <ArrowIcon />
              </Link>
            </SliderNawDown>
          </SliderButtons>
        </SliderBody>
      </Wrapper>);
  }
}

const Wrapper = tw.div`flex flex-col justify-center w-full mt-12`;
const UpperBlock = tw.div`flex flex-col`;
const Title = tw.div`flex text-5xl font-medium sm:text-2xl sm:px-4`;
const Nav = tw.div`flex flex-wrap mt-12 px-4 gap-4`;
const SliderButton = tw.button`px-2 py-4 border cursor-pointer hover:bg-gray-300 transition-all duration-300`;
const SliderBody = tw.div`flex flex-col w-full`;
const SliderButtons = tw.div`flex justify-center w-full mt-12 sm:mt-4`;
const SliderNawDown = tw.nav`flex gap-10`;
