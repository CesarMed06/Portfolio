import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LangProvider } from '../context/LangContext'
import Footer from './Footer'

describe('Footer', () => {
    const renderFooter = () => render(<LangProvider><MemoryRouter><Footer /></MemoryRouter></LangProvider>)

    it('renderiza sin errores', () => {
        renderFooter()
    })

    it('muestra el copyright', () => {
        renderFooter()
        expect(screen.getByText(/© 2026/)).toBeInTheDocument()
        expect(screen.getByText(/César Medina/)).toBeInTheDocument()
    })

    it('muestra los links de contacto', () => {
        renderFooter()
        expect(screen.getByText('GitHub')).toBeInTheDocument()
        expect(screen.getByText('LinkedIn')).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Email' })).toBeInTheDocument()
    })
})