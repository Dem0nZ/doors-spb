
import React from 'react'
import tw from 'twin.macro';


const Calculator = (props) => {
    return (
        <CalculatorWrapper>
            <CalculatorBody>
            <CalculatorTitle>
                РАСЧИТАТЬ СТОИМОСТЬ
            </CalculatorTitle>
            <CalculatorDescription>
                Тут разный текст Тут разный текст Тут
                разный текст Тут разный текст Тут
                разный текст Тут разный текст Тут
                разный текст Тут разный текст Тут
                разный текст Тут разный текст Тут ра
            </CalculatorDescription>
            <CalculatorBtnCalc>
            РАСЧИТАТЬ СТОИМОСТЬ
            </CalculatorBtnCalc>
    
            </CalculatorBody>
            
        </CalculatorWrapper>
    )
}

const CalculatorWrapper = tw.div`flex justify-center mt-[110px] w-full`
const CalculatorBody = tw.div`flex-col`
const CalculatorTitle = tw.div`flex text-5xl font-medium`
const CalculatorDescription = tw.div`flex w-[550px] text-sm`
const CalculatorBtnCalc = tw.button` mt-[30px] w-[400px] h-[60px] text-sm border`

export default Calculator