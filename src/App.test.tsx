import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

afterEach(cleanup)

function renderRoute(path = '/') {
  return render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>)
}

describe('portfolio', () => {
  it('renders the concise home route and availability', () => {
    renderRoute()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/backend logic/i)
    expect(screen.getByText(/paid junior Python backend and applied AI roles/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /read the case study/i })).toHaveAttribute('href', '/work/magic-chess')
  })

  it('navigates between real client-side routes', () => {
    renderRoute()

    fireEvent.click(screen.getAllByRole('link', { name: 'Work' })[0])
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Selected work')
    fireEvent.click(screen.getByRole('link', { name: /open dossier/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Magic Chess')
  })

  it('renders verified case-study evidence and preserves the CV link', () => {
    renderRoute('/work/magic-chess')

    const results = screen.getByLabelText(/verified published project results/i)
    expect(results).toHaveTextContent('94.2')
    expect(results).toHaveTextContent('60 FPS')
    expect(results).toHaveTextContent('<50 ms')
    expect(results).toHaveTextContent('±1.5 mm')
    expect(screen.getByRole('link', { name: /GSTU thesis record/i })).toHaveAttribute('href', 'http://elib.gstu.by/handle/220612/51534')
    expect(screen.getByRole('link', { name: /^CV/i })).toHaveAttribute('href', '/Harold-F-B-Tate-CV.pdf')
  })

  it('falls back to a labelled placeholder when project media fails', () => {
    renderRoute('/work/magic-chess')

    fireEvent.error(screen.getByAltText(/physical prototype/i))
    expect(screen.getByRole('status')).toHaveTextContent(/media unavailable/i)
    expect(screen.getAllByText('Media pending')).toHaveLength(4)
  })

  it('renders a route-level 404', () => {
    renderRoute('/missing-page')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/outside the dossier/i)
  })
})
