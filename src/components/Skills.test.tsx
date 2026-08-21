import { render, screen } from '@testing-library/react'
import Skills from './Skills'

test('renderiza 4 grupos com badges de tecnologias', () => {
  render(<Skills />)
  expect(screen.getByRole('heading', { name: /Skills/ })).toBeInTheDocument()
  expect(screen.getByText(/IA & Inovação/)).toBeInTheDocument()
  expect(screen.getByText(/Front-End & Mobile/)).toBeInTheDocument()
  expect(screen.getByText(/Back-End & Bancos de Dados/)).toBeInTheDocument()
  expect(screen.getByText(/Cloud, DevOps & Ferramentas/)).toBeInTheDocument()
  expect(screen.getByAltText('React.js')).toBeInTheDocument()
})