import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrows_left from '../../assets/slider/arrow_left.png'
import arrows_right from '../../assets/slider/arrow_right.png'
import Screen_1 from './screnns/Screen_1'
import Screen_2 from './screnns/Screen_2'
import Screen_3 from './screnns/Screen_3'
import Screen_4 from './screnns/Screen_4'
import Screen_5 from './screnns/Screen_5'
import Screen_6 from './screnns/Screen_6'

import tw from 'twin.macro'


export default class Catalogue extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
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
    }

    return (

      <CatalogueWrapper id='catalogue' >
        <CatalogueUpperBlock>
          <CatalogueTitle>
            КАТАЛОГ
          </CatalogueTitle>
          <CatalogueBody>
            <CatalogueNav>
              <CatalogueBodyRow>
                <CatalogueSliderBtn onClick={() => this.slider.slickGoTo(6)}>ШКАФЫ-КУПЕ ВСТРОЕННЫЕ</CatalogueSliderBtn>
                <CatalogueSliderBtn onClick={() => this.slider.slickGoTo(5)}>ДВЕРИ-КУПЕ ДЛЯ ГАРДЕРОБНОЙ</CatalogueSliderBtn>
                <CatalogueSliderBtn onClick={() => this.slider.slickGoTo(2)}>ДВЕРИ-КУПЕ МЕЖКОМНАТНЫЕ</CatalogueSliderBtn>
                <CatalogueSliderBtn onClick={() => this.slider.slickGoTo(1)}>ПЕРЕГОРОДКИ МЕЖКОМНАТНЫЕ</CatalogueSliderBtn>
                <CatalogueSliderBtn onClick={() => this.slider.slickGoTo(4)}>ШКАФЫ-КУПЕ ОТДЕЛЬНО СТОЯЩИЕ</CatalogueSliderBtn>
                <CatalogueSliderBtn onClick={() => this.slider.slickGoTo(3)}>ШКАФЫ-КУПЕ НЕСТАНДАРТНЫХ РАЗМЕРОВ</CatalogueSliderBtn>

              </CatalogueBodyRow>
            </CatalogueNav  >
          </CatalogueBody>
          <CatalogueBtn>
            РАСЧИТАТЬ СТОИМОСТЬ
          </CatalogueBtn>
        </CatalogueUpperBlock>

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

                <button onClick={this.previous}>
                  <img src={arrows_left} alt='img' />

                </button>

                <button onClick={this.next}>
                  <img src={arrows_right} alt='img' />

                </button>
              </SliderNawDown>

            </SliderButtons>
          </SliderBody>
        </SliderWrapper>

      </CatalogueWrapper>
    )
  }
}

const CatalogueWrapper = tw.div`flex flex-col justify-center w-full mt-[40px]`
const CatalogueUpperBlock = tw.div`flex flex-col`
const CatalogueTitle = tw.div`flex text-6xl font-medium`
const CatalogueBody = tw.div`flex flex-col  mt-[70px]  text-base `
const CatalogueBodyRow = tw.div`flex flex-row flex-wrap gap-4 pr-2 mb-[26px]`
const CatalogueBtn = tw.button`w-[400px] h-[60px] border`
const CatalogueSliderBtn = tw.div`w-[300px] h-[60px] cursor-pointer`
const CatalogueNav = tw.nav`flex flex-col`
const SliderBody = tw.div`flex flex-col w-full`
const SliderSeparator = tw.div`flex w-full h-px bg-black`
const SliderButtons = tw.div`flex justify-center w-full mt-16`
const SliderNawDown = tw.nav`flex justify-between w-44`


const SliderWrapper = tw.div`flex w-full mt-36`
