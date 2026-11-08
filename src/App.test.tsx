import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import Portfolio from './Portfolio'

afterEach(cleanup)

function renderRoute(path = '/') {
  return render(<MemoryRouter initialEntries={[path]}><Portfolio /></MemoryRouter>)
}

describe('portfolio', () => {
  it('renders the concise home route and availability', () => {
    renderRoute()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/junior python backend/i)
    expect(screen.getByText(/full-time availability/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /magic chess/i })).toHaveAttribute('href', '/work/magic-chess')
    expect(screen.getByText(/latest personal reading note/i)).toBeInTheDocument()
  })

  it('navigates between real client-side routes', () => {
    renderRoute()

    fireEvent.click(screen.getAllByRole('link', { name: 'Work' })[0])
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Work & Demo Lab')
    fireEvent.click(screen.getByRole('link', { name: /magic chess/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Magic Chess')
  })

  it('renders verified case-study evidence and preserves the CV link', () => {
    renderRoute('/work/magic-chess')

    const results = screen.getByLabelText(/verified published project results/i)
    expect(results).toHaveTextContent('94.2')
    expect(results).toHaveTextContent('60 FPS')
    expect(results).toHaveTextContent('<50 ms')
    expect(results).toHaveTextContent('±1.5 mm')
    expect(screen.getByRole('link', { name: /GSTU public thesis record/i })).toHaveAttribute('href', 'http://elib.gstu.by/handle/220612/51534')
    expect(screen.getByRole('link', { name: /^CV/i })).toHaveAttribute('href', '/Harold-F-B-Tate-CV.pdf')
  })

  it('renders project status and reusable detail routes', () => {
    renderRoute('/work')
    expect(screen.getAllByText('Shipped')).toHaveLength(2)
    expect(screen.getAllByText('Planned')).toHaveLength(2)
    expect(screen.getByText('Published thesis')).toBeInTheDocument()
    expect(screen.getByText('Archived/coursework')).toBeInTheDocument()

    cleanup()
    renderRoute('/work/afidi')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Afidi')
    expect(screen.getAllByText(/documentation pending/i).length).toBeGreaterThan(0)
  })

  it('renders notes index and dedicated note routes', () => {
    renderRoute('/notes')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/build notes/i)
    fireEvent.click(screen.getAllByRole('link', { name: /read note/i })[0])
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/sensorless board/i)
    expect(screen.getByText('Source trail')).toBeInTheDocument()
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
