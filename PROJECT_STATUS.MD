# PROJECT_STATUS

## Etapa atual

Landing page estatica do The Staff com planos, CTAs, SEO reforcado, galeria de provas visuais reais de moderacao e Git local conectado ao GitHub.

## O que ja existe funcionando

- Estrutura de pagina unica com topo, hero, beneficios, recursos, preco e FAQ.
- Secao `Planos` com Free, Trial 7 dias gratis e Staff PRO.
- CTAs principais direcionando para a comparacao de planos.
- Botao de trial no painel direito do hero.
- CTA final no rodape apontando para o bot.
- Links de contratacao apontando para `https://t.me/WardenControlBot`.
- Hero usando painel visual de moderacao, sem a imagem grande cortada.
- Imagem `assets/the-staff-preview.png` exibida em secao propria de prova visual.
- Capturas reais de moderacao adicionadas como prova de eficiencia:
  - `assets/prova-moderacao-link-telegram-ban.png`
  - `assets/prova-moderacao-visual-policy-warnings.png`
- Galeria visual com legendas explicando bloqueio visual, advertencias progressivas e ban automatico.
- Tags sociais `og:image` e `twitter:image` preparadas para a imagem principal.
- Titulo, meta description e conteudo reforcados para buscas como bot moderador Telegram, bots para Telegram, bot anti-spam Telegram, moderacao visual Telegram, advertencias Telegram e ban automatico Telegram.
- Dados estruturados JSON-LD para `SoftwareApplication` e `FAQPage`, incluindo lista de screenshots.
- Secao textual adicional com termos de SEO usados de forma natural.
- FAQ reforcada com perguntas sobre bot moderador Telegram e bot anti-spam Telegram.
- FAQ reforcada com pergunta sobre advertencias e ban automatico.
- Destaque visual para moderacao NSFW/GORE nos planos Trial e PRO.
- Cards de recursos com explicacao breve de cada funcao.
- Efeito de sombra/elevacao ao passar o mouse nos cards de recursos e planos.
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
- `.gitignore` ignorando `.edge-profile/`.
- JavaScript validado com `node --check`.
- Chaves de idioma verificadas: 202 chaves no HTML com traducoes em PT-BR e EN-US.

## O que ainda falta melhorar

- Definir dominio final para adicionar `canonical`, `og:url` e `sitemap.xml`.
- Manter a imagem real em `assets/the-staff-preview.png` para a secao visual e previa social.
- Fazer push do commit atual para o GitHub sempre que uma rodada de alteracao for finalizada.
- Definir URL absoluta da imagem apos o dominio final, porque algumas redes sociais exigem URL absoluta em `og:image`.
- Revisar textos finais de venda apos validacao visual e comercial do usuario.
- Testar visualmente em navegador real antes de publicar.
- Configurar Google Search Console apos o deploy.
- Avaliar se sera necessario backend proprio no futuro para cachear cotacoes e reduzir dependencia direta de APIs publicas no navegador.

## Limitacoes atuais

- A cotacao em Monero e reais depende de APIs publicas externas e pode falhar por limite, indisponibilidade ou bloqueio de rede do visitante.
- O site ainda nao tem formulario, checkout, painel, banco de dados ou backend.
- A versao atual e uma primeira base organizada para validacao visual e textual.
- A imagem principal e as provas agora aparecem fora do hero para evitar corte visual; validar no site publicado apos commit.
- As capturas reais tem proporcoes diferentes da arte principal, entao a altura da secao visual deve ser revisada em mobile depois do deploy.
