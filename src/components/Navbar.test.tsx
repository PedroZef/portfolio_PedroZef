import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

test('renderiza links de navegação', () => {
  render(<Navbar />)
  expect(screen.getByRole('link', { name: 'Projetos' })).toHaveAttribute('href', '#projetos')
  expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills')
  expect(screen.getByRole('link', { name: 'Certificações' })).toHaveAttribute('href', '#certificacoes')
  expect(screen.getByRole('link', { name: 'Contato' })).toHaveAttribute('href', '#contato')
})