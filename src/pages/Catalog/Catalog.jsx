import React from 'react';
import tw from 'twin.macro';
import Slider from 'react-slick';
import { Screen0, Screen1, Screen2, Screen3, Screen4 } from './screens';
import { ArrowIcon } from '../../assets';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
          <Title>КАТАЛОГ</Title>
          <Nav>
            <SliderButton onClick={() => this.slider.slickGoTo(0)}>ШКАФЫ-КУПЕ ВСТРОЕННЫЕ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(1)}>ПЕРЕГОРОДКИ МЕЖКОМНАТНЫЕ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(2)}>ШКАФЫ-КУПЕ ОТДЕЛЬНО СТОЯЩИЕ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(3)}>ДВЕРИ-КУПЕ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(4)}>МАНСАРДНЫЕ ШКАФЫ</SliderButton>
          </Nav>
        </UpperBlock>
        <SliderWrapper>
          <SliderBody style={{
            width: windowInnerWidth + 'px',
          }}>
            <Slider ref={c => (this.slider = c)} {...settings}>
              <Screen0 />
              <Screen1 />
              <Screen2 />
              <Screen3 />
              <Screen4 />
            </Slider>
            <SliderButtons>
              <SliderNawDown>
                <button className='hover:bg-gray-300 active:bg-gray-500' onClick={this.previous}>
                  <ArrowIcon />
                </button>
                <button className='hover:bg-gray-300 active:bg-gray-500 rotate-180' onClick={this.next}>
                  <ArrowIcon />
                </button>
              </SliderNawDown>
            </SliderButtons>
          </SliderBody>
        </SliderWrapper>
      </Wrapper>);
  }
}

const Wrapper = tw.div`flex flex-col justify-center w-full mt-12`;
const UpperBlock = tw.div`flex flex-col`;
const Title = tw.div`flex text-5xl font-medium sm:text-3xl sm:px-4`;
const Nav = tw.div`flex flex-wrap justify-between mt-12 px-4 gap-y-4`;
const SliderButton = tw.button`px-2 py-4 border cursor-pointer hover:bg-gray-300`;
const SliderBody = tw.div`flex flex-col w-full`;
const SliderButtons = tw.div`flex justify-center w-full mt-12 sm:mt-4`;
const SliderNawDown = tw.nav`flex gap-10`;
const SliderWrapper = tw.div`flex w-full mt-10`;
