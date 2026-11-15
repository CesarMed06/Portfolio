import { render, screen, within, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import App from './App'

const renderApp = (path = '/') => render(
    <MemoryRouter initialEntries={[path]}>
        <LangProvider>
            <App />
        </LangProvider>
    </MemoryRouter>
)

describe('App', () => {
    it('monta el footer con los enlaces de contacto', async () => {
        renderApp()
        const footer = await screen.findByRole('contentinfo')
        expect(within(footer).getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/CesarMed06')
        expect(within(footer).getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/c%C3%A9sar-medina-gago')
        expect(within(footer).getByRole('link', { name: 'Email' })).toHaveAttribute('href', 'mailto:cmedgag@gmail.com')
    })

    it('cambia de idioma desde la navbar', async () => {
        renderApp()
        await screen.findByRole('heading', { level: 1 })
        fireEvent.click(screen.getByRole('button', { name: 'Cambiar idioma' }))
        expect(await screen.findByRole('link', { name: 'Home' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument()
        expect(document.documentElement.lang).toBe('en')
    })

    it('muestra la página 404 en una ruta desconocida', async () => {
        renderApp('/esto-no-existe')
        expect(await screen.findByRole('heading', { name: 'Página no encontrada' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Volver al inicio' })).toHaveAttribute('href', '/')
        expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex')
    })

    it('vuelve arriba al cambiar de ruta', async () => {
        renderApp()
        await screen.findByRole('heading', { level: 1 })
        window.scrollTo.mockClear()
        fireEvent.click(screen.getByRole('link', { name: 'Proyectos' }))
        await waitFor(() => expect(window.scrollTo).toHaveBeenCalledWith(0, 0))
    })
})
