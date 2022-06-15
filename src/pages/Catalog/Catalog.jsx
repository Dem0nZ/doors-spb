import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Screen1 from './screnns/Screen_1';
import Screen2 from './screnns/Screen_2';
import Screen3 from './screnns/Screen_3';
import Screen4 from './screnns/Screen_4';
import Screen5 from './screnns/Screen_5';
import Screen6 from './screnns/Screen_6';
import tw from 'twin.macro';
import { ArrowIcon } from '../../assets';

const windowInnerWidth = document.documentElement.clientWidth < 1000 ? document.documentElement.clientWidth : 1000;

export default class Catalog extends Component {
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
            <SliderButton onClick={() => this.slider.slickGoTo(6)}>ШКАФЫ-КУПЕ ВСТРОЕННЫЕ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(5)}>ДВЕРИ-КУПЕ ДЛЯ ГАРДЕРОБНОЙ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(2)}>ДВЕРИ-КУПЕ МЕЖКОМНАТНЫЕ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(1)}>ПЕРЕГОРОДКИ МЕЖКОМНАТНЫЕ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(4)}>ШКАФЫ-КУПЕ ОТДЕЛЬНО СТОЯЩИЕ</SliderButton>
            <SliderButton onClick={() => this.slider.slickGoTo(3)}>ШКАФЫ-КУПЕ НЕСТАНДАРТНЫХ РАЗМЕРОВ</SliderButton>
          </Nav>
        </UpperBlock>
        <SliderWrapper>
          <SliderBody style={{
            width: windowInnerWidth + 'px',
          }}>
            <Slider ref={c => (this.slider = c)} {...settings}>
              <Screen1 key={1} />
              <Screen2 key={2} />
              <Screen3 key={3} />
              <Screen4 key={4} />
              <Screen5 key={5} />
              <Screen6 key={6} />
            </Slider>
            <SliderButtons>
              <SliderNawDown>
                <button className='hover:bg-gray-300 active:bg-gray-500' onClick={this.previous}>
                  <ArrowIcon/>
                </button>
                <button className='hover:bg-gray-300 active:bg-gray-500 rotate-180' onClick={this.next}>
                  <ArrowIcon/>
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
const Nav = tw.div`flex flex-wrap gap-4 mt-12`;
const SliderButton = tw.div`w-[300px] p-4 cursor-pointer hover:bg-gray-100`;
const SliderBody = tw.div`flex flex-col w-full`;
const SliderButtons = tw.div`flex justify-center w-full mt-12 sm:mt-4`;
const SliderNawDown = tw.nav`flex gap-10`;
const SliderWrapper = tw.div`flex w-full mt-10`;
