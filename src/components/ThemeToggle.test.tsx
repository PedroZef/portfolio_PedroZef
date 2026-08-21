import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeToggle from './ThemeToggle'

test('renderiza botão de alternar tema', () => {
  render(<ThemeToggle />)
  expect(screen.getByRole('button', { name: /mudar para tema claro/i })).toBeInTheDocument()
})

test('alterna entre tema escuro e claro', async () => {
  const user = userEvent.setup()
  render(<ThemeToggle />)
  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('☀️')
  await user.click(button)
  expect(button).toHaveTextContent('🌙')
})
