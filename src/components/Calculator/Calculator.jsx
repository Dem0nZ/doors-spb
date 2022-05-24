import React from 'react'
import tw from 'twin.macro';

const Calculator = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          РАСЧИТАТЬ СТОИМОСТЬ
        </Title>
        <Description>
          Тут разный текст Тут разный текст Тут
          разный текст Тут разный текст Тут
          разный текст Тут разный текст Тут
          разный текст Тут разный текст Тут
          разный текст Тут разный текст Тут ра
        </Description>
        <Button>
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
