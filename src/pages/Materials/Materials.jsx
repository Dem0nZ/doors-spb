import React from 'react';
import tw, { styled } from 'twin.macro';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import componentImage001 from '../../assets/materials/components/001.jpeg';
import componentImage002 from '../../assets/materials/components/002.jpeg';
import componentImage003 from '../../assets/materials/components/003.jpeg';
import componentImage004 from '../../assets/materials/components/004.jpeg';
import componentImage005 from '../../assets/materials/components/005.jpeg';
import componentImage006 from '../../assets/materials/components/006.jpeg';
import componentImage007 from '../../assets/materials/components/007.jpeg';
import componentImage008 from '../../assets/materials/components/008.jpeg';
import { motion } from 'framer-motion';

const Materials = () => {
  return (
    <Wrapper initial={{width: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth, transition:{duration: 0.4}}}>
      <Container>
        <p className='text-5xl font-medium sm:text-3xl'>МАТЕРИАЛЫ И КОМПЛЕКТУЮЩЕ</p>
        <p className='text-xl font-light my-10'>В производстве нашей продукции мы всегда стараемся использовать
          современные и качественные материалы. Мы очень серьезно подходим к вопросу выбора поставщиков и работаем
          только с хорошо зарекомендовавшими себя на рынке партнерами.
        </p>
        <Accordion className='border-none' preExpanded={['ldsp']}>
          <AccordionItem uuid={'ldsp'}>
            <AccordionItemHeading>
              <AccordionItemButton>
                ЛДСП/МДФ
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Description>
                ЛДСП - это материал, который используют для изготовления корпусов для шкафов, для дверей-купе, а так же
                для внутреннего наполнения шкафов и гардеробных. В нашем производстве мы используем плиты ЛДСП и МДФ
                толщиной от 8 до 16мм. Нашими постоянными партнерами по поставкам ЛДСП и МДФ являются:
              </Description>
              <ul className='flex flex-col gap-4 p-6 list-disc font-extralight'>
                <li>EGGER - ведущая международная компания деревообрабатывающей отрасли. 20 заводов по всему миру,
                  включая Россию. Egger предлагает самую широкую палитру цветов и уникальных структур. А так же
                  превосходное качество, соответствующее международным стандартам.
                </li>
                <li>ШЕКСНИНСКИЙ КОМБИНАТ ДРЕВЕСНЫХ ПЛИТ выпускает широкий ассортимент древесностружечных (ДСП) и
                  древесноволокнистых плит (МДФ), облицованных меламиновыми пленками на основе термоактивных
                  полимеров, идеально подходящих для создания современной корпусной мебели, фасадов. Коллекции
                  ламинированных плит ШКДП всегда были и остаются эталоном классики мебельной отрасли России.
                </li>
                <li>ЧФМК - Череповецкий фанерно-мебельный комбинат. ЛДСП Череповецкого ФМК выпускаются под маркой
                  NORDECO design. ЧФМК предлагает большой ассортимент эксклюзивных декоров. Широкий выбор тиснений,
                  толщин. Плиты с повышенной водостойкостью.
                </li>
                <li>KASTAMONU – крупнейший в Европе производитель ламинированных древесных плит МДФ/ ХДФ. Плиты
                  EvoGloss - новый тип глянцевых и матовых панелей для современного интерьера. Помимо современного
                  дизайна, панели EvoGloss так же имеют защитный слой от УФ-лучей, легко очищаются от бытовых
                  загрязнений, устойчивы к царапинам и к выцветанию, отличаются высокой степенью глянца и зеркальным
                  эффектом. Толщина панелей колеблется от 8 до 18 мм.
                </li>
              </ul>

            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                СТЕКЛО
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Description>
                Стекло является неотъемлемой частью в производстве дверей-купе, шкафов-купе и перегородок. Огромное
                разнообразие вариантов современной обработки стекла позволяет подобрать именно тот вариант, который
                будет эффектно смотрятся в любом интерьере.
              </Description>
              <ul className='flex flex-col gap-4 p-6 list-disc font-extralight'>
                <li>Зеркала предоставляют нам безграничные возможности по реализации дизайнерских решений. Мир зеркал не
                  ограничивается только серебряными зеркалами. Кроме традиционных зеркальных полотен в качестве
                  заполнения дверей купе можно использовать матовые, цветные, а также декоративные зеркала. Очень
                  эффектно смотрится зеркало с пескоструйной обработкой. В нашем каталоге представлено более 1000
                  эскизов на любой вкус.
                </li>
                <li>Прозрачное стекло является достаточно редким вариантом применения при изготовлении раздвижных, а
                  также распашных дверей в шкафах, а также межкомнатных перегородок.
                  Межкомнатные перегородки из стекла - это интересный дизайнерский приём по делению жилого пространства
                  на зоны. Перегородки с использованием вставок из прозрачного стекла получаются невероятно легкими, они
                  как бы есть, но вроде бы их и нет.
                </li>
                <li>Тонированное стекло получают в результате нанесения на стекло декоративных ПВХ-плёнок Oracal 641
                  немецкого производителя ORAFOL Europe GmbH. Палитра пленок Oracal 641 состоит из десятков основных
                  цветов. Все материалы для изготовления плёнки экологически чистые и безопасные для здоровья.
                </li>
                <li>Матовое стекло. В отличие от обычного, матовое стекло обладает высокой устойчивостью к повреждениям
                  и загрязнениям — царапины, пыль и отпечатки пальцев на нём практически незаметны.
                </li>
                <li>
                  Стекло Лакобель. Это стекло, окрашенное с одной стороны высококачественным цветным лаком. Лак держится
                  на стекле достаточно надежно. С лицевой стороны Лакобель выглядит как цветная глянцевая поверхность, а
                  с обратной - как матовое равномерное покрытие.
                </li>
                <li>
                  Фотопечать. Двери-купе с фотопечатью способны стать украшением любого интерьера. Фотопечать - это
                  способ нанесения изображения на стекло. Фотопечать сделает стильной даже безликую мебель, придавая ей
                  изюминку и дополняя интерьер.
                </li>
              </ul>

            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                КОМПЛЕКТУЮЩЕ
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Description>
                Линейки алюминиевых систем "Росла".
              </Description>
              <ul className='flex flex-col gap-4 p-6 list-disc font-extralight'>
                <li>Профили системы «Rosla Grand» применяются в производстве раздвижных межкомнатных дверей и
                  перегородок. Оптимальный подбор толщины стенок профилей обеспечивает высокую надежность и длительные
                  сроки эксплуатации.
                </li>
                <li>Система «Rosla Extralight» класса «Эконом» предназначена для изготовления шкафов-купе. Оптимальная
                  толщина стенок профилей обеспечивает высокую надежность и длительные сроки эксплуатации.
                </li>
              </ul>
              <PhotoBlock>
                <Image src={componentImage001}/>
                <Image src={componentImage002}/>
                <Image src={componentImage003}/>
                <Image src={componentImage004}/>
                <Image src={componentImage005}/>
                <Image src={componentImage006}/>
                <Image src={componentImage007}/>
                <Image src={componentImage008}/>
              </PhotoBlock>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)(() => [
  tw`flex w-screen justify-center flex-grow`,
]);
const Container = tw.div`flex flex-col max-w-[1000px] py-20 w-full bg-white shadow-lg p-6 my-6`;
const Description = tw.p`font-light`;
const PhotoBlock = tw.div`grid grid-cols-4 gap-4 sm:grid-cols-2`;
const Image = tw.img``;


export default Materials;
