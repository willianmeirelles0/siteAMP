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
    Sobre.tsx              # seção "Sobre a fundadora"
    SobreAmp.tsx             # seção "Sobre a AMP Andrioli" (missão + pilares)
    Servicos.tsx               # seção "Serviços" (grid de cards + consultoria em destaque)
    Mentoria.tsx                 # seção "Mentoria de Marketing" (fundo bege)
    icons.tsx                     # ícones de traço fino usados nos cards
    WhatsappButton.tsx              # botão reutilizável (solid/dark/outline/fab)
    Reveal.tsx                       # wrapper de fade-in ao entrar no viewport
  lib/
    fonts.ts             # configuração das fontes do Google
    site-config.ts         # dados centrais editáveis (WhatsApp, redes, nav)
```

## Configuração rápida (placeholders a editar)

- `src/lib/site-config.ts`: número de WhatsApp, e-mail, Instagram, LinkedIn, URL do site.
- `tailwind.config.ts`: cores (`amp.wine`, `amp.cream`, `amp.sand`, `amp.ink`) e fontes.
- `src/components/Sobre.tsx`: bio da fundadora (objeto `fundadora` no topo do arquivo) e foto — adicionar em `public/images` e trocar o bloco placeholder por `<Image />`.
- `src/components/SobreAmp.tsx`: texto de missão (`missao`) e os 3-4 pilares/diferenciais (`pilares`).
- `src/components/Servicos.tsx`: lista `servicos` e o serviço em destaque `consultoria`.
- `src/components/Mentoria.tsx`: lista `beneficios` e depoimentos de mentorados (`mentorados` — placeholders a substituir por casos reais).

## Progresso

- [x] Estrutura de pastas, Tailwind config (paleta/tipografia), Header, Hero
- [x] Sobre a fundadora
- [x] Sobre a AMP Andrioli (missão + pilares)
- [x] Serviços
- [x] Mentoria de Marketing
- [ ] Depoimentos
- [ ] Contato (formulário + Route Handler `app/api/contact`)
- [ ] Footer
- [ ] Botão flutuante de WhatsApp global
- [ ] Banner de cookies (LGPD)
- [ ] Página `/privacidade`
- [ ] Integração Google Tag / Meta Pixel pós-consentimento
