import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home', () => {
    it('renderiza sin errores', () => {
        render(<Home />)
    })

    it('muestra el h1 con el nombre', () => {
        render(<Home />)
        expect(screen.getByRole('heading', { level: 1, name: 'César' })).toBeInTheDocument()
    })

    it('muestra el subtítulo', () => {
        render(<Home />)
        expect(screen.getByText('Desarrollador Web Full Stack · DAW')).toBeInTheDocument()
    })

    it('muestra los 3 botones de acción', () => {
        render(<Home />)
        expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Contacto' })).toBeInTheDocument()
    })
})