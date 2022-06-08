import React from 'react'
import tw from 'twin.macro';

import { useNavigate } from "react-router-dom";


const CalculatorBlock = () => {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Content>
        <Title>
          РАСЧИТАТЬ СТОИМОСТЬ
        </Title>
        <Description>
        </Description>
        <Button className='hover:bg-gray-300 active:bg-gray-500' onClick={() => navigate("#")}>
          РАСЧИТАТЬ СТОИМОСТЬ
        </Button>
      </Content>

    </Wrapper>
  )
}


const Wrapper = tw.div`flex justify-end mt-32 w-full`
const Content = tw.article`flex-col`
const Title = tw.h1`flex text-5xl font-medium`
const Description = tw.div`flex text-sm`
const Button = tw.button` mt-8 py-6 px-10 text-sm border`

export default CalculatorBlock
