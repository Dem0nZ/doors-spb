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
        <Button onClick={() => navigate("#")}>
          РАСЧИТАТЬ СТОИМОСТЬ
        </Button>
      </Content>

    </Wrapper>
  )
}


const Wrapper = tw.div`flex justify-end mt-20 w-full sm:justify-center`
const Content = tw.article`flex-col sm:flex-row`
const Title = tw.h1`flex text-3xl font-medium sm:px-2 sm:hidden`
const Button = tw.button` mt-8 py-4 px-6 text-sm border hover:bg-gray-300 active:bg-gray-500 w-full sm:text-transparent sm:text-2xl sm:font-bold sm:bg-clip-text sm:bg-gradient-to-r sm:from-purple-400 sm:to-pink-600 transition-all duration-300`

export default CalculatorBlock
