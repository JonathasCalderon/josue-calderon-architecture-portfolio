import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      id: 1,
      title: t('services.architecturalDesign.title'),
      description: t('services.architecturalDesign.description'),
      icon: '🏛️',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      title: t('services.bimModeling.title'),
      description: t('services.bimModeling.description'),
      icon: '📐',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80'
    },
    {
      id: 3,
      title: t('services.rendering3d.title'),
      description: t('services.rendering3d.description'),
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2100&q=80'
    },
    {
      id: 4,
      title: t('services.interiorDesign.title'),
      description: t('services.interiorDesign.description'),
      icon: '🪑',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80'
    },
    {
      id: 5,
      title: t('services.furnitureDesign.title'),
      description: t('services.furnitureDesign.description'),
      icon: '🛋️',
      image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 6,
      title: t('services.modeling3d.title'),
      description: t('services.modeling3d.description'),
      icon: '🎮',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80'
    },
    {
      id: 7,
      title: t('services.constructionSupervision.title'),
      description: t('services.constructionSupervision.description'),
      icon: '🏗️',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <section className="services">
      <div className="services__container">
        <h2 className="services__title">{t('services.title')}</h2>
        <p className="services__subtitle">{t('services.subtitle')}</p>
        
        <div className="services__scroll-container">
          <button 
            className="services__scroll-button services__scroll-button--left" 
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <span>←</span>
          </button>
          
          <div className="services__scroll-wrapper" ref={scrollContainerRef}>
            {services.map((service) => (
              <div key={service.id} className="services__item">
                <div className="services__image-container">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="services__image"
                  />
                  <div className="services__overlay">
                    <div className="services__icon">{service.icon}</div>
                  </div>
                </div>
                <div className="services__info">
                  <h3 className="services__item-title">{service.title}</h3>
                  <p className="services__description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="services__scroll-button services__scroll-button--right" 
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 