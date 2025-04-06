import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageToggle from '../Icons/LanguageToggle'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <a href="/" className="navbar__logo">
          {t('navbar.logo')}
        </a>
        
        <div className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}>
          <a href="#portfolio" className="navbar__link">{t('navbar.portfolio')}</a>
          <a href="#services" className="navbar__link">{t('navbar.services')}</a>
          <a href="#contact" className="navbar__link">{t('navbar.contact')}</a>
          <button onClick={toggleLanguage} className="navbar__language" aria-label={t('navbar.language')}>
            <LanguageToggle />
          </button>
        </div>
        
        <button 
          className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'navbar__mobile-toggle--open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar 