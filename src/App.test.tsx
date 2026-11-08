import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

afterEach(cleanup)

describe('portfolio', () => {
  it('presents Harold and the role he is seeking', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('signal')
    expect(screen.getByText(/paid junior Python backend and applied AI roles/i)).toBeInTheDocument()
  })

  it('links to verified evidence, public projects, and a local CV', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /GSTU thesis record/i })).toHaveAttribute(
      'href',
      'http://elib.gstu.by/handle/220612/51534',
    )
    expect(screen.getAllByRole('link', { name: /download cv/i })[0]).toHaveAttribute(
      'href',
      '/Harold-F-B-Tate-CV.pdf',
    )
    expect(screen.getAllByRole('link', { name: /inspect live project/i })[0]).toHaveAttribute(
      'href',
      'https://www.afidipro.com/fr',
    )
  })

  it('shows the four verified Magic Chess results and upload-ready media slots', () => {
    render(<App />)

    const results = screen.getByLabelText(/verified published project results/i)
    expect(results).toHaveTextContent('94.2')
    expect(results).toHaveTextContent('60 FPS')
    expect(results).toHaveTextContent('<50 ms')
    expect(results).toHaveTextContent('±1.5 mm')
    expect(screen.getAllByText(/awaiting field documentation/i)).toHaveLength(4)
  })
})
