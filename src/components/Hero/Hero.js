import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Img, LeftSection, TopSectionContainer } from './HeroStyles';


const Hero = (props) => (
  <>
    <Section row nopadding id="resume">
      <LeftSection>
        <SectionTitle main center>
          Loc Tran's Portfolio
        </SectionTitle>
        <SectionText> 
        
        Loc Tran possesses expertise in Python, Java, JavaScript, and modern tech stacks. A highly curious and passionate software engineer, he thrives on challenges, viewing them as opportunities to enhance his skills. Loc brings dedication and heart to every project, regardless of its scale. Embracing a growth mindset, he learns from mistakes, consistently aiming for improvement. Loc's current career goal is to maximize learning and evolve into the best Software Engineer possible.
     
        </SectionText>
        <Button onClick={() => window.location = "https://drive.google.com/file/d/1mXM_02yXsEo8HgEu_6LtDBwanpzuRQgq/view?usp=sharing"}>My Resume</Button>
      </LeftSection>
    </Section>
    
  </>
);

export default Hero;