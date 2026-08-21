import { render, screen } from '@testing-library/react'
import Hero from './Hero'

test('renderiza nome, cargo e CTAs', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Pedro Zeferino da Silva')
  expect(screen.getByText(/Desenvolvedor Front-End Junior/)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Ver projetos/ })).toHaveAttribute('href', '#projetos')
  expect(screen.getByRole('link', { name: /Fale comigo/ })).toHaveAttribute('href', '#contato')
})