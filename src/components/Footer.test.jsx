import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from './Footer'

describe('Footer', () => {
    it('renderiza sin errores', () => {
        render(<MemoryRouter><Footer /></MemoryRouter>)
    })

    it('muestra el copyright', () => {
        render(<MemoryRouter><Footer /></MemoryRouter>)
        expect(screen.getByText('© 2026 César Medina Gago')).toBeInTheDocument()
    })

    it('muestra los links de contacto', () => {
        render(<MemoryRouter><Footer /></MemoryRouter>)
        expect(screen.getByText('GitHub')).toBeInTheDocument()
        expect(screen.getByText('LinkedIn')).toBeInTheDocument()
        expect(screen.getByText('cmedgag@gmail.com')).toBeInTheDocument()
    })
})