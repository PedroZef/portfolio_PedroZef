import { render, screen } from '@testing-library/react'
import Certifications from './Certifications'

test('renderiza grupos Alura e DIO com links', () => {
  render(<Certifications />)
  expect(screen.getByRole('heading', { name: /Certificações/ })).toBeInTheDocument()
  expect(screen.getByText('Alura / Oracle Next Education')).toBeInTheDocument()
  expect(screen.getByText('Digital Innovation One (DIO)')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Formação React T5/ })).toHaveAttribute('href', expect.stringContaining('github.com/PedroZef/PedroZef'))
  expect(screen.getByRole('link', { name: /Spring Data JPA com JAVA/ })).toHaveAttribute('href', expect.stringContaining('certificados/spring-data-jpa-java.jpg'))
})