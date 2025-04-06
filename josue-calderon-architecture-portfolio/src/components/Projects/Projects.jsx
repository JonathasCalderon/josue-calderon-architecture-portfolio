import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('portfolio.projects.modernResidence'),
      category: t('portfolio.categories.residential'),
      status: t('portfolio.status.complete'),
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: t('portfolio.projects.urbanOffice'),
      category: t('portfolio.categories.commercial'),
      status: t('portfolio.status.inProgress'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: t('portfolio.projects.lakesideVilla'),
      category: t('portfolio.categories.residential'),
      status: t('portfolio.status.complete'),
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      title: t('portfolio.projects.culturalCenter'),
      category: t('portfolio.categories.public'),
      status: t('portfolio.status.upcoming'),
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <section className="projects">
      <div className="projects__container">
        <h2 className="projects__title">{t('portfolio.title')}</h2>
        <p className="projects__subtitle">{t('portfolio.subtitle')}</p>
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="projects__item">
              <div className="projects__image-container">
                <img src={project.image} alt={project.title} className="projects__image" />
                <div className="projects__overlay">
                  <button className="projects__button">{t('portfolio.viewProject')}</button>
                </div>
              </div>
              <div className="projects__info">
                <h3 className="projects__item-title">{project.title}</h3>
                <div className="projects__meta">
                  <span className="projects__category">{project.category}</span>
                  <span className="projects__dot">•</span>
                  <span className="projects__status">{project.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 