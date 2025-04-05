import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <h1 className="hero__title">Architecture & Design</h1>
        <p className="hero__subtitle">Creating spaces that inspire and endure</p>
        <a href="#portfolio" className="btn hero__cta">View Our Work</a>
      </div>
    </section>
  )
}

export default Hero 