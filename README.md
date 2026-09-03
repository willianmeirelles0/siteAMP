# AMP Andrioli — Marketing & Performance

Site institucional em Next.js (App Router) + TypeScript + Tailwind CSS.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v3 (paleta e tipografia centralizadas em `tailwind.config.ts`)
- Framer Motion (animações discretas de fade-in ao scroll)
- Fontes via `next/font/google`: Cormorant Garamond (títulos/wordmark), Allura (cursiva/assinatura), Inter (texto corrido)

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

```
src/
  app/
    layout.tsx        # fontes, metadata (SEO/OG), estrutura raiz
    page.tsx           # página única com as seções âncora
    globals.css         # diretivas Tailwind + utilitários de base
  components/
    Logo.tsx            # monograma "AMP" + wordmark "ANDRIOLI"
    Header.tsx           # header fixo, menu mobile em tela cheia
    Hero.tsx              # seção hero
    WhatsappButton.tsx     # botão reutilizável (solid/outline/fab)
    Reveal.tsx               # wrapper de fade-in ao entrar no viewport
  lib/
    fonts.ts             # configuração das fontes do Google
    site-config.ts         # dados centrais editáveis (WhatsApp, redes, nav)
```

## Configuração rápida (placeholders a editar)

- `src/lib/site-config.ts`: número de WhatsApp, e-mail, Instagram, LinkedIn, URL do site.
- `tailwind.config.ts`: cores (`amp.wine`, `amp.cream`, `amp.sand`, `amp.ink`) e fontes.

## Progresso

- [x] Estrutura de pastas, Tailwind config (paleta/tipografia), Header, Hero
- [ ] Sobre a fundadora
- [ ] Sobre a AMP Andrioli (missão + pilares)
- [ ] Serviços
- [ ] Mentoria de Marketing
- [ ] Depoimentos
- [ ] Contato (formulário + Route Handler `app/api/contact`)
- [ ] Footer
- [ ] Botão flutuante de WhatsApp global
- [ ] Banner de cookies (LGPD)
- [ ] Página `/privacidade`
- [ ] Integração Google Tag / Meta Pixel pós-consentimento
