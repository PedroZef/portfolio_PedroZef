import { render, screen } from "@testing-library/react";
import App from "./App";

test("monta todas as seções do portfólio", () => {
  render(<App />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getByRole("main")).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Pedro Zeferino da Silva" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /Meus Projetos/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /Skills & Tecnologias/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /Minhas Certificações/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /Fale Comigo/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});
