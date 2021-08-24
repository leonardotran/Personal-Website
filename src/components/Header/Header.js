import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import Button from '../../styles/GlobalComponents/Button';
import { Img, TopSectionContainer } from '../Hero/HeroStyles';


const Header = () =>  (
  <TopSectionContainer>
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <Img src ='/favicon.png' width={55} height={55} /> <span>My-Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/leonardotran">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/locquangtran/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/tranquang.loc.33/">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
    <Img src="./images/profile1.png" alt="profile" />
</TopSectionContainer>
        
);

export default Header;
