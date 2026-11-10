import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LangProvider } from '../context/LangContext'
import Home from './Home'

describe('Home', () => {
    const renderHome = () => render(<LangProvider><MemoryRouter><Home /></MemoryRouter></LangProvider>)

    it('renderiza sin errores', () => {
        renderHome()
    })

    it('muestra el h1 con el nombre', () => {
        renderHome()
        expect(screen.getByRole('heading', { level: 1, name: 'César' })).toBeInTheDocument()
    })

    it('muestra los 3 botones de acción', () => {
        renderHome()
        expect(screen.getByRole('link', { name: 'Ver proyectos' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    })
})