import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

afterEach(cleanup)

describe('portfolio', () => {
  it('presents Harold and the role he is seeking', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Python backends')
    expect(screen.getByText(/paid junior Python backend and applied AI roles/i)).toBeInTheDocument()
  })

  it('links to verified projects and a local CV', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /read the public abstract/i })).toHaveAttribute(
      'href',
      'http://elib.gstu.by/handle/220612/51534',
    )
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute(
      'href',
      '/Harold-F-B-Tate-CV.pdf',
    )
    expect(screen.getByRole('link', { name: /visit afidi/i })).toHaveAttribute(
      'href',
      'https://www.afidipro.com/fr',
    )
  })
})
