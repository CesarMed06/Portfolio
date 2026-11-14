import { Routes, Route } from 'react-router-dom'
import { useLang } from './context/LangContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Career from './pages/Career'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Technologies from './pages/Technologies'

function App() {
    const { lang } = useLang()

    return (
        <>
            <a href="#main-content" className="skip-link">
                {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
            </a>
            <Navbar />
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trayectoria" element={<Career />} />
                    <Route path="/proyectos" element={<Projects />} />
                    <Route path="/proyectos/:slug" element={<Project />} />
                    <Route path="/tecnologias" element={<Technologies />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App
