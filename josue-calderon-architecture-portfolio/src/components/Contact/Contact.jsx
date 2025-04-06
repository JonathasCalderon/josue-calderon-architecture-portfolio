import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__info">
            <h2 className="contact__title">{t('contact.title')}</h2>
            <p className="contact__subtitle">{t('contact.subtitle')}</p>
            
            <div className="contact__details">
              <div className="contact__detail-item">
                <h3 className="contact__detail-label">{t('contact.address')}</h3>
                <p className="contact__detail-value">Cochabamba, Bolivia</p>
              </div>
              
              <div className="contact__detail-item">
                <h3 className="contact__detail-label">{t('contact.phone')}</h3>
                <p className="contact__detail-value">+591 (7)643-1056</p>
              </div>
              
              <div className="contact__detail-item">
                <h3 className="contact__detail-label">{t('contact.email')}</h3>
                <p className="contact__detail-value">josue.calderon.arq@gmail.com</p>
              </div>
            </div>
          </div>
          
          <form className="contact__form">
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__form-label">{t('contact.name')}</label>
              <input 
                type="text" 
                id="name" 
                className="contact__form-input" 
                placeholder={t('contact.name')}
              />
            </div>
            
            <div className="contact__form-group">
              <label htmlFor="email" className="contact__form-label">{t('contact.email')}</label>
              <input 
                type="email" 
                id="email" 
                className="contact__form-input" 
                placeholder={t('contact.email')}
              />
            </div>
            
            <div className="contact__form-group">
              <label htmlFor="message" className="contact__form-label">{t('contact.message')}</label>
              <textarea 
                id="message" 
                className="contact__form-textarea" 
                placeholder={t('contact.message')}
              ></textarea>
            </div>
            
            <button type="submit" className="contact__form-button">
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 