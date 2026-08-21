# AGENTS.md

## Projeto

Site de portfólio pessoal com React 19 + Vite 8 + TypeScript para Pedro Zeferino da Silva. Deploy na Vercel a partir da subpasta `portfolio/` do repositório `PedroZef/portfolio_PedroZef`.

## Comandos

```bash
npm run dev        # Dev server do Vite → localhost:5173
npm test           # vitest run (execução única, 9 testes em 7 arquivos)
npm run test:watch # vitest em modo watch
npm run build      # tsc -b && vite build → dist/
npm run lint       # oxlint (não usa eslint)
```

Ordem do build importa: `npm run build` executa `tsc -b` primeiro, depois `vite build`.

## Linter

Usa **oxlint** (não ESLint). Config em `.oxlintrc.json`. Plugins: react, typescript, oxc. Regras principais:

- `react/rules-of-hooks`: error
- `react/only-export-components`: warn

## Testes

- **Vitest** com ambiente jsdom + React Testing Library
- Arquivo de setup: `src/test/setup.ts` — importa `@testing-library/jest-dom/vitest`
- Globals habilitados (`vitest/globals`) — não precisa importar `describe`/`it`/`expect` nos arquivos de teste
- Testes co-localizados: `*.test.tsx` ao lado dos componentes em `src/components/`
- Testes escritos em português

## Arquitetura

- Entrada: `index.html` → `src/main.tsx` → `src/App.tsx`
- App compõe 7 seções: Navbar → Hero → Projects → Skills → Certifications → Contact → Footer
- Todo conteúdo fica em `src/data/*.ts` (projetos, skills, certificações) — edite os arquivos de dados, não os componentes
- Tipos em `src/types.ts`
- CSS em `src/styles/global.css` — CSS puro, sem Tailwind ou CSS-in-JS

## Deploy

Vercel com Root Directory definido como `portfolio_PedroZef/`. Config em `vercel.json` confirma framework: vite, output: dist.

## Observações

- Sem backend — formulário de contato usa `mailto:`
- Node 20.19+ ou 22.12+ obrigatório (requisito do Vite 8)
- TypeScript em modo strict: `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`
