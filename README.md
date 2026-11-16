# TBNotes 🏋️

App web pessoal para registrar treinos de academia e acompanhar a progressão
de carga ao longo do tempo. Feito para funcionar muito bem no iPhone (Safari)
e ser instalável na tela inicial (PWA) — no iPhone e no **Android**.

> Baseado no [TBNotes](https://github.com/thomaz-brito/TBNotes), de Thomaz
> Brito, usado com autorização.

## Configurar a sua própria cópia

1. **Banco (Supabase)**: crie um projeto em <https://supabase.com>, abra
   **SQL Editor → New query**, cole todo o conteúdo de `supabase/schema.sql`
   e clique em **Run**. (As migrations já estão incluídas no schema.)
2. **Usuário**: em **Authentication → Users → Add user → Create new user**,
   crie seu e-mail e senha (marque *Auto Confirm User*). O app só tem tela
   de login, sem cadastro.
3. **Chaves**: em **Project Settings → API**, copie a *Project URL* e a
   chave *anon public*. Elas vão nas variáveis `VITE_SUPABASE_URL` e
   `VITE_SUPABASE_ANON_KEY` (veja `.env.example`).
4. **Publicar (Vercel)**: em <https://vercel.com>, importe este repositório,
   adicione as duas variáveis em *Environment Variables* e clique em
   **Deploy**.
5. **Android**: abra o endereço do site no **Chrome**, menu **⋮ → Instalar
   app** (ou "Adicionar à tela inicial").

## Como rodar no seu computador

Você só precisa fazer o passo 1 uma vez.

1. **Instale o Node.js** (o "motor" que roda o projeto):
   baixe em <https://nodejs.org> e instale a versão **LTS**.

2. **Baixe o código**: no GitHub, botão verde **Code → Download ZIP**
   (ou `git clone` se você usa git). Descompacte em uma pasta.

3. **Abra o Terminal** (no Mac: Cmd+Espaço, digite "Terminal") e entre na
   pasta do projeto:

   ```bash
   cd caminho/para/TBNotes
   ```

4. **Configure o banco**: copie `.env.example` para `.env.local` e preencha
   com os dados do seu Supabase.

5. **Instale as dependências** (só na primeira vez ou quando o código mudar):

   ```bash
   npm install
   ```

6. **Rode o app**:

   ```bash
   npm run dev
   ```

   O terminal mostra um endereço como `http://localhost:5173` — abra no
   navegador. Para ver no iPhone na mesma rede Wi-Fi, rode
   `npm run dev -- --host` e abra o endereço "Network" que aparecer.

Para parar o app, volte ao Terminal e aperte `Ctrl+C`.

## Etapas do projeto

- [x] **Etapa 1** — Estrutura, visual e telas de Exercícios e Treinos (rotinas)
- [x] **Etapa 2** — Registro da sessão do dia + cronômetro de descanso
- [x] **Etapa 3** — Diário por data (aba Registros) e gráficos de progresso
- [x] **Etapa 4** — Supabase: conta, banco na nuvem, login e backup
- [x] **Etapa 5** — PWA: instalar na tela inicial do iPhone

Depois das etapas, o app segue evoluindo: métricas de 1RM estimada,
índice de força por grupo muscular e locais de treino.

## Banco de dados

O esquema fica em `supabase/schema.sql` e as mudanças posteriores em
`supabase/migrations/`, para aplicar no SQL Editor do Supabase. Todas são
aditivas: nenhum registro de treino é alterado ou apagado.

## Stack

- [Vite](https://vitejs.dev) + [React](https://react.dev) + TypeScript
- CSS puro com design system próprio (tema claro/escuro automático)
- Dados na nuvem com Supabase (Postgres + Auth), calculados na leitura
