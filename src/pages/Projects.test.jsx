import { render, screen } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import Projects from './Projects'

describe('Projects', () => {
    const renderProjects = () => render(<LangProvider><Projects /></LangProvider>)

    it('renderiza sin errores', () => {
        renderProjects()
    })

    it('muestra los 4 títulos de proyectos', () => {
        renderProjects()
        expect(screen.getByText('ScoutVision')).toBeInTheDocument()
        expect(screen.getByText('ShirtFinder')).toBeInTheDocument()
        expect(screen.getByText('GoalTasker')).toBeInTheDocument()
        expect(screen.getByText('Bikes for Refugees')).toBeInTheDocument()
    })

    it('muestra 4 botones de GitHub', () => {
        renderProjects()
        expect(screen.getAllByRole('link', { name: /GitHub/ })).toHaveLength(4)
    })
})