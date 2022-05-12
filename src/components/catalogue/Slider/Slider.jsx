import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tw from 'twin.macro';
import Screen_1 from '../screnns/Screen_1';
import Screen_2 from '../screnns/Screen_2';
import Screen_3 from '../screnns/Screen_3';
import Screen_4 from '../screnns/Screen_4';


export default class SliderCatalogue extends Component {
    render() {
        const settings = {
            dots: false,
            infinitie: true,
            speed: 500,
            slidesToShow: 1,
            slidersToScroll: 1
        }
        return (
            <div>
                <Wrapper>

                    <Slider{...settings}>

                       <Screen_1/>
                       <Screen_2/>
                       <Screen_3/>
                       <Screen_4/>

                    </Slider>

                </Wrapper>
            </div>

        )
    }
}

const Wrapper = tw.div`  justify-center `
const Test = tw.div`w-48 h-48 bg-black`
const Test2 = tw.div`w-48 h-48 bg-red-500`
const Test3 = tw.div`w-48 h-48 bg-gray-500`
const Test4 = tw.div`w-48 h-48 bg-red-400`
