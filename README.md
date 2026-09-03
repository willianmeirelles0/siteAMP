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
cp .env.example .env.local   # opcional — ver "Integrações" abaixo
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

```
src/
  app/
    layout.tsx              # fontes, metadata (SEO/OG), Header/Footer/CookieBanner/Analytics globais
    page.tsx                 # página única com as seções âncora
    globals.css               # diretivas Tailwind + utilitários de base
    privacidade/page.tsx        # Política de Privacidade (LGPD)
    api/contact/route.ts         # Route Handler do formulário de contato
  components/
    Logo.tsx                # monograma "AMP" + wordmark "ANDRIOLI"
    Header.tsx               # header fixo, menu mobile em tela cheia
    Hero.tsx                  # seção hero
    Sobre.tsx                  # seção "Sobre a fundadora"
    SobreAmp.tsx                 # seção "Sobre a AMP Andrioli" (missão + pilares)
    Servicos.tsx                   # seção "Serviços" (grid de cards + consultoria em destaque)
    Mentoria.tsx                     # seção "Mentoria de Marketing" (fundo bege)
    Depoimentos.tsx                    # carrossel de depoimentos
    Contato.tsx / ContatoForm.tsx        # seção de contato + formulário completo
    Footer.tsx                             # rodapé (nav, contato, redes, link /privacidade)
    CookieConsentContext.tsx                 # estado de consentimento (localStorage)
    CookieBanner.tsx                           # banner LGPD (aceitar/recusar/preferências)
    Analytics.tsx                                # Google Tag + Meta Pixel, só após consentimento
    icons.tsx                                     # ícones de traço fino usados nos cards
    WhatsappButton.tsx                              # botão reutilizável (solid/dark/outline/fab)
    Reveal.tsx                                       # wrapper de fade-in ao entrar no viewport
  lib/
    fonts.ts               # configuração das fontes do Google
    site-config.ts           # dados centrais editáveis (WhatsApp, redes, nav)
    consent.ts                 # tipos e persistência do consentimento de cookies
    contact.ts                   # tipos e opções do formulário de contato
    privacy-content.ts             # texto da Política de Privacidade
```

## Configuração rápida (placeholders a editar)

- `src/lib/site-config.ts`: número de WhatsApp, e-mail, Instagram, LinkedIn, URL do site.
- `tailwind.config.ts`: cores (`amp.wine`, `amp.cream`, `amp.sand`, `amp.ink`) e fontes.
- `src/components/Sobre.tsx`: bio da fundadora (objeto `fundadora` no topo do arquivo) e foto — adicionar em `public/images` e trocar o bloco placeholder por `<Image />`.
- `src/components/SobreAmp.tsx`: texto de missão (`missao`) e os 3-4 pilares/diferenciais (`pilares`).
- `src/components/Servicos.tsx`: lista `servicos` e o serviço em destaque `consultoria`.
- `src/components/Mentoria.tsx`: lista `beneficios` e depoimentos de mentorados (`mentorados` — placeholders a substituir por casos reais).
- `src/components/Depoimentos.tsx`: array `depoimentos` — substituir pelos depoimentos reais de clientes.
- `src/lib/privacy-content.ts`: texto-base da Política de Privacidade — **revisar com jurídico especializado em LGPD** antes de publicar; preencher os campos entre `[colchetes]` (razão social, CNPJ, e-mail do encarregado/DPO, data de atualização).

## Integrações pendentes

- **E-mail do formulário de contato**: `src/app/api/contact/route.ts` já valida os campos no servidor; falta plugar um provedor (ex. [Resend](https://resend.com)) no bloco `TODO` marcado no arquivo. Variáveis sugeridas: `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (ver `.env.example`).
- **Google Tag / Meta Pixel**: `src/components/Analytics.tsx` já carrega os scripts somente após consentimento do `CookieBanner`, mas só se `NEXT_PUBLIC_GA_MEASUREMENT_ID` / `NEXT_PUBLIC_META_PIXEL_ID` estiverem definidos (ver `.env.example`).
- **Fotos reais**: adicionar em `public/images` (foto da fundadora, imagens de depoimentos, etc.) e trocar os blocos de placeholder pelos componentes `<Image />` do Next.

## Progresso

- [x] Estrutura de pastas, Tailwind config (paleta/tipografia), Header, Hero
- [x] Sobre a fundadora
- [x] Sobre a AMP Andrioli (missão + pilares)
- [x] Serviços
- [x] Mentoria de Marketing
- [x] Depoimentos
- [x] Contato (formulário + Route Handler `app/api/contact`)
- [x] Footer
- [x] Botão flutuante de WhatsApp global
- [x] Banner de cookies (LGPD)
- [x] Página `/privacidade`
- [x] Estrutura para Google Tag / Meta Pixel pós-consentimento
