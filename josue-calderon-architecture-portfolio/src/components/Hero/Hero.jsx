import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__image-container">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Architecture" 
          className="hero__image"
        />
        <div className="hero__overlay"></div>
      </div>
      <div className="hero__content">
        <h1 className="hero__title">
          {t('hero.title')}
          <span className="hero__subtitle">{t('hero.subtitle')}</span>
        </h1>
        <p className="hero__description">
          {t('hero.description')}
        </p>
        <div className="hero__cta">
          <Link to="/portfolio" className="btn btn--primary">
            {t('hero.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 