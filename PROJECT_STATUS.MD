# PROJECT_STATUS

## Etapa atual

Landing page estatica do The Staff com planos, CTAs, SEO reforcado e estrutura preparada para imagem social/hero.

## O que ja existe funcionando

- Estrutura de pagina unica com topo, hero, beneficios, recursos, preco e FAQ.
- Secao `Planos` com Free, Trial 7 dias gratis e Staff PRO.
- CTAs principais direcionando para a comparacao de planos.
- Botao de trial no painel direito do hero.
- CTA final no rodape apontando para o bot.
- Links de contratacao apontando para `https://t.me/WardenControlBot`.
- Hero preparado para usar a imagem `assets/the-staff-preview.png`.
- Tags sociais `og:image` e `twitter:image` preparadas para a imagem principal.
- Titulo, meta description e conteudo reforcados para buscas como bot moderador Telegram, bots para Telegram e bot anti-spam Telegram.
- Dados estruturados JSON-LD para `SoftwareApplication` e `FAQPage`.
- Secao textual adicional com termos de SEO usados de forma natural.
- FAQ reforcada com perguntas sobre bot moderador Telegram e bot anti-spam Telegram.
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
- JavaScript validado com `node --check`.
- Chaves de idioma verificadas: 185 chaves no HTML com traducoes em PT-BR e EN-US.

## O que ainda falta melhorar

- Definir dominio final para adicionar `canonical`, `og:url` e `sitemap.xml`.
- Salvar a imagem real em `assets/the-staff-preview.png` para ativar hero e previa social.
- Definir URL absoluta da imagem apos o dominio final, porque algumas redes sociais exigem URL absoluta em `og:image`.
- Revisar textos finais de venda apos validacao visual e comercial do usuario.
- Testar visualmente em navegador real antes de publicar.
- Configurar Google Search Console apos o deploy.
- Avaliar se sera necessario backend proprio no futuro para cachear cotacoes e reduzir dependencia direta de APIs publicas no navegador.

## Limitacoes atuais

- A cotacao em Monero e reais depende de APIs publicas externas e pode falhar por limite, indisponibilidade ou bloqueio de rede do visitante.
- O site ainda nao tem formulario, checkout, painel, banco de dados ou backend.
- A versao atual e uma primeira base organizada para validacao visual e textual.
- A imagem enviada na conversa nao esta salva como arquivo local; o site esta preparado para usa-la quando for colocada em `assets/the-staff-preview.png`.
