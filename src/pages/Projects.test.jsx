import { render, screen } from '@testing-library/react'
import Projects from './Projects'

describe('Projects', () => {
    it('renderiza sin errores', () => {
        render(<Projects />)
    })

    it('muestra los 3 títulos de proyectos', () => {
        render(<Projects />)
        expect(screen.getByText('ShirtFinder')).toBeInTheDocument()
        expect(screen.getByText('GoalTasker')).toBeInTheDocument()
        expect(screen.getByText('Bikes for Refugees')).toBeInTheDocument()
    })

    it('muestra 3 botones de GitHub', () => {
        render(<Projects />)
        expect(screen.getAllByRole('link', { name: 'GitHub' })).toHaveLength(3)
    })

    it('muestra solo 1 botón de Ver demo', () => {
        render(<Projects />)
        expect(screen.getAllByRole('link', { name: 'Ver demo' })).toHaveLength(1)
    })
})