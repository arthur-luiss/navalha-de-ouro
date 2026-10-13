# Navalha de Ouro Barbearia

Site da barbearia com páginas de início, galeria, preços e localização, e agendamento pelo WhatsApp.

**Stack:** TanStack Start, React 19, Tailwind CSS v4, Vite.

## Rodar localmente

```sh
npm install
npm run dev
```

## Deploy na Vercel

1. Suba o projeto para o GitHub.
2. Na Vercel: **Add New → Project** e importe o repositório.
3. Deixe o framework em **Other** (ou o detectado automaticamente) e mantenha o comando de build `npm run build`. Não precisa configurar Output Directory.
4. Clique em **Deploy**.

## Dados da barbearia

Número de WhatsApp, endereço e tabela de preços ficam em `src/lib/barbearia.ts`.
