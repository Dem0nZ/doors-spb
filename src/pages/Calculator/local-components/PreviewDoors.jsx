import React from 'react';
import tw, { styled } from 'twin.macro';
import profiles from '../../../mocks/calculator_data';

const Door = ({calculatorData}) => {
  console.log(calculatorData);
  return (
    <StyledFiller className='relative h-full flex-grow bg-amber-300 shadow-md' image={calculatorData?.filler?.filler?.image}>
      <StyledProfile className='top-0 bottom-0 left-0 w-2' color={calculatorData?.profiles?.hex}></StyledProfile>
      <StyledProfile className='top-0 bottom-0 right-0 w-2' color={calculatorData?.profiles?.hex}></StyledProfile>
    </StyledFiller>
  )
};

const PreviewDoors = ({ calculatorData }) => {
  const numberOfDoors = [];
    for (let i=0; i < calculatorData.numberOfDoors; i++) {
      numberOfDoors.push(<Door calculatorData={calculatorData}/>);
    };
  return (
    <ConstructorContainer>
      <div className='relative bg-green-600 w-4/5 h-80 flex'>
        <StyledProfile className='z-30 top-0 left-0 right-0 h-3' color={calculatorData?.profiles?.hex}></StyledProfile>
        {numberOfDoors}
        <StyledProfile className='z-10 bottom-0 left-0 right-0 h-2' color={calculatorData?.profiles?.hex}></StyledProfile>
      </div>
      <Summary>
        <p className='text-xl'>Харрактеристики:</p>
        <p>Размеры проема: Ш{calculatorData.width}мм x В{calculatorData.height}мм</p>
        <p>Количество дверей: {calculatorData.numberOfDoors}шт</p>
        <p>Разделители на дверях: {calculatorData.dividers.enabled ? 'да' : 'нет'}</p>
        <p className='text-3xl pt-10'>Итого: 23 325 ₽</p>
      </Summary>

    </ConstructorContainer>
  );
};


const ConstructorContainer = tw.div`col-span-3 flex flex-col flex-grow items-center pt-20 bg-gray-100 border`;
const Summary = tw.p`pt-16 flex flex-col font-extralight gap-2`;
const StyledFiller = styled.div(({ image }) => [
  tw`relative h-full flex-grow bg-gray-300 shadow-md`,
  image && `background-image: url(${image});`,
  `background-size: cover;`
]);
const StyledProfile = styled.div(({ color }) => [
  tw`absolute shadow-md bg-gray-300`,
  color && `background-color: ${color};`,
]);

export default PreviewDoors;
