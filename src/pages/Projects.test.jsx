import { render, screen } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import Projects from './Projects'

describe('Projects', () => {
    const renderProjects = () => render(<LangProvider><Projects /></LangProvider>)

    it('renderiza sin errores', () => {
        renderProjects()
    })

    it('muestra los 7 títulos de proyectos', () => {
        renderProjects()
        expect(screen.getByRole('heading', { name: 'ScoutVision' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'Village Diplomacy' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'SailTrim' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'NerveLink' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'ShirtFinder' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'GoalTasker' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'Bikes for Refugees' })).toBeInTheDocument()
    })

    it('muestra 7 botones de GitHub', () => {
        renderProjects()
        expect(screen.getAllByRole('link', { name: /GitHub/ })).toHaveLength(7)
    })
})