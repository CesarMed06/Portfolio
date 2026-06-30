import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LangProvider } from '../context/LangContext'
import Navbar from './Navbar'

describe('Navbar', () => {
    const renderNavbar = () => render(<LangProvider><MemoryRouter><Navbar /></MemoryRouter></LangProvider>)

    it('renderiza sin errores', () => {
        renderNavbar()
    })

    it('muestra el logo con el texto César', () => {
        renderNavbar()
        expect(screen.getByText('César')).toBeInTheDocument()
    })

    it('muestra los 4 links de navegación', () => {
        renderNavbar()
        expect(screen.getByText('Inicio')).toBeInTheDocument()
        expect(screen.getByText('Trayectoria')).toBeInTheDocument()
        expect(screen.getByText('Proyectos')).toBeInTheDocument()
        expect(screen.getByText('Tecnologías')).toBeInTheDocument()
    })

    it('el botón hamburguesa tiene aria-label correcto', () => {
        renderNavbar()
        expect(screen.getByLabelText('Abrir menú')).toBeInTheDocument()
    })
})