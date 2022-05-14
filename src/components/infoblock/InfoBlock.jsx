import React from 'react'
import arrowdown from '../../assets/infoBlock/arrowDown.svg'
import bed from '../../assets/infoBlock/bed.svg'
import home from '../../assets/infoBlock/home.svg'
import pc from '../../assets/infoBlock/pc.svg'
import fabric from '../../assets/infoBlock/fabric.svg'
import hoot from '../../assets/infoBlock/hoot.svg'
import say from '../../assets/infoBlock/say.svg'
import tw from 'twin.macro';


const InfoBlock = (props) => {
    return (
        <InfoBlockWrapper>
            <InfoBlockTitle>
                КАК ВЫ МОЖЕТЕ <br/>
                ИХ ИСПОЛЬЗОВАТЬ
            </InfoBlockTitle>
            <InfoBlockBody>
                <InfoBlockRow>
                    <InfoBlockRowItem>
                        <InfoBlockRowImg src={arrowdown} alt="img" />
                        <InfoBlockRowText>
                        Дополнительное место для дополнительных опций
                        </InfoBlockRowText>
                    </InfoBlockRowItem>
                    <InfoBlockRowItem>
                        <InfoBlockRowImg src={arrowdown} alt="img" />
                        <InfoBlockRowText>
                        Доход от аренды для мгновенного возврата вложений
                        </InfoBlockRowText>
                    </InfoBlockRowItem>
                </InfoBlockRow>
                <InfoBlockRow>
                    <InfoBlockRowItem>
                        <InfoBlockRowImg src={bed} alt="img" />
                        <InfoBlockRowText>
                        Приглашайте друзей без лишних хлопот
                        </InfoBlockRowText>
                    </InfoBlockRowItem>
                    <InfoBlockRowItem>
                        <InfoBlockRowImg src={home} alt="img" />
                        <InfoBlockRowText>
                        Сдавайте в аренду помещения для бизнеса
                        </InfoBlockRowText>
                    </InfoBlockRowItem>

                </InfoBlockRow>
                <InfoBlockRow>
                    <InfoBlockRowItem>
                        <InfoBlockRowImg src={pc} alt="img" />
                        <InfoBlockRowText>
                        Работайте, творите или тренируйтесь дома
                        </InfoBlockRowText>
                    </InfoBlockRowItem>
                    <InfoBlockRowItem>
                        <InfoBlockRowImg src={fabric} alt="img" />
                        <InfoBlockRowText>
                        Создайте свое пространство в вашем доме.
                        </InfoBlockRowText>
                    </InfoBlockRowItem>

                </InfoBlockRow>
                <InfoBlockRow>
                    <InfoBlockRowItem>
                        <InfoBlockRowImg src={hoot} alt="img" />
                        <InfoBlockRowText>
                        Место для жизни после окончания учебы.
                        </InfoBlockRowText>
                    </InfoBlockRowItem>
                    <InfoBlockRowItem>
                        <InfoBlockRowImg src={say} alt="img" />
                        <InfoBlockRowText>
                        Свяжитесь с нами, чтобы получить индивидуальную смету аренды для вашего региона
                        </InfoBlockRowText>
                    </InfoBlockRowItem>

                </InfoBlockRow>
            </InfoBlockBody>
        </InfoBlockWrapper>
    )
}

const InfoBlockWrapper = tw.div`flex flex-col h-[850px]  md:mt-[112px] lg:h-[530px]`
const InfoBlockTitle = tw.div`flex w-[470px] h-[115px] text-5xl font-medium`
const InfoBlockBody = tw.div`flex-col h-[356px] text-5xl font-medium mt-[70px]`
const InfoBlockRow = tw.div`flex flex-col justify-between w-[400px] text-sm font-medium lg:flex-row lg:w-[800px] `
const InfoBlockRowImg = tw.img`w-[60px] h-[60px] p-[10px] border-black border-2`
const InfoBlockRowItem = tw.div`flex w-[400px] h-[60px] mb-[35px]`
const InfoBlockRowText = tw.div`flex pl-5`



export default InfoBlock