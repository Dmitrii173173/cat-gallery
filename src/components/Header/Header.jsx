import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  HeaderContainer,
  LeftSection,
  RightSection,
  Title,
  LightShotInfo,
  DownloadButton,
  SocialIcons,
  SocialIcon,
  LoginLink
} from './Header.styles';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <LeftSection>
        <Title>{t("header.title")}</Title>
        <LightShotInfo>
          <div>{t("header.lightshot")}</div>
          <div>{t("header.description")}</div>
        </LightShotInfo>
      </LeftSection>

      <RightSection>
        <SocialIcons>
          <SocialIcon href="#" title="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="#" title="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </SocialIcon>
        </SocialIcons>
        <LanguageSwitcher />
        <LoginLink>{t("header.login")}</LoginLink>
        <DownloadButton>{t("header.download")}</DownloadButton>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
