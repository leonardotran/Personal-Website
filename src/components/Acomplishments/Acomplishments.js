import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, IconContainer } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Startup'},
  { number: 1, text: 'Internship', },
  { number: 50, text: 'Students Tutored', },
  { number: 14, text: 'Projects on Github', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`🌟 ${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>


  </Section>
);

export default Acomplishments;
