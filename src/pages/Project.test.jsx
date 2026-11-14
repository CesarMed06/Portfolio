import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { LangProvider } from '../context/LangContext'
import Project from './Project'

describe('Project', () => {
    const renderSlug = slug => render(
        <LangProvider>
            <MemoryRouter initialEntries={[`/proyectos/${slug}`]}>
                <Routes>
                    <Route path="/proyectos/:slug" element={<Project />} />
                </Routes>
            </MemoryRouter>
        </LangProvider>
    )

    it('muestra las secciones de la ficha', () => {
        renderSlug('scoutvision')
        expect(screen.getByRole('heading', { level: 1, name: 'ScoutVision' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'El problema' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'Resultado' })).toBeInTheDocument()
    })

    it('avisa cuando el proyecto no existe', () => {
        renderSlug('no-existe')
        expect(screen.getByText('Ese proyecto no existe.')).toBeInTheDocument()
    })
})
