import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Img, LeftSection, TopSectionContainer } from './HeroStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Loc Tran's Portfolio
        </SectionTitle>
        <SectionText> 
        Full "Snack" Developer with hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages. 
      Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack Developer.     
        </SectionText>
        <Button onClick={() => window.location = "https://www.linkedin.com/in/locquangtran/"}>My Resume</Button>
      </LeftSection>
    </Section>
    
  </>
);

export default Hero;