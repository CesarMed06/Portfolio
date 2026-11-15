import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLang } from './context/LangContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const Career = lazy(() => import('./pages/Career'))
const Projects = lazy(() => import('./pages/Projects'))
const Project = lazy(() => import('./pages/Project'))
const Technologies = lazy(() => import('./pages/Technologies'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
    const { lang } = useLang()

    return (
        <>
            <a href="#main-content" className="skip-link">
                {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
            </a>
            <Navbar />
            <ScrollToTop />
            <main id="main-content">
                <Suspense fallback={<div className="route-loading" />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/trayectoria" element={<Career />} />
                        <Route path="/proyectos" element={<Projects />} />
                        <Route path="/proyectos/:slug" element={<Project />} />
                        <Route path="/tecnologias" element={<Technologies />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </>
    )
}

export default App
