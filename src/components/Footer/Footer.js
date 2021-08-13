import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call <AiFillPhone size="1.5rem"/> </LinkTitle>
          <LinkItem href="tel:314-343-3432">408-826-7184</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email <AiOutlineMail size="1.5rem"/> </LinkTitle>
          <LinkItem href="mailto:leonardotran2108@gmail.com">
            leonardotran2108@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/leonardotran">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/locquangtran/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/tranquang.loc.33/">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
