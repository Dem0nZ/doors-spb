import React from 'react'
import tw from 'twin.macro';

import { useNavigate } from "react-router-dom";


const Calculator = () => {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Content>
        <Title>
          РАСЧИТАТЬ СТОИМОСТЬ
        </Title>
        <Description>
        </Description>
        <Button onClick={() => navigate("/calculate", { replace: true })}>
          РАСЧИТАТЬ СТОИМОСТЬ
        </Button>
      </Content>

    </Wrapper>
  )
}

const Wrapper = tw.div`flex justify-center mt-[110px] w-full`
const Content = tw.article`flex-col`
const Title = tw.h1`flex text-5xl font-medium`
const Description = tw.div`flex w-[550px] text-sm`
const Button = tw.button` mt-[30px] w-[400px] h-[60px] text-sm border`

export default Calculator
