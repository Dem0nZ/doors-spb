import React from 'react';
import tw, { styled } from 'twin.macro';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { profiles } from '../../../mocks/calculator_data';

const Step5 = ({ calculatorData, setCalculatorData }) => {
  const [colors, setColors] = React.useState(profiles.find(profile => profile.name === calculatorData.profiles.name).colors);
  React.useEffect(() => {
    setColors(profiles.find(profile => profile.name === calculatorData.profiles.name).colors);
  }, [calculatorData.profiles.name]);
  const colorsBlocks = colors?.map(color => <ProfileColor color={color.color}
                                                          active={color.name === calculatorData?.profiles?.color}
                                                          onClick={() => setCalculatorData({
                                                            ...calculatorData,
                                                            profiles: { ...calculatorData.profiles, color: color.name },
                                                          })} />);
  const profilesBlocks = profiles.map(profile => <Profile key={profile.name}
                                                          active={profile.name === calculatorData?.profiles?.name}
                                                          onClick={() => setCalculatorData({
                                                            ...calculatorData,
                                                            profiles: { color: '', name: profile.name },
                                                          })}><img src={profile.image}
                                                                   alt={profile.name} /> {profile.name}</Profile>);
  return (
    <AccordionItem uuid={'profiles'}>
      <AccordionItemHeading>
        <AccordionItemButton>
          ШАГ 5: ПРОФИЛЬ
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <TitleTab>
          ЦВЕТ И ТИП ПРОФИЛЯ
        </TitleTab>
        <P>
          выберете цвет профиля:
        </P>
        <Colors>
          {colorsBlocks}
        </Colors>
        <div>

        </div>
        <P>
          выберете тип профиля:
        </P>
        <Profiles>{profilesBlocks}</Profiles>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

const TitleTab = tw.h1`text-4xl font-thin`;
const P = tw.p`text-xl font-thin uppercase pt-6 text-center`;
const Colors = tw.div`flex gap-2 flex-wrap`;
const Profiles = tw.div`flex flex-wrap gap-4 justify-center`;
const Profile = styled.div(({ active }) => [
  tw`flex flex-col gap-2 p-4 w-1/5 bg-white items-center`,
  active && tw`ring ring-pink-500`,
]);
const ProfileColor = styled.div(({ active, color }) => [
  tw`flex-shrink-0 h-10 w-10 border border-gray-700 bg-gray-500`,
  `background-color: ${color};`,
  active && tw`ring ring-pink-500`,
]);


export default Step5;
