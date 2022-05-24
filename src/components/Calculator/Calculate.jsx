import React from 'react'
import tw from 'twin.macro';

const Calculate = () => {
  return (
    <Wrapper>
      <TwoColumns>
        <div>1</div>
        <div>2</div>
      </TwoColumns>
    </Wrapper>
  )
}

const Wrapper = tw.div`flex justify-center mt-[110px] w-full`
const TwoColumns = tw.div`flex`

export default Calculate
