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
        I have experience with Python, Java, JavaScript and modern tech stack. I am a really curious and passionate software engineer. 
        I never think there is only one solution for a problem and there is no problem without a solution 
        I love being challenged as well as overcoming challenges. Through them, I can harden my skills at the same time utilized them for the products I am working on. 
        Whether it is small or big, I put all my heart into the work. 
        Even though there is no one without mistakes, I learned from them and remind myself to do better and better. 
        My current goal in my career is to learn as much as I can and train myself to become the best Software Engineer possible.
     
        </SectionText>
        <Button onClick={() => window.location = "https://drive.google.com/file/d/10nnogRArf0pcoxyjx9qfeKFVQkYwy4Ey/view?usp=sharing"}>My Resume</Button>
      </LeftSection>
    </Section>
    
  </>
);

export default Hero;