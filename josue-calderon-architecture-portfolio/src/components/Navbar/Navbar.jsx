import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <a href="/" className="navbar__logo">
          Your Name
        </a>
        
        <div className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}>
          <a href="#portfolio" className="navbar__link">Portfolio</a>
          <a href="#services" className="navbar__link">Services</a>
          <a href="#contact" className="navbar__link">Contact</a>
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