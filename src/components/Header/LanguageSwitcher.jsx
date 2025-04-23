import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  LanguageDropdown, 
  LanguageButton, 
  DropdownContent, 
  LanguageOption 
} from './LanguageSwitcher.styles';

const languages = {
  ru: { name: 'Русский', flag: '🇷🇺' },
  en: { name: 'English', flag: '🇬🇧' }
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Закрываем дропдаун при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages[i18n.language] || languages.en;

  return (
    <LanguageDropdown ref={dropdownRef}>
      <LanguageButton onClick={toggleDropdown}>
        {currentLanguage.flag} {currentLanguage.name}
        <span style={{ fontSize: '0.8em', marginLeft: '5px' }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </LanguageButton>
      
      <DropdownContent isOpen={isOpen}>
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <LanguageOption
            key={code}
            onClick={() => changeLanguage(code)}
            className={i18n.language === code ? 'active' : ''}
          >
            {flag} {name}
          </LanguageOption>
        ))}
      </DropdownContent>
    </LanguageDropdown>
  );
};

export default LanguageSwitcher; 