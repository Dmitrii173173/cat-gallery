import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FooterContainer,
  FooterLinks,
  FooterLink,
  Copyright
} from './Footer.styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink>{t('footer.download')}</FooterLink>
        <FooterLink>{t('footer.videoTour')}</FooterLink>
        <FooterLink>{t('footer.privacy')}</FooterLink>
        <FooterLink>{t('footer.help')}</FooterLink>
        <FooterLink>{t('footer.ads')}</FooterLink>
        <FooterLink>Skillbrains</FooterLink>
        <Copyright>{t('footer.copyright')}</Copyright>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
