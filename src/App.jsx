import { Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import Career from './pages/Career'
import Projects from './pages/Projects'
import Technologies from './pages/Technologies'

function App() {
    return (
        <LangProvider>
            <Cursor />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trayectoria" element={<Career />} />
                    <Route path="/proyectos" element={<Projects />} />
                    <Route path="/tecnologias" element={<Technologies />} />
                </Routes>
            </main>
        </LangProvider>
    )
}

export default App
