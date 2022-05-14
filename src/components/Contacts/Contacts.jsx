import React from 'react'
import tw from 'twin.macro'


const Contacts = () => {
    return (
        <Wrapper>
            <BodyContainer>
                <div>
                    <h1>Наши контакты</h1>
                    <p>г. Санкт Петербург, Мурманская</p>
                    <p><a href="tel:+7 (495) 123-45-67">+7 (495) 123-45-67</a></p>
                    <p><a href="mailto:info@site.com">info@site.com</a></p>
                </div>
                <Map src='https://sbis.ru/previewer/t/378/194/fs-public/static_map_files/a25250ae-72bd-413b-a927-aaa64099d1c2'>

                </Map>

            </BodyContainer>
        </Wrapper>

    )
}

const Wrapper = tw.div`flex `
const BodyContainer = tw.div`flex justify-around items-center  w-[1000px] h-[500px] border-2 `
const Map = tw.img`flex  w-[500px] h-80 border-2 `

export default Contacts