import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'

test('renderiza redes, currículo e formulário mailto', () => {
  render(<Contact />)
  expect(screen.getByRole('link', { name: 'LinkedIn de Pedro' })).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
  expect(screen.getByRole('link', { name: /Currículo de Pedro/ })).toHaveAttribute('href', expect.stringContaining('onlinecurriculo.com.br'))
  const form = screen.getByRole('form', { name: /formulário de contato/i })
  expect(form).toBeInTheDocument()
})

test('formulário mailto inclui e-mail do visitante no corpo', async () => {
  const user = userEvent.setup()
  render(<Contact />)
  const email = screen.getByLabelText('E-mail')
  expect(email).toHaveAttribute('type', 'email')
  expect(email).toBeRequired()
  await user.type(screen.getByLabelText('Nome'), 'Ana')
  await user.type(email, 'ana@exemplo.com')
  await user.type(screen.getByLabelText('Mensagem'), 'Olá, quero contratar')
  const action = screen.getByRole('form', { name: /formulário de contato/i }).getAttribute('action')
  expect(action).toContain('mailto:zefpedro@hotmail.com')
  expect(action).toContain(encodeURIComponent('Ana'))
  expect(action).toContain(encodeURIComponent('ana@exemplo.com'))
  expect(action).toContain(encodeURIComponent('Olá, quero contratar'))
})
