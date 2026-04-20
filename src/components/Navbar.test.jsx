import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'

describe('Navbar', () => {
    it('renderiza sin errores', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>)
    })

    it('muestra el logo con el texto César', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>)
        expect(screen.getByText('César')).toBeInTheDocument()
    })

    it('muestra los 4 links de navegación', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>)
        expect(screen.getByText('Inicio')).toBeInTheDocument()
        expect(screen.getByText('Trayectoria')).toBeInTheDocument()
        expect(screen.getByText('Proyectos')).toBeInTheDocument()
        expect(screen.getByText('Tecnologías')).toBeInTheDocument()
    })

    it('el botón hamburguesa tiene aria-label correcto', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>)
        expect(screen.getByLabelText('Abrir menú')).toBeInTheDocument()
    })
})