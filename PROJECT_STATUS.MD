# PROJECT_STATUS

## Etapa atual

Landing page estatica do The Staff com planos, CTAs, SEO reforcado, favicon dedicado, galeria de provas visuais reais de moderacao, contato flutuante no Telegram, animacoes profissionais, preparacao para Meta Pixel e Git local conectado ao GitHub.

## O que ja existe funcionando

- Estrutura de pagina unica com topo, hero, beneficios, recursos, preco e FAQ.
- Secao `Planos` com Free, Trial 7 dias gratis e Staff PRO.
- CTAs principais direcionando para a comparacao de planos.
- Botao de trial no painel direito do hero.
- CTA final no rodape apontando para o bot.
- Links de contratacao apontando para `https://t.me/WardenControlBot`.
- Balao flutuante de contato apontando para `https://t.me/TrueKatz666`.
- Balao flutuante acompanha o scroll por `position: fixed` e fica compacto no mobile.
- Balao flutuante com pulso sutil para chamar contato sem poluir a pagina.
- Hero usando painel visual de moderacao, sem a imagem grande cortada.
- Hero com entrada suave de titulo, texto, CTAs, faixa de confianca e painel.
- Painel do hero com ponto de protecao pulsando e eventos entrando em sequencia.
- Imagem `assets/the-staff-preview.png` exibida em secao propria de prova visual.
- Capturas reais de moderacao adicionadas como prova de eficiencia:
  - `assets/prova-moderacao-link-telegram-ban.png`
  - `assets/prova-moderacao-visual-policy-warnings.png`
- Galeria visual com legendas explicando bloqueio visual, advertencias progressivas e ban automatico.
- Galeria visual com hover animado, leve elevacao e realce das imagens.
- Tags sociais `og:image` e `twitter:image` usando a nova previa de link em PT-BR `assets/the-staff-link-preview.png`.
- `og:image` e `twitter:image` apontando para URL absoluta HTTPS do GitHub Pages.
- JSON-LD usando `assets/the-staff-link-preview.png` como imagem principal estruturada.
- Imagem `assets/site-card-thumbnail.png` usada como base do favicon/icone da aba.
- Favicons gerados a partir da imagem nova:
  - `assets/favicon-32.png`
  - `assets/favicon-192.png`
  - `assets/apple-touch-icon.png`
- Titulo, meta description e conteudo reforcados para buscas como bot moderador Telegram, bots para Telegram, bot anti-spam Telegram, moderacao visual Telegram, advertencias Telegram e ban automatico Telegram.
- Dados estruturados JSON-LD para `SoftwareApplication` e `FAQPage`, incluindo lista de screenshots.
- Secao textual adicional com termos de SEO usados de forma natural.
- FAQ reforcada com perguntas sobre bot moderador Telegram e bot anti-spam Telegram.
- FAQ reforcada com pergunta sobre advertencias e ban automatico.
- Destaque visual para moderacao NSFW/GORE nos planos Trial e PRO.
- Cards de recursos com explicacao breve de cada funcao.
- Efeito de sombra/elevacao ao passar o mouse nos cards de recursos e planos.
- Reveals ao rolar a pagina usando `IntersectionObserver`.
- Brilho discreto nos CTAs principais com loop lento e reset fora da area visivel.
- Destaque rapido nos valores de cotacao quando XMR/BRL atualizam.
- Ponto configuravel `window.THE_STAFF_META_PIXEL_ID` ativado com o ID `1011943415090142`.
- Carregamento do Meta Pixel ativo sem banner de consentimento, conforme decisao atual.
- Fallback `noscript` adicionado para `PageView` quando JavaScript estiver desativado.
- Eventos preparados para anuncios Meta/Facebook:
  - `PageView` ao abrir a landing page.
  - `ViewContent` para visualizacao da oferta do The Staff.
  - `Lead` ao clicar nos CTAs que abrem `https://t.me/WardenControlBot`.
  - `Contact` ao clicar no balao flutuante para `https://t.me/TrueKatz666`.
  - `InternalButtonClick` ao clicar em botoes internos como planos, recursos, preco, FAQ, topo e atualizar cotacao.
- Suporte a `prefers-reduced-motion` para reduzir movimento quando configurado no navegador/sistema.
- Textos comerciais reforcados para explicar valor, reduzir friccao e incentivar teste/assinatura.
- Textos principais em PT-BR revisados com acentuacao correta.
- Layout responsivo para desktop e celular.
- Seletor de idioma PT-BR / EN-US alterando os textos visiveis da pagina.
- Fallback no seletor de idioma caso o navegador bloqueie `localStorage`.
- Preco mensal base de US$ 10,00.
- Conversao em tempo real para XMR e BRL via navegador.
- Atualizacao manual e automatica das cotacoes.
- Metadados basicos para titulo, descricao e previa de links.
- Configuracao minima para deploy no Netlify.
- `robots.txt` liberando indexacao.
- Repositorio Git proprio criado dentro da pasta `Landing-Page`.
- Remoto `origin` configurado para `https://github.com/TrueKatz/The-staff-landing-page.git`.
- Branch local `main` configurada para rastrear `origin/main`.
- Ultimo push para GitHub realizado com sucesso na branch `main`.
- `.gitignore` ignorando `.edge-profile/`.
- JavaScript validado com `node --check`.
- Chaves de idioma verificadas: 203 chaves no HTML com traducoes em PT-BR e EN-US.

## O que ainda falta melhorar

- Definir dominio final para adicionar `canonical`, `og:url` e `sitemap.xml`.
- Manter `assets/the-staff-link-preview.png` para previa de link e `assets/the-staff-preview.png` para a galeria visual.
- Aguardar o GitHub Pages finalizar o deploy apos cada push.
- Atualizar as URLs absolutas de previa de link se o site ganhar dominio proprio no futuro.
- Revisar textos finais de venda apos validacao visual e comercial do usuario.
- Testar visualmente em navegador real antes de publicar.
- Verificar no site publicado se o balao flutuante nao cobre CTAs importantes em telas pequenas.
- Verificar no site publicado se as animacoes continuam discretas em mobile e nao distraem da conversao.
- Validar o Pixel no Meta Events Manager ou Meta Pixel Helper depois que o ID real estiver configurado.
- Confirmar na aba de eventos de teste se `InternalButtonClick` aparece ao clicar em botoes internos.
- Criar ou linkar uma politica de privacidade explicando uso de ferramentas de anuncios e cookies de marketing, ja que a decisao atual foi nao usar banner de consentimento.
- Configurar Google Search Console apos o deploy.
- Avaliar se sera necessario backend proprio no futuro para cachear cotacoes e reduzir dependencia direta de APIs publicas no navegador.

## Limitacoes atuais

- A cotacao em Monero e reais depende de APIs publicas externas e pode falhar por limite, indisponibilidade ou bloqueio de rede do visitante.
- O site ainda nao tem formulario, checkout, painel, banco de dados ou backend.
- A versao atual e uma primeira base organizada para validacao visual e textual.
- A imagem principal e as provas agora aparecem fora do hero para evitar corte visual; validar no site publicado apos commit.
- As capturas reais tem proporcoes diferentes da arte principal, entao a altura da secao visual deve ser revisada em mobile depois do deploy.
- Plataformas sociais podem manter cache de previews por algum tempo apos o deploy.
- O navegador pode manter cache do favicon antigo; um recarregamento forte ou limpeza de cache pode ser necessario para ver o novo icone da aba.
- O Meta Pixel agora carrega no site publicado apos o deploy e depende de validacao no Meta Events Manager.
- Sem banner de consentimento, a responsabilidade por transparencia e base legal fica concentrada na politica de privacidade e nas configuracoes de anuncios/cookies escolhidas pelo responsavel do site.
