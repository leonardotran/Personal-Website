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
        
          Loc Tran has extensive experience with Python, Java, JavaScript, and a modern tech stack. He is a remarkably curious and passionate software engineer who firmly believes in the diversity of solutions for any problem, embracing challenges as opportunities for skill enhancement.

          In his approach to work, Loc thrives on being challenged and values the learning that comes with overcoming obstacles. He leverages these experiences to fortify his skills while contributing to the development of the products he's engaged with. Regardless of the project's size, Loc dedicates himself wholeheartedly to the task at hand.

          Recognizing the inevitability of mistakes, Loc views them as learning opportunities. He embraces a mindset of continuous improvement, consistently reminding himself to strive for excellence. In his current career journey, Loc is dedicated to absorbing knowledge and honing his abilities, aspiring to evolve into the best possible Software Engineer.
     
        </SectionText>
        <Button onClick={() => window.location = "https://drive.google.com/file/d/1mXM_02yXsEo8HgEu_6LtDBwanpzuRQgq/view?usp=sharing"}>My Resume</Button>
      </LeftSection>
    </Section>
    
  </>
);

export default Hero;