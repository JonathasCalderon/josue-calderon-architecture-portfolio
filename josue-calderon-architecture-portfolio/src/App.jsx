import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/main.css'

// Components
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <Router>
      <div className="app" style={{ backgroundColor: '#19211b', minHeight: '100vh' }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
                <Services />
                <Contact />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
