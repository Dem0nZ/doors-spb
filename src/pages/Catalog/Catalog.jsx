import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrows_left from '../../assets/slider/arrow_left.png';
import Screen_1 from './screnns/Screen_1';
import Screen_2 from './screnns/Screen_2';
import Screen_3 from './screnns/Screen_3';
import Screen_4 from './screnns/Screen_4';
import Screen_5 from './screnns/Screen_5';
import Screen_6 from './screnns/Screen_6';
import tw from 'twin.macro';

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
      dots: false, infinite: true, arrows: false, speed: 500, slidesToShow: 1, slidesToScroll: 1,
    };

    return (<Wrapper id='catalogue'>
      <UpperBlock>
        <Title>
          КАТАЛОГ
        </Title>
        <Body>
          <Nav>
            <BodyRow>
              <SliderButton onClick={() => this.slider.slickGoTo(6)}>ШКАФЫ-КУПЕ ВСТРОЕННЫЕ</SliderButton>
              <SliderButton onClick={() => this.slider.slickGoTo(5)}>ДВЕРИ-КУПЕ ДЛЯ
                ГАРДЕРОБНОЙ</SliderButton>
              <SliderButton onClick={() => this.slider.slickGoTo(2)}>ДВЕРИ-КУПЕ
                МЕЖКОМНАТНЫЕ</SliderButton>
              <SliderButton onClick={() => this.slider.slickGoTo(1)}>ПЕРЕГОРОДКИ
                МЕЖКОМНАТНЫЕ</SliderButton>
              <SliderButton onClick={() => this.slider.slickGoTo(4)}>ШКАФЫ-КУПЕ ОТДЕЛЬНО
                СТОЯЩИЕ</SliderButton>
              <SliderButton onClick={() => this.slider.slickGoTo(3)}>ШКАФЫ-КУПЕ НЕСТАНДАРТНЫХ
                РАЗМЕРОВ</SliderButton>
            </BodyRow>
          </Nav>
        </Body>
      </UpperBlock>
      <SliderWrapper>
        <SliderBody>
          <SliderSeparator />
          <Slider ref={c => (this.slider = c)} {...settings}>
            <Screen_1 key={1} />
            <Screen_2 key={2} />
            <Screen_3 key={3} />
            <Screen_4 key={4} />
            <Screen_5 key={5} />
            <Screen_6 key={6} />
          </Slider>
          <SliderSeparator />
          <SliderButtons>
            <SliderNawDown>
              <button className='hover:bg-gray-300 active:bg-gray-500' onClick={this.previous}>
                <img src={arrows_left} alt='img' />
              </button>
              <button className='hover:bg-gray-300 active:bg-gray-500 rotate-180' onClick={this.next}>
                <img src={arrows_left} alt='img' />
              </button>
            </SliderNawDown>
          </SliderButtons>
        </SliderBody>
      </SliderWrapper>
    </Wrapper>);
  }
}

const Wrapper = tw.div`flex flex-col justify-center w-full mt-[40px]`;
const UpperBlock = tw.div`flex flex-col`;
const Title = tw.div`flex text-5xl font-medium`;
const Body = tw.div`flex flex-col mt-16  text-base `;
const BodyRow = tw.div`flex flex-row flex-wrap gap-4 pr-2 mb-[26px]`;
const SliderButton = tw.div`w-[300px] p-4 cursor-pointer hover:bg-gray-100`;
const Nav = tw.nav`flex flex-col`;
const SliderBody = tw.div`flex flex-col w-full`;
const SliderSeparator = tw.div`flex w-full h-px bg-black`;
const SliderButtons = tw.div`flex justify-center w-full mt-16`;
const SliderNawDown = tw.nav`flex justify-between w-44`;


const SliderWrapper = tw.div`flex w-full mt-10`;
