import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language === 'en' ? 'English' : 'Español';
  
  return (
    <div className="language-toggle">
      <LanguageIcon className="language-toggle__icon" />
      <span className="language-toggle__text">{currentLanguage}</span>
    </div>
  );
};

export default LanguageToggle; 