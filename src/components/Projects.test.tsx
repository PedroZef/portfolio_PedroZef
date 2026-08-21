import { render, screen } from '@testing-library/react'
import Projects from './Projects'

test('renderiza os 8 projetos com badges e links', () => {
  render(<Projects />)
  expect(screen.getByRole('heading', { name: /Meus Projetos/ })).toBeInTheDocument()
  expect(screen.getAllByRole('link', { name: /Código/ })).toHaveLength(8)
  expect(screen.getByRole('heading', { name: /organo-react/ })).toBeInTheDocument()
  expect(screen.getAllByRole('link', { name: /Demo/ })).toHaveLength(3)
  expect(screen.getAllByRole('img')).toHaveLength(17)
})

test('todos os projetos têm URL do GitHub', () => {
  render(<Projects />)
  const codeLinks = screen.getAllByRole('link', { name: /Código/ })
  codeLinks.forEach((l) => expect(l).toHaveAttribute('href', expect.stringContaining('github.com/PedroZef')))
})