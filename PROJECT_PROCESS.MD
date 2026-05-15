# PROJECT_PROCESS

## 2026-05-14 - Etapa 1: Base inicial da landing page

### Arquivos existentes lidos antes da alteracao

Nenhum arquivo existente foi lido porque a pasta do projeto estava vazia. Foram verificadas a listagem do diretorio e a ausencia de `PROJECT_PROCESS.MD`, `PROJECT_STATUS.MD` e arquivos do site.

### Estado real encontrado

O projeto ainda nao tinha estrutura, codigo, configuracao de hospedagem ou documentacao de acompanhamento.

### Alteracao realizada

Foi criada uma landing page estatica inicial para o The Staff, focada em divulgar o bot de moderacao de grupos do Telegram. A pagina inclui:

- Conteudo principal em PT-BR com acentuacao revisada.
- Alternancia completa de idioma entre PT-BR e EN-US.
- Alternancia de idioma com fallback caso o navegador bloqueie armazenamento local.
- Secoes de problema, solucao, recursos, preco e FAQ.
- Preco mensal fixo em dolar.
- Conversao em tempo real para Monero e reais feita no navegador por APIs publicas.
- Metadados basicos para previa de links.
- Configuracao minima para publicacao no Netlify.
- `robots.txt` permitindo indexacao.

### Simulacao e prevencao de regressao

Foram feitas as seguintes verificacoes:

- `node --check .\app.js` passou sem erros de sintaxe.
- Foram encontradas 69 chaves `data-i18n` no HTML, todas presentes nos dicionarios PT-BR e EN-US.
- A API publica de cambio USD/BRL respondeu corretamente no momento da verificacao.
- A integracao de Monero foi baseada no endpoint publico documentado da CoinGecko para precos simples.
- Foi tentada uma captura visual com navegador headless, mas o Edge nao gerou arquivo de screenshot neste ambiente. A validacao visual manual em navegador real continua pendente.

Como nao havia versao anterior, nao existe regressao funcional anterior possivel, mas os pontos sensiveis sao:

- Cotacoes dependem de APIs publicas externas.
- Link final do bot no Telegram ainda precisa ser substituido pelo usuario real do bot.
- Sitemap e canonical dependem do dominio final.

## 2026-05-14 - Etapa 2: Secao de planos e reforco comercial

### Arquivos lidos antes da alteracao

- `index.html`
- `styles.css`
- `app.js`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`

### Estado real encontrado

O projeto ja tinha uma landing page estatica com hero, recursos, bloco de preco, FAQ, troca de idioma PT-BR/EN-US e cotacao em tempo real para XMR/BRL. Nao existia uma secao detalhada de planos, e os CTAs de "Ver planos" ainda apontavam para a area de preco.

### Alteracao realizada

Foi adicionada a secao `Planos` logo apos o bloco de valores, com tres opcoes:

- Free, com recursos basicos e limitacoes.
- Trial 7 dias gratis, com experiencia completa temporaria.
- Staff PRO, com recursos avancados e valor mensal de US$ 10.

Tambem foram realizados ajustes comerciais na pagina:

- CTAs principais agora direcionam para a secao de planos.
- O bloco de preco agora leva o usuario para comparar planos.
- Textos do hero, problema, solucao, recursos e preco foram reforcados com foco em conversao.
- Recursos de moderacao visual NSFW/GORE foram destacados visualmente nos planos Trial e PRO.
- Todas as novas chaves foram adicionadas em PT-BR e EN-US.

### Simulacao e prevencao de regressao

Foram feitas as seguintes verificacoes:

- `node --check .\app.js` passou sem erros de sintaxe.
- Foram encontradas 174 chaves `data-i18n` no HTML, todas presentes nos dicionarios PT-BR e EN-US.
- O risco principal desta etapa era regressao visual por cards longos em desktop/celular. Para reduzir isso, a secao de planos usa grid responsivo e os cards passam para uma coluna em telas menores.
- A tentativa de validacao pelo navegador interno foi bloqueada pela politica de URL para `file://`, entao a validacao visual manual no navegador continua necessaria.

## 2026-05-14 - Etapa 3: Hover e explicacoes dos recursos

### Arquivos lidos antes da alteracao

- `index.html`
- `styles.css`
- `app.js`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`

### Estado real encontrado

A secao de recursos ainda exibia apenas os nomes das funcoes em cards simples. A secao de planos ja tinha Free, Trial e PRO, mas os cards nao tinham uma resposta visual forte ao passar o mouse.

### Alteracao realizada

- Foram adicionadas explicacoes breves para cada recurso principal.
- As descricoes dos recursos foram limitadas visualmente a no maximo duas linhas.
- Foi adicionada sombra com leve elevacao ao passar o mouse ou focar cards de recursos, casos de uso e planos.
- As novas descricoes foram adicionadas em PT-BR e EN-US.

### Simulacao e prevencao de regressao

Foram feitas as seguintes verificacoes:

- `node --check .\app.js` passou sem erros de sintaxe.
- Foram encontradas 186 chaves `data-i18n` no HTML, todas presentes nos dicionarios PT-BR e EN-US.
- O CSS contem `-webkit-line-clamp: 2` para manter as explicacoes curtas e evitar cards muito altos.
- A validacao visual manual no navegador continua recomendada, porque o navegador interno bloqueia automacao em URL `file://`.

## 2026-05-14 - Etapa 4: CTAs para o bot oficial

### Arquivos lidos antes da alteracao

- `index.html`
- `styles.css`
- `app.js`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`

### Estado real encontrado

Os botoes de contratacao dos planos ainda apontavam para `https://t.me/`, o painel direito do hero nao tinha um CTA direto para iniciar o trial, e o footer nao tinha chamada final para o bot.

### Alteracao realizada

- Foi adicionado o botao "Comecar agora trial 7 dias" abaixo do painel direito do hero.
- Foi adicionado um CTA final no rodape com o mesmo texto.
- Todos os links externos de contratacao foram apontados para `https://t.me/WardenControlBot`.
- A nova chamada foi adicionada em PT-BR e EN-US.

### Simulacao e prevencao de regressao

Foram feitas as seguintes verificacoes:

- `node --check .\app.js` passou sem erros de sintaxe.
- Foram encontradas 187 chaves `data-i18n` no HTML, todas presentes nos dicionarios PT-BR e EN-US.
- Foi verificado que os links externos do site apontam para `https://t.me/WardenControlBot`.
- A validacao visual manual no navegador continua recomendada por causa do bloqueio de automacao em URL `file://`.

## 2026-05-14 - Etapa 5: Imagem principal e reforco de SEO

### Arquivos lidos antes da alteracao

- `index.html`
- `styles.css`
- `app.js`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`
- Listagem de arquivos com `rg --files`

### Estado real encontrado

O projeto ainda nao tinha pasta `assets` nem arquivo de imagem salvo. A landing page tinha SEO basico, mas ainda nao tinha imagem social (`og:image` / `twitter:image`), dados estruturados JSON-LD, secao textual focada em termos de busca ou FAQ reforcada para buscas como bot moderador Telegram e bot anti-spam Telegram.

### Alteracao realizada

- Foi preparado o uso da imagem em `assets/the-staff-preview.png` no hero.
- Foram adicionadas tags `og:image` e `twitter:image` apontando para `assets/the-staff-preview.png`.
- Foi criado `assets/README.md` explicando onde salvar a imagem real.
- O titulo e a meta description foram reforcados com termos como bot moderador Telegram, anti-spam e seguranca para grupos.
- Foi adicionada meta `keywords` como apoio sem depender dela para SEO principal.
- Foi adicionada uma secao curta com texto natural sobre bot moderador Telegram, bot anti-spam Telegram, bots para Telegram e seguranca para grupos.
- Foram adicionadas perguntas de FAQ sobre bot moderador Telegram e bot anti-spam Telegram.
- Foram adicionados dados estruturados JSON-LD para `SoftwareApplication` e `FAQPage`.
- O `robots` foi ajustado para permitir `max-image-preview:large`.

### Simulacao e prevencao de regressao

Foram feitas as seguintes verificacoes:

- `node --check .\app.js` passou sem erros de sintaxe.
- Foram encontradas 185 chaves `data-i18n` no HTML, todas presentes nos dicionarios PT-BR e EN-US.
- Foram verificadas as tags `og:image`, `twitter:image` e os blocos JSON-LD no HTML.
- Foi confirmado que `assets/the-staff-preview.png` ainda nao existe no projeto. A imagem so aparecera de fato quando o arquivo real for salvo nesse caminho.
- Nao foi adicionado `canonical`, `og:url` ou `sitemap.xml` definitivo porque o dominio final ainda nao foi definido.

## 2026-05-15 - Etapa 6: Reposicionamento da imagem principal

### Arquivos lidos antes da alteracao

- `index.html`
- `styles.css`
- `app.js`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`

### Estado real encontrado

A imagem `assets/the-staff-preview.png` estava sendo usada no hero como fundo do card direito. Visualmente ela ficava cortada e competia com o H1, embora continuasse adequada para previa social e SEO.

### Alteracao realizada

- O hero voltou a usar o painel visual de moderacao com risco controlado, eventos bloqueados e CTA de trial.
- A imagem foi movida para uma secao propria chamada de identidade visual, logo apos o bloco de SEO.
- A nova secao usa `img` real com `object-fit: contain`, preservando a proporcao da arte sem corte.
- As tags `og:image` e `twitter:image` continuam apontando para a imagem.
- Foram adicionadas traducoes PT-BR e EN-US para a nova secao visual.

### Simulacao e prevencao de regressao

Foram feitas as seguintes verificacoes:

- `node --check .\app.js` passou sem erros de sintaxe.
- Foram encontradas 197 chaves `data-i18n` no HTML, todas presentes nos dicionarios PT-BR e EN-US.
- Foi verificado que o hero voltou a conter `.moderation-panel`.
- Foi verificado que nao sobrou referencia CSS/HTML a `.hero-image` ou `.hero-media-card`.
- A validacao visual manual no site publicado continua recomendada apos commit no GitHub.

## 2026-05-15 - Etapa 7: Provas visuais reais e SEO de moderacao

### Arquivos lidos antes da alteracao

- `index.html`
- `styles.css`
- `app.js`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`
- Listagem de `assets`
- Verificacao dos arquivos locais:
  - `C:\Users\jogos\OneDrive\Imagens\Capturas de tela\Captura de tela 2026-05-15 121919.png`
  - `C:\Users\jogos\OneDrive\Imagens\Capturas de tela\Captura de tela 2026-05-15 122753.png`

### Estado real encontrado

O site ja tinha uma secao visual propria com a imagem principal `assets/the-staff-preview.png`, mas ainda nao exibia provas reais de moderacao dentro do Telegram. O SEO ja mencionava bot moderador Telegram, anti-spam e seguranca, mas ainda podia reforcar termos ligados a advertencias, ban automatico, moderacao visual e bloqueio de links.

### Alteracao realizada

- As duas capturas reais foram copiadas para `assets` com nomes estaveis:
  - `assets/prova-moderacao-link-telegram-ban.png`
  - `assets/prova-moderacao-visual-policy-warnings.png`
- A secao visual virou uma galeria de prova de eficiencia, com a imagem principal e as duas capturas lado a lado em desktop e empilhadas no mobile.
- Foram adicionadas legendas para explicar rapidamente o que cada prova mostra.
- Foram adicionados textos alternativos com termos naturais de SEO, como bot moderador Telegram, link Telegram, advertencias, ban automatico e politica visual.
- A meta description e a meta keywords foram reforcadas com moderacao visual, bot NSFW Telegram, ban automatico, advertencias e bloqueio de links.
- O JSON-LD de `SoftwareApplication` agora inclui uma lista de screenshots.
- O FAQ ganhou uma pergunta sobre advertencias e ban automatico.
- As novas legendas e a nova pergunta foram traduzidas para PT-BR e EN-US.

### Simulacao e prevencao de regressao

Foram feitas as seguintes verificacoes apos a alteracao:

- `node --check .\app.js` passou sem erros de sintaxe.
- Foram encontradas 202 chaves `data-i18n` no HTML, todas presentes nos dicionarios PT-BR e EN-US.
- Foi confirmado que as duas imagens copiadas existem em `assets`.
- Foi revisado que a galeria usa `object-fit: contain`, evitando corte das capturas.
- Foi identificado que `assets/the-staff-preview.png` nao existe nesta copia local do workspace, embora o HTML continue apontando para ela. Se a imagem ja estiver no GitHub, basta manter o arquivo la; se nao, ela precisa ser enviada junto com as novas capturas.

O risco principal desta etapa e visual: tres imagens com proporcoes muito diferentes podem deixar a secao alta em telas menores. Para reduzir esse risco, a galeria usa grid responsivo, `max-height` por imagem e empilha em uma coluna no mobile.

## 2026-05-15 - Etapa 8: Configuracao Git e sincronizacao com GitHub

### Arquivos lidos antes da alteracao

- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`
- Listagem da pasta do projeto
- Verificacao de existencia de `.git` local
- Verificacao de existencia de `C:\Users\jogos\.git`
- `.gitignore`
- `README.md`
- `assets\README.md`

### Estado real encontrado

A pasta `Landing-Page` nao tinha um repositorio Git proprio. O Git estava subindo ate `C:\Users\jogos\.git`, tratando a pasta do usuario como repositorio pai, o que causava erro e risco de misturar arquivos fora do projeto. O repositorio remoto `https://github.com/TrueKatz/The-staff-landing-page` ja existia e tinha arquivos que nao estavam na copia local, incluindo `assets/the-staff-preview.png`.

### Alteracao realizada

- Foi criado um repositorio Git proprio dentro de `Landing-Page`.
- O remoto `origin` foi configurado para `https://github.com/TrueKatz/The-staff-landing-page.git`.
- A branch local `main` foi alinhada para rastrear `origin/main`.
- Arquivos que existiam no GitHub mas estavam ausentes localmente foram restaurados, incluindo `assets/the-staff-preview.png`.
- O arquivo `.gitignore` passou a ignorar `.edge-profile/`, evitando enviar perfil local de navegador para o GitHub.
- Foi criado o commit `b691761` com as alteracoes da landing page, provas visuais e configuracao Git.
- O commit foi enviado para `origin/main` no GitHub.

### Simulacao e prevencao de regressao

Foram feitas as seguintes verificacoes:

- Confirmado que `.git` agora existe dentro de `Landing-Page`.
- Confirmado que `origin` aponta para o repositorio correto.
- Confirmado que `main` rastreia `origin/main`.
- Confirmado que `assets/the-staff-preview.png` existe localmente depois da restauracao.
- A estrategia usada preserva arquivos remotos que nao estavam na pasta local, evitando apagamento acidental no proximo commit.
- Confirmado que o push para `https://github.com/TrueKatz/The-staff-landing-page` foi aceito pelo GitHub.

O principal risco desta etapa era sobrescrever ou apagar arquivos do GitHub. Para prevenir isso, o historico remoto foi buscado antes de qualquer commit e os arquivos ausentes foram restaurados do remoto.

## 2026-05-15 - Etapa 9: Balao flutuante de contato no Telegram

### Arquivos lidos antes da alteracao

- `index.html`
- `styles.css`
- `app.js`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`
- Status Git da pasta do projeto

### Estado real encontrado

A landing page ja tinha CTAs para iniciar o bot `WardenControlBot`, mas nao tinha um contato direto e persistente para o responsavel pelo projeto. O site ja estava conectado ao GitHub, com branch `main` rastreando `origin/main`.

### Alteracao realizada

- Foi adicionado um balao flutuante fixo no canto inferior direito da pagina.
- O balao usa identidade visual do Telegram, com icone em SVG e texto curto.
- O link aponta para `https://t.me/TrueKatz666`.
- No desktop, o botao mostra o icone e o texto "Fale comigo".
- No mobile, o texto fica acessivel, mas visualmente oculto, deixando apenas o icone para nao ocupar espaco.
- A chamada foi adicionada em PT-BR e EN-US.

### Simulacao e prevencao de regressao

Foram feitas as seguintes verificacoes:

- `node --check .\app.js` passou sem erros de sintaxe.
- Foram encontradas 203 chaves `data-i18n` no HTML, todas presentes nos dicionarios PT-BR e EN-US.
- Foi confirmado que o link `https://t.me/TrueKatz666` aparece no HTML.
- Foi verificado o status Git antes do commit e push.

O risco principal desta etapa e o balao cobrir conteudo em telas pequenas. Para reduzir isso, no mobile o texto e ocultado visualmente e o botao fica compacto no canto inferior direito.

## 2026-05-15 - Etapa 10: Animacoes profissionais e microinteracoes

### Arquivos lidos antes da alteracao

- `index.html`
- `styles.css`
- `app.js`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`
- Status Git da pasta do projeto

### Estado real encontrado

A landing page ja tinha estrutura completa, CTAs, galeria, balao flutuante e efeitos de hover basicos. Ainda faltavam animacoes de entrada, movimento sutil no painel do hero, chamada visual no contato flutuante, destaque de cotacao e microinteracoes mais perceptiveis nas imagens de prova.

### Alteracao realizada

- Foram adicionadas animacoes iniciais suaves no hero para titulo, texto, CTAs, faixa de confianca e painel de moderacao.
- O ponto de protecao ativa no painel passou a pulsar.
- Os eventos do painel `SPAM`, `LINK` e `CAPTCHA` entram com movimento alternado.
- Os CTAs principais ganharam um brilho discreto e recorrente.
- O balao flutuante do Telegram ganhou pulso externo sutil.
- A galeria de provas ganhou hover com leve elevacao, brilho de borda e realce da imagem.
- Os valores de cotacao em XMR/BRL ganharam destaque rapido quando atualizam.
- Foi criado um `IntersectionObserver` em `app.js` para revelar secoes, cards, planos, FAQ e provas conforme o usuario rola a pagina.
- Foi adicionado suporte a `prefers-reduced-motion`, reduzindo animacoes para usuarios que preferem menos movimento.

### Simulacao e prevencao de regressao

Foram feitas as seguintes verificacoes:

- `node --check .\app.js` passou sem erros de sintaxe.
- Foram encontradas 203 chaves `data-i18n` no HTML, todas presentes nos dicionarios PT-BR e EN-US.
- `git diff --check` nao encontrou problemas de espaco ou quebras invalidas; exibiu apenas avisos normais de LF/CRLF do Windows.
- Foram localizadas as novas regras de animacao e funcoes (`initScrollReveal`, `flashRateValues`, `reveal-on-scroll`, `prefers-reduced-motion`).

O risco principal desta etapa e excesso de movimento prejudicar percepcao de confianca ou experiencia em celular. Para reduzir isso, as animacoes foram mantidas curtas, sutis e com fallback para `prefers-reduced-motion`.

## 2026-05-15 - Etapa 11: Loop lento no brilho dos CTAs

### Arquivos lidos antes da alteracao

- `styles.css`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`
- Status Git da pasta do projeto

### Estado real encontrado

Os CTAs principais ja tinham brilho animado, mas a animacao usava uma faixa estreita que atravessava o botao e ficava invisivel em parte do ciclo. Visualmente, isso dava a impressao de que a animacao sumia do nada.

### Alteracao realizada

- O `@keyframes ctaShine` foi alterado para animar `background-position`.
- A faixa unica foi trocada por um `repeating-linear-gradient`, mantendo brilho visivel em loop.
- O tempo da animacao foi ajustado para 9 segundos em `linear infinite`, criando um movimento mais lento e continuo.

### Simulacao e prevencao de regressao

Foram feitas as seguintes verificacoes:

- Foi verificado que `ctaShine` ainda existe em `styles.css`.
- Foi confirmado que o brilho usa `repeating-linear-gradient`.
- Foi confirmado que a animacao roda em `9s linear infinite`.
- `git diff --check` nao encontrou problemas de espaco ou quebras invalidas; exibiu apenas avisos normais de LF/CRLF do Windows.
- Foi verificado o status Git antes do commit e push.

O risco principal desta etapa e o brilho ficar chamativo demais. Para reduzir isso, o gradiente usa baixa opacidade e movimento lento.

## 2026-05-15 - Etapa 12: Reset invisivel no brilho dos CTAs

### Arquivos lidos antes da alteracao

- `styles.css`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`
- Status Git da pasta do projeto

### Estado real encontrado

O brilho dos CTAs estava em loop lento, mas ainda usava `repeating-linear-gradient` com `background-position`. Na pratica, o reset do background podia ficar perceptivel, parecendo que a animacao sumia ou saltava antes de concluir visualmente o ciclo.

### Alteracao realizada

- O brilho voltou a usar uma faixa unica em pseudo-elemento.
- A faixa comeca fora da esquerda do botao e atravessa ate sair completamente pela direita.
- O reset agora acontece no ponto em que a faixa esta invisivel fora do botao.
- A animacao foi ajustada para `7.2s linear infinite`, mantendo o movimento lento.
- A opacidade entra e sai apenas nas extremidades do ciclo, evitando corte brusco no meio do botao.

### Simulacao e prevencao de regressao

Foram feitas as seguintes verificacoes:

- Foi verificado que `ctaShine` usa `translateX(360%)` no fim do ciclo.
- Foi confirmado que a faixa unica usa `left: -48%` e `width: 42%`, comecando fora da esquerda.
- Foi confirmado que a animacao roda em `7.2s linear infinite`.
- `git diff --check` nao encontrou problemas de espaco ou quebras invalidas; exibiu apenas avisos normais de LF/CRLF do Windows.
- Foi verificado o status Git antes do commit e push.

O risco principal desta etapa e a faixa ficar lenta ou sutil demais. A configuracao atual prioriza reset invisivel e movimento limpo.

## 2026-05-15 - Etapa 13: Preparacao do Meta Pixel para anuncios

### Arquivos lidos antes da alteracao

- `index.html`
- `app.js`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`

### Estado real encontrado

A landing page ja tinha CTAs para o bot oficial, contato flutuante no Telegram, SEO reforcado, galeria de provas, animacoes e publicacao pelo GitHub. Ainda nao havia rastreamento de anuncios, Meta Pixel, eventos de conversao ou ponto configuravel para inserir o ID do Pixel.

### Alteracao realizada

- Foi adicionado `window.THE_STAFF_META_PIXEL_ID` no HTML como ponto unico para inserir o ID do Meta Pixel.
- Foi criado carregamento dinamico do Meta Pixel em `app.js`.
- O Pixel fica inativo se o ID estiver vazio, evitando chamadas quebradas ou envio para conta errada.
- Quando o ID for configurado, a pagina dispara `PageView` e `ViewContent`.
- Cliques para `https://t.me/WardenControlBot` disparam evento `Lead`.
- Cliques para `https://t.me/TrueKatz666` disparam evento `Contact`.
- Os eventos recebem parametros de contexto, como origem da landing page, CTA clicado, categoria e valor mensal em USD.
- Nao foi adicionado banner de consentimento, conforme solicitado.

### Simulacao e prevencao de regressao

- A implementacao foi feita com fallback: sem ID de Pixel, nenhuma biblioteca externa da Meta e carregada.
- A logica de rastreamento usa os links ja existentes, entao nao muda o destino dos botoes.
- O risco principal e legal/privacidade: ao ativar o Pixel sem banner, cookies de marketing podem ser gravados pelo Meta Pixel. Para reduzir risco operacional, ainda e recomendavel manter uma politica de privacidade explicando o uso de ferramentas de anuncios e mensuracao.

## 2026-05-15 - Etapa 14: Miniatura social do site

### Arquivos lidos antes da alteracao

- `index.html`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`
- Listagem da pasta `assets`

### Estado real encontrado

O arquivo `assets/site-card-thumbnail.png` foi adicionado ao projeto com dimensoes de 1254x1254. A previa social ainda usava `assets/the-staff-preview.png` em `og:image`, `twitter:image` e no campo `image` do JSON-LD. A imagem antiga tambem era usada dentro da galeria visual da pagina.

### Alteracao realizada

- `og:image` passou a apontar para `https://truekatz.github.io/The-staff-landing-page/assets/site-card-thumbnail.png`.
- Foi adicionada a tag `og:image:secure_url` com a mesma URL HTTPS.
- Foi adicionada a tag `og:image:type` como `image/png`.
- As dimensoes `og:image:width` e `og:image:height` foram atualizadas para 1254x1254.
- `twitter:image` passou a usar a nova miniatura.
- O campo `image` do JSON-LD passou a usar a nova miniatura.
- A imagem antiga `assets/the-staff-preview.png` foi mantida na galeria visual do site, sem alteracao.

### Simulacao e prevencao de regressao

- A imagem foi validada localmente com leitura de dimensoes via `System.Drawing`.
- A alteracao ficou restrita as tags de previa social e dados estruturados, reduzindo risco de quebrar layout.
- O principal risco e cache de plataformas como Telegram, WhatsApp, Facebook e X/Twitter. Mesmo apos o deploy, elas podem continuar mostrando a miniatura antiga ate o cache expirar ou ser reprocessado por uma ferramenta de debug/scrape.

## 2026-05-15 - Etapa 15: Separacao entre miniatura de link e icone da aba

### Arquivos lidos antes da alteracao

- `index.html`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`
- Listagem da pasta `assets`

### Estado real encontrado

A imagem `assets/site-card-thumbnail.png` estava configurada como miniatura de link em `og:image`, `twitter:image` e no campo `image` do JSON-LD. Nao havia favicon configurado no HTML. A imagem antiga `assets/the-staff-preview.png` continuava existindo e era a miniatura correta para previews de link.

### Alteracao realizada

- A previa de link voltou a usar `assets/the-staff-preview.png` por URL absoluta HTTPS.
- `og:image:secure_url`, `twitter:image` e o campo `image` do JSON-LD tambem voltaram para a imagem antiga.
- As dimensoes de `og:image` foram ajustadas para o tamanho real local de `assets/the-staff-preview.png`: 1448x1086.
- A imagem nova `assets/site-card-thumbnail.png` passou a ser usada como base do icone do site.
- Foram gerados favicons otimizados:
  - `assets/favicon-32.png`
  - `assets/favicon-192.png`
  - `assets/apple-touch-icon.png`
- Foram adicionadas tags `rel="icon"` e `rel="apple-touch-icon"` no `<head>`.

### Simulacao e prevencao de regressao

- Foram verificadas as dimensoes reais de `assets/the-staff-preview.png` e `assets/site-card-thumbnail.png`.
- A correcao separa responsabilidades: imagem antiga para previa de link, imagem nova para icone da aba.
- O risco principal e cache do navegador: a aba pode continuar mostrando o icone antigo ate recarregar forte ou limpar cache. Plataformas sociais tambem podem manter cache de previews por algum tempo.

## 2026-05-15 - Etapa 16: Ativacao do Meta Pixel

### Arquivos lidos antes da alteracao

- `index.html`
- `app.js`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`

### Estado real encontrado

O Meta Pixel ja estava preparado em `app.js`, com carregamento dinamico e eventos `PageView`, `ViewContent`, `Lead` e `Contact`. O ID configuravel `window.THE_STAFF_META_PIXEL_ID` ainda estava vazio, entao o Pixel permanecia inativo e nenhuma biblioteca externa da Meta era carregada.

### Alteracao realizada

- O ID `1011943415090142` foi inserido em `window.THE_STAFF_META_PIXEL_ID`.
- Foi adicionado fallback `noscript` oficial para registrar `PageView` quando JavaScript estiver desativado.
- A estrutura dinamica existente continua responsavel por carregar `fbevents.js` e disparar os eventos de conversao quando JavaScript esta ativo.

### Simulacao e prevencao de regressao

- A alteracao foi limitada ao ponto de configuracao do Pixel e ao fallback `noscript`.
- Nao foi duplicado o bloco completo do Pixel da Meta porque o projeto ja possui carregamento controlado em `app.js`.
- O risco principal agora e privacidade/cookies de marketing, ja que o Pixel passa a carregar no site sem banner de consentimento, conforme decisao atual.

## 2026-05-15 - Etapa 17: Rastreamento de cliques internos no Pixel

### Arquivos lidos antes da alteracao

- `app.js`
- `index.html`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`

### Estado real encontrado

O Pixel ja rastreava eventos principais: `PageView`, `ViewContent`, `Lead` para cliques no bot do Telegram e `Contact` para o contato direto. Os botoes internos da landing page, como `#planos`, `#recursos`, `#preco`, `#faq` e `#top`, apenas navegavam/rolavam a pagina e nao disparavam evento proprio no Pixel.

### Alteracao realizada

- Foi criada a funcao `trackMetaCustomEvent` usando `fbq("trackCustom", ...)`.
- Foi adicionada a funcao `initInternalClickTracking`.
- Cliques em links internos `href="#..."` agora disparam o evento customizado `InternalButtonClick`.
- O evento envia o texto do botao (`cta_text`) e o destino interno (`destination`).
- O botao de atualizar cotacao tambem dispara `InternalButtonClick` com destino `#preco`.
- O evento `Lead` foi preservado apenas para cliques que abrem `https://t.me/WardenControlBot`.

### Simulacao e prevencao de regressao

- A correcao evita marcar clique interno como lead, mantendo a qualidade do funil.
- O risco principal e confundir eventos customizados com conversao final. Para campanha, o evento mais importante continua sendo `Lead`; `InternalButtonClick` serve para diagnostico de navegacao dentro da pagina.

## 2026-05-15 - Etapa 18: Nova previa de links em PT-BR

### Arquivos lidos antes da alteracao

- `index.html`
- `PROJECT_PROCESS.MD`
- `PROJECT_STATUS.MD`
- Listagem da pasta `assets`

### Estado real encontrado

A previa de links ainda apontava para `assets/the-staff-preview.png`. O usuario adicionou uma nova imagem em `assets` com nome `ChatGPT Image 15 de mai. de 2026, 18_58_31.png`, contendo a arte em PT-BR para compartilhamento de link. O favicon continuava separado e nao precisava ser alterado.

### Alteracao realizada

- A imagem nova foi renomeada para `assets/the-staff-link-preview.png`, usando nome estavel sem espacos ou acentos.
- Foram confirmadas as dimensoes da imagem: 1448x1086.
- `og:image` e `og:image:secure_url` passaram a apontar para `https://truekatz.github.io/The-staff-landing-page/assets/the-staff-link-preview.png`.
- `twitter:image` passou a usar a nova imagem.
- O campo `image` do JSON-LD passou a usar a nova imagem.
- A imagem `assets/the-staff-preview.png` foi mantida na galeria visual do site.

### Simulacao e prevencao de regressao

- A imagem foi validada localmente com `System.Drawing`.
- A mudanca ficou restrita as tags de previa social e dados estruturados.
- O risco principal e cache das plataformas sociais. Telegram, WhatsApp, Facebook e X/Twitter podem continuar mostrando a imagem antiga ate reprocessarem a URL.
