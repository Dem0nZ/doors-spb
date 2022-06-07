import React from 'react';
import arrowdown from '../../../assets/icons/arrowDown.svg';
import bed from '../../../assets/icons/bed.svg';
import home from '../../../assets/icons/home.svg';
import pc from '../../../assets/icons/pc.svg';
import fabric from '../../../assets/icons/fabric.svg';
import hoot from '../../../assets/icons/hoot.svg';
import say from '../../../assets/icons/say.svg';
import tw from 'twin.macro';


const InfoBlock = (props) => {
  return (
    <InfoBlockWrapper>
      <InfoBlockTitle>
        КАК ВЫ МОЖЕТЕ ИХ ИСПОЛЬЗОВАТЬ
      </InfoBlockTitle>
      <InfoBlockBody>
        <InfoBlockRowItem>
          <InfoBlockRowImg src={arrowdown} alt='img' />
          <InfoBlockRowText>
            Собственное производство. Работаем с …….года
          </InfoBlockRowText>
        </InfoBlockRowItem>
        <InfoBlockRowItem>
          <InfoBlockRowImg src={arrowdown} alt='img' />
          <InfoBlockRowText>
            Огромный выбор материалов
          </InfoBlockRowText>
        </InfoBlockRowItem>
        <InfoBlockRowItem>
          <InfoBlockRowImg src={bed} alt='img' />
          <InfoBlockRowText>
            Выезд замерщика с образцами
          </InfoBlockRowText>
        </InfoBlockRowItem>
        <InfoBlockRowItem>
          <InfoBlockRowImg src={home} alt='img' />
          <InfoBlockRowText>
            Минимальные сроки производства
          </InfoBlockRowText>
        </InfoBlockRowItem>
        <InfoBlockRowItem>
          <InfoBlockRowImg src={pc} alt='img' />
          <InfoBlockRowText>
            Установка в день доставки
          </InfoBlockRowText>
        </InfoBlockRowItem>
        <InfoBlockRowItem>
          <InfoBlockRowImg src={fabric} alt='img' />
          <InfoBlockRowText>
            Гарантия ….. года
          </InfoBlockRowText>
        </InfoBlockRowItem>
        <InfoBlockRowItem>
          <InfoBlockRowImg src={hoot} alt='img' />
          <InfoBlockRowText>
            Место для жизни после окончания учебы.
          </InfoBlockRowText>
        </InfoBlockRowItem>
        <InfoBlockRowItem>
          <InfoBlockRowImg src={say} alt='img' />
          <InfoBlockRowText>
            Свяжитесь с нами, чтобы получить индивидуальную смету аренды для вашего региона
          </InfoBlockRowText>
        </InfoBlockRowItem>
      </InfoBlockBody>
    </InfoBlockWrapper>
  );
};

const InfoBlockWrapper = tw.div`flex flex-col h-[850px]  md:mt-[112px] lg:h-[530px]`;
const InfoBlockTitle = tw.div`flex w-[470px] h-[115px] text-5xl font-medium`;
const InfoBlockBody = tw.div`flex flex-wrap text-5xl font-medium mt-[70px] text-sm font-medium`;
const InfoBlockRowImg = tw.img`w-[60px] h-[60px] p-[10px] border-black border-2`;
const InfoBlockRowItem = tw.div`flex w-[400px] h-[60px] mb-[35px]`;
const InfoBlockRowText = tw.div`flex pl-5`;


export default InfoBlock;
