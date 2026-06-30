import { render, screen } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import Projects from './Projects'

describe('Projects', () => {
    const renderProjects = () => render(<LangProvider><Projects /></LangProvider>)

    it('renderiza sin errores', () => {
        renderProjects()
    })

    it('muestra los 3 títulos de proyectos', () => {
        renderProjects()
        expect(screen.getByText('ShirtFinder')).toBeInTheDocument()
        expect(screen.getByText('GoalTasker')).toBeInTheDocument()
        expect(screen.getByText('Bikes for Refugees')).toBeInTheDocument()
    })

    it('muestra 3 botones de GitHub', () => {
        renderProjects()
        expect(screen.getAllByRole('link', { name: /GitHub/ })).toHaveLength(3)
    })
})