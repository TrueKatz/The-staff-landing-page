const MONTHLY_PRICE_USD = 10;
const RATE_REFRESH_MS = 5 * 60 * 1000;
const BOT_TELEGRAM_URL = "https://t.me/WardenControlBot";
const CONTACT_TELEGRAM_URL = "https://t.me/TrueKatz666";
const META_PIXEL_FALLBACK_ID = "";

const translations = {
  "pt-BR": {
    pageTitle: "The Staff | Bot moderador Telegram, anti-spam e segurança para grupos",
    metaDescription:
      "The Staff é um bot moderador Telegram para proteger grupos contra spam, flood, links suspeitos, bots, NSFW/GORE, advertências e ban automático.",
    metaKeywords:
      "bot telegram, bots para telegram, bot moderador telegram, bot de moderação telegram, bot anti-spam telegram, bot para grupo telegram, moderação automática telegram, segurança para grupos telegram, moderação visual telegram, bot nsfw telegram, ban automático telegram, advertências telegram, bloqueio de links telegram",
    navFeatures: "Recursos",
    navPricing: "Preço",
    navPlans: "Planos",
    navFaq: "FAQ",
    headerCta: "Ver planos",
    eyebrow: "Segurança automática para Telegram",
    heroTitle: "Bot de moderação de grupos do Telegram",
    heroLead:
      "Pare de perder tempo apagando spam manualmente. O The Staff protege sua comunidade contra links suspeitos, flood, bots, conteúdo indesejado e tentativas de burlar regras.",
    primaryCta: "Escolher meu plano",
    secondaryCta: "Ver proteções",
    trustOne: "Comece grátis",
    trustTwo: "Teste PRO por 7 dias",
    trustThree: "US$ 10/mês no PRO",
    panelStatus: "Proteção ativa",
    panelRisk: "Risco do grupo",
    panelRiskValue: "Controlado",
    feedSpam: "Mensagem repetida bloqueada antes de atingir o grupo.",
    feedLink: "Link suspeito enviado para análise e removido.",
    feedCaptcha: "Novo membro validado antes de falar no chat.",
    statMonitoring: "monitorando",
    statControls: "controles",
    statMode: "sem anúncios",
    trialStartCta: "Começar agora trial 7 dias",
    seoEyebrow: "Bot moderador Telegram",
    seoTitle: "Bots para Telegram precisam de segurança real, não só comandos básicos.",
    seoText:
      "O The Staff funciona como bot anti-spam Telegram, bot de moderação para grupos e camada de segurança automática para comunidades que precisam bloquear flood, links suspeitos, bots, convites privados e conteúdo proibido com mais controle.",
    visualEyebrow: "Prova de eficiência",
    visualTitle: "O The Staff agindo dentro do Telegram, não só prometendo proteção.",
    visualText:
      "A galeria mostra a identidade do bot e prints reais de moderação: remoção de mensagem, advertências progressivas e ban automático quando uma regra visual é violada.",
    visualMainCaption: "The Staff: bot de segurança para grupos Telegram.",
    visualProofOneCaption: "Bloqueio visual com ban após 3 advertências.",
    visualProofTwoCaption: "Advertências progressivas e punição automática.",
    problemEyebrow: "O problema",
    problemTitle: "Administrar manualmente fica pesado quando a comunidade cresce.",
    problemText:
      "Quanto mais membros, mais mensagens, mais links, mais riscos e mais trabalho para os administradores. O The Staff entra como uma camada de proteção constante para reduzir bagunça, bloquear abuso e deixar seus admins focados nas decisões importantes.",
    solutionEyebrow: "A solução",
    solutionTitle: "Um segurança automático dentro do seu grupo Telegram.",
    solutionText:
      "Ative filtros, bloqueie links perigosos, limite flood, use captcha, registre logs, aplique advertências e mantenha o grupo limpo sem monitorar cada mensagem o tempo todo. Comece no Free, teste o PRO por 7 dias e mantenha o nível certo de proteção para o tamanho da sua comunidade.",
    caseSalesTitle: "Grupos de vendas",
    caseSalesText: "Reduza golpes, links externos e mensagens repetidas.",
    caseCryptoTitle: "Cripto e tecnologia",
    caseCryptoText: "Controle links suspeitos, flood e usuários mal-intencionados.",
    caseStudyTitle: "Estudos e comunidades",
    caseStudyText: "Mantenha conversas organizadas e regras aplicadas com consistência.",
    featuresEyebrow: "Recursos principais",
    featuresTitle: "Ferramentas para vender mais confiança e proteger o grupo no dia a dia.",
    featureAntiSpam: "Anti-spam",
    featureAntiSpamDesc: "Bloqueia mensagens repetitivas e comportamento típico de divulgação automática.",
    featureAntiFlood: "Anti-flood",
    featureAntiFloodDesc: "Limita excesso de mensagens seguidas para manter o chat legível.",
    featureSuspiciousLinks: "Bloqueio de links suspeitos",
    featureSuspiciousLinksDesc: "Detecta URLs arriscadas, mascaradas ou usadas para golpes.",
    featurePrivateLinks: "Proteção contra links privados",
    featurePrivateLinksDesc: "Ajuda a bloquear convites privados e redirecionamentos indesejados.",
    featureCaptcha: "Captcha para novos membros",
    featureCaptchaDesc: "Valida novos usuários antes que possam falar no grupo.",
    featureWarnings: "Sistema de advertências",
    featureWarningsDesc: "Registra infrações e permite agir antes de punir definitivamente.",
    featurePunishments: "Punições automáticas",
    featurePunishmentsDesc: "Aplica ações configuradas quando regras são quebradas.",
    featureEdited: "Moderação de mensagens editadas",
    featureEditedDesc: "Reanalisa edições para impedir links ou termos inseridos depois.",
    featureWords: "Filtro de palavras proibidas",
    featureWordsDesc: "Remove termos indesejados conforme a lista definida pelo admin.",
    featureLogs: "Logs de ações",
    featureLogsDesc: "Mostra o que foi bloqueado, punido ou analisado pelo bot.",
    featurePerGroup: "Configuração individual por grupo",
    featurePerGroupDesc: "Permite regras diferentes para cada comunidade administrada.",
    featurePlans: "Plano gratuito, teste grátis e PRO sem anúncios",
    featurePlansDesc: "Comece sem custo, teste o completo e evolua quando precisar.",
    priceEyebrow: "Preço mensal",
    priceTitle: "US$ 10,00 fixos por mês.",
    priceText:
      "O valor base do The Staff é cotado em dólar. A tela abaixo converte o preço mensal para Monero e reais usando cotação atualizada no navegador. Você vê o custo antes de decidir e escolhe o plano ideal logo abaixo.",
    refreshRates: "Atualizar cotação",
    usdLabel: "Preço fixo",
    usdNote: "Cobrado mensalmente.",
    xmrLabel: "Equivalente em Monero",
    xmrNote: "Com base no preço atual do XMR em dólar.",
    brlLabel: "Equivalente em reais",
    brlNote: "Com base na cotação atual USD/BRL.",
    loadingRate: "Atualizando...",
    rateLoading: "Buscando cotações...",
    rateUpdated: "Cotações atualizadas em {time}.",
    rateUnavailable: "Cotação indisponível agora. Tente atualizar novamente.",
    telegramCta: "Abrir no Telegram",
    telegramFloatCta: "Fale comigo",
    viewPlansCta: "Ver planos",
    faqEyebrow: "FAQ",
    faqTitle: "Dúvidas comuns",
    faqOneQuestion: "O bot substitui administradores?",
    faqOneAnswer:
      "Não. Ele automatiza tarefas repetitivas e reduz riscos, mas os admins continuam definindo regras, configurações e decisões importantes.",
    faqTwoQuestion: "Funciona para grupos públicos e privados?",
    faqTwoAnswer:
      "A proposta é atender grupos públicos, privados e comunidades conectadas a canais, com configuração individual por grupo.",
    faqThreeQuestion: "O pagamento e mensal?",
    faqThreeAnswer:
      "Sim. O preço PRO informado nesta página é mensal, com base fixa de US$ 10,00.",
    faqFourQuestion: "O The Staff é um bot moderador Telegram?",
    faqFourAnswer:
      "Sim. Ele foi criado para moderação automática de grupos Telegram, com anti-spam, anti-flood, captcha, bloqueio de links suspeitos, advertências e logs.",
    faqFiveQuestion: "Ele serve como bot anti-spam Telegram?",
    faqFiveAnswer:
      "Sim. O The Staff ajuda a reduzir spam, flood, links suspeitos e tentativas de bypass em grupos pequenos, médios e grandes.",
    faqSixQuestion: "O bot aplica advertências e ban automático?",
    faqSixAnswer:
      "Sim. O The Staff pode aplicar advertências progressivas e punições automáticas, incluindo ban, quando o usuário atinge o limite configurado pelo administrador.",
    backTop: "Voltar ao topo",
    plansEyebrow: "Planos",
    plansTitle: "Escolha o nível de proteção certo para o seu grupo.",
    plansText:
      "Comece com proteção básica, teste o The Staff completo por 7 dias ou mantenha o PRO ativo para grupos que precisam de moderação séria todos os dias.",
    planIndicatedLabel: "Indicado para:",
    planIncludedTitle: "Inclui",
    planLimitationsTitle: "Limitações",
    freeKicker: "Free",
    freeTitle: "Free",
    freePrice: "Preço: grátis",
    freeFit: "grupos pequenos, testes básicos e admins que querem proteção inicial.",
    freeFeature1: "Proteção básica contra spam",
    freeFeature2: "Filtro básico de palavras proibidas",
    freeFeature3: "Filtro básico de links públicos",
    freeFeature4: "Detecção de links mascarados simples",
    freeFeature5: "Bloqueio de alguns convites suspeitos",
    freeFeature6: "Anti-flood básico",
    freeFeature7: "Sistema de advertências",
    freeFeature8: "Punição automática simples",
    freeFeature9: "Logs básicos de moderação",
    freeFeature10: "Configuração por grupo",
    freeFeature11: "Suporte a múltiplos grupos, com limite baixo",
    freeFeature12: "Mensagem promocional automática do The Staff a cada 48h nos grupos.",
    freeLimit1: "Com anúncios do The Staff no grupo",
    freeLimit2: "Sem moderação visual NSFW",
    freeLimit3: "Sem moderação visual GORE",
    freeLimit4: "Sem análise de vídeo",
    freeLimit5: "Sem captcha avançado",
    freeLimit6: "Sem proteção avançada contra links privados",
    freeLimit7: "Sem análise visual de foto de destino de links Telegram",
    freeLimit8: "Sem whitelist/blacklist avançada completa",
    freeLimit9: "Sem prioridade em suporte",
    freeLimit10: "Sem ajustes avançados de punição",
    freeLimit11: "Limite de grupos e logs recentes",
    freeLimit12: "Sem acesso a recursos premium futuros",
    freeCta: "Comece agora a moderar seu grupo pequeno",
    trialKicker: "Trial 7 dias grátis",
    trialTitle: "Teste o The Staff completo",
    trialPrice: "Preço: grátis por 7 dias",
    trialFit: "admins que querem testar o The Staff completo antes de pagar.",
    visualHighlightNsfw: "Moderação visual NSFW",
    visualHighlightGore: "Moderação visual GORE",
    trialFeature1: "Todos os recursos do Free",
    trialFeature2: "Sem anúncios",
    trialFeature3: "Moderação visual NSFW",
    trialFeature4: "Moderação visual GORE",
    trialFeature5: "Análise de imagens",
    trialFeature6: "Análise de vídeos, se habilitada no servidor",
    trialFeature7: "Captcha para novos membros",
    trialFeature8: "Proteção avançada contra flood",
    trialFeature9: "Proteção avançada contra links suspeitos",
    trialFeature10: "Bloqueio de convites privados",
    trialFeature11: "Detecção de joinchat e links mascarados",
    trialFeature12: "Detecção de links adicionados por edição de mensagem",
    trialFeature13: "Whitelist de links/domínios",
    trialFeature14: "Blacklist de links/domínios/keywords",
    trialFeature15: "Logs visuais recentes",
    trialFeature16: "Logs de links recentes",
    trialFeature17: "Configuração individual por grupo",
    trialFeature18: "Punições automáticas completas",
    trialFeature19: "Proteção contra tentativa de bypass",
    trialFeature20: "Acesso aos comandos premium",
    trialFeature21: "Experiência completa sem compromisso",
    trialLimit1: "Dura apenas 7 dias",
    trialLimit2: "Após o fim do trial, se não assinar, o grupo volta automaticamente para o plano Free",
    trialLimit3: "Ao voltar para Free, anúncios são ativados",
    trialLimit4: "Recursos premium são desativados",
    trialLimit5: "NSFW/GORE são desativados",
    trialLimit6: "Captcha premium pode ser desativado",
    trialLimit7: "Proteção avançada de links volta ao limite do Free",
    trialCta: "Experimente agora por 7 dias gratuitamente!",
    proKicker: "Plano PRO",
    proTitle: "Staff PRO",
    proPrice: "US$ 10/mês",
    proFit:
      "grupos médios/grandes, comunidades sérias, grupos pagos, crypto, vendas, estudos, tech e canais com grupo de discussão.",
    proFeature1: "Todos os recursos do Free",
    proFeature2: "Sem anúncios",
    proFeature3: "Moderação visual NSFW",
    proFeature4: "Moderação visual GORE",
    proFeature5: "Análise de fotos",
    proFeature6: "Análise de vídeos por frames/thumbnail, conforme configuração",
    proFeature7: "Captcha para novos membros",
    proFeature8: "Anti-flood avançado",
    proFeature9: "Proteção avançada contra links suspeitos",
    proFeature10: "Bloqueio de convites privados",
    proFeature11: "Detecção de links joinchat",
    proFeature12: "Detecção de links mascarados",
    proFeature13: "Detecção de encurtadores",
    proFeature14: "Detecção de links embutidos",
    proFeature15: "Detecção de links em captions",
    proFeature16: "Detecção de links em botões inline",
    proFeature17: "Moderação de mensagens editadas",
    proFeature18: "Whitelist de links/domínios/usernames",
    proFeature19: "Blacklist de links/domínios/usernames/keywords",
    proFeature20: "Análise de título/descrição de links Telegram",
    proFeature21: "Análise visual de foto de destino de links Telegram, quando possível",
    proFeature22: "Logs avançados de moderação",
    proFeature23: "Logs recentes de links",
    proFeature24: "Logs recentes de visual",
    proFeature25: "Punições automáticas configuráveis",
    proFeature26: "Regras isoladas por grupo",
    proFeature27: "Multi-grupo",
    proFeature28: "Acesso a melhorias premium futuras",
    proFeature29: "Suporte prioritário",
    proCta: "Comece agora a moderar seu grande grupo por $10/mês"
  },
  "en-US": {
    pageTitle: "Telegram group moderation bot | The Staff",
    metaDescription:
      "The Staff is a Telegram moderation bot that protects groups from spam, flood, suspicious links, bots, NSFW/GORE, warnings and automatic bans.",
    metaKeywords:
      "telegram bot, telegram bots, telegram moderator bot, telegram moderation bot, telegram anti-spam bot, telegram group bot, automatic telegram moderation, telegram group security, telegram visual moderation, telegram nsfw bot, telegram automatic ban, telegram warnings, telegram link blocking",
    navFeatures: "Features",
    navPricing: "Pricing",
    navPlans: "Plans",
    navFaq: "FAQ",
    headerCta: "View plans",
    eyebrow: "Automatic security for Telegram",
    heroTitle: "Telegram group moderation bot",
    heroLead:
      "Stop wasting time deleting spam manually. The Staff protects your community from suspicious links, flood, bots, unwanted content and attempts to bypass rules.",
    primaryCta: "Choose my plan",
    secondaryCta: "View protections",
    trustOne: "Start free",
    trustTwo: "Try PRO for 7 days",
    trustThree: "US$10/month on PRO",
    panelStatus: "Protection active",
    panelRisk: "Group risk",
    panelRiskValue: "Controlled",
    feedSpam: "Repeated message blocked before reaching the group.",
    feedLink: "Suspicious link sent for analysis and removed.",
    feedCaptcha: "New member verified before speaking in chat.",
    statMonitoring: "monitoring",
    statControls: "controls",
    statMode: "ad-free",
    trialStartCta: "Start your 7-day trial now",
    seoEyebrow: "Telegram moderator bot",
    seoTitle: "Telegram bots need real security, not only basic commands.",
    seoText:
      "The Staff works as a Telegram anti-spam bot, group moderation bot and automatic security layer for communities that need to block flood, suspicious links, bots, private invites and forbidden content with more control.",
    visualEyebrow: "Proof of efficiency",
    visualTitle: "The Staff acting inside Telegram, not just promising protection.",
    visualText:
      "The gallery shows the bot identity and real moderation screenshots: message removal, progressive warnings and automatic ban when a visual rule is violated.",
    visualMainCaption: "The Staff: security bot for Telegram groups.",
    visualProofOneCaption: "Visual blocking with ban after 3 warnings.",
    visualProofTwoCaption: "Progressive warnings and automatic punishment.",
    problemEyebrow: "The problem",
    problemTitle: "Manual administration becomes heavy as the community grows.",
    problemText:
      "More members mean more messages, more links, more risks and more work for administrators. The Staff works as a constant protection layer to reduce chaos, block abuse and keep your admins focused on important decisions.",
    solutionEyebrow: "The solution",
    solutionTitle: "An automatic security guard inside your Telegram group.",
    solutionText:
      "Enable filters, block dangerous links, limit flood, use captcha, register logs, apply warnings and keep the group clean without monitoring every message all the time. Start on Free, test PRO for 7 days and keep the right protection level for your community size.",
    caseSalesTitle: "Sales groups",
    caseSalesText: "Reduce scams, external links and repeated messages.",
    caseCryptoTitle: "Crypto and technology",
    caseCryptoText: "Control suspicious links, flood and malicious users.",
    caseStudyTitle: "Study groups and communities",
    caseStudyText: "Keep conversations organized and rules applied consistently.",
    featuresEyebrow: "Main features",
    featuresTitle: "Tools to sell more trust and protect the group every day.",
    featureAntiSpam: "Anti-spam",
    featureAntiSpamDesc: "Blocks repetitive messages and typical automated promotion behavior.",
    featureAntiFlood: "Anti-flood",
    featureAntiFloodDesc: "Limits message bursts so the chat stays readable.",
    featureSuspiciousLinks: "Suspicious link blocking",
    featureSuspiciousLinksDesc: "Detects risky, masked or scam-oriented URLs.",
    featurePrivateLinks: "Private link protection",
    featurePrivateLinksDesc: "Helps block private invites and unwanted redirects.",
    featureCaptcha: "Captcha for new members",
    featureCaptchaDesc: "Verifies new users before they can speak in the group.",
    featureWarnings: "Warning system",
    featureWarningsDesc: "Records violations and allows action before final punishment.",
    featurePunishments: "Automatic punishments",
    featurePunishmentsDesc: "Applies configured actions when rules are broken.",
    featureEdited: "Edited message moderation",
    featureEditedDesc: "Rechecks edits to stop links or terms added later.",
    featureWords: "Forbidden word filter",
    featureWordsDesc: "Removes unwanted terms based on the admin-defined list.",
    featureLogs: "Action logs",
    featureLogsDesc: "Shows what the bot blocked, punished or analyzed.",
    featurePerGroup: "Individual configuration per group",
    featurePerGroupDesc: "Allows different rules for each managed community.",
    featurePlans: "Free plan, free trial and ad-free PRO",
    featurePlansDesc: "Start free, test the full version and upgrade when needed.",
    priceEyebrow: "Monthly price",
    priceTitle: "Fixed US$10.00 per month.",
    priceText:
      "The Staff base price is quoted in US dollars. The board below converts the monthly price to Monero and Brazilian reais using live rates in the browser. You see the cost before deciding and choose the ideal plan below.",
    refreshRates: "Refresh rates",
    usdLabel: "Fixed price",
    usdNote: "Billed monthly.",
    xmrLabel: "Monero equivalent",
    xmrNote: "Based on the current XMR price in US dollars.",
    brlLabel: "Brazilian real equivalent",
    brlNote: "Based on the current USD/BRL rate.",
    loadingRate: "Updating...",
    rateLoading: "Fetching rates...",
    rateUpdated: "Rates updated at {time}.",
    rateUnavailable: "Rates are unavailable right now. Try refreshing again.",
    telegramCta: "Open on Telegram",
    telegramFloatCta: "Talk to me",
    viewPlansCta: "View plans",
    faqEyebrow: "FAQ",
    faqTitle: "Common questions",
    faqOneQuestion: "Does the bot replace administrators?",
    faqOneAnswer:
      "No. It automates repetitive tasks and reduces risk, but admins still define rules, settings and important decisions.",
    faqTwoQuestion: "Does it work for public and private groups?",
    faqTwoAnswer:
      "The goal is to support public groups, private groups and communities connected to channels, with individual configuration per group.",
    faqThreeQuestion: "Is payment monthly?",
    faqThreeAnswer:
      "Yes. The PRO price shown on this page is monthly, with a fixed US$10.00 base.",
    faqFourQuestion: "Is The Staff a Telegram moderator bot?",
    faqFourAnswer:
      "Yes. It was built for automatic Telegram group moderation with anti-spam, anti-flood, captcha, suspicious-link blocking, warnings and logs.",
    faqFiveQuestion: "Does it work as a Telegram anti-spam bot?",
    faqFiveAnswer:
      "Yes. The Staff helps reduce spam, flood, suspicious links and bypass attempts in small, medium and large groups.",
    faqSixQuestion: "Does the bot apply warnings and automatic bans?",
    faqSixAnswer:
      "Yes. The Staff can apply progressive warnings and automatic punishments, including bans, when the user reaches the limit configured by the administrator.",
    backTop: "Back to top",
    plansEyebrow: "Plans",
    plansTitle: "Choose the right protection level for your group.",
    plansText:
      "Start with basic protection, test the full The Staff experience for 7 days or keep PRO active for groups that need serious moderation every day.",
    planIndicatedLabel: "Best for:",
    planIncludedTitle: "Included",
    planLimitationsTitle: "Limitations",
    freeKicker: "Free",
    freeTitle: "Free",
    freePrice: "Price: free",
    freeFit: "small groups, basic tests and admins who want initial protection.",
    freeFeature1: "Basic spam protection",
    freeFeature2: "Basic forbidden-word filter",
    freeFeature3: "Basic public-link filter",
    freeFeature4: "Simple masked-link detection",
    freeFeature5: "Blocking for some suspicious invites",
    freeFeature6: "Basic anti-flood",
    freeFeature7: "Warning system",
    freeFeature8: "Simple automatic punishment",
    freeFeature9: "Basic moderation logs",
    freeFeature10: "Per-group configuration",
    freeFeature11: "Multiple-group support with a low limit",
    freeFeature12: "Automatic The Staff promotional message every 48h in groups.",
    freeLimit1: "Includes The Staff ads in the group",
    freeLimit2: "No visual NSFW moderation",
    freeLimit3: "No visual GORE moderation",
    freeLimit4: "No video analysis",
    freeLimit5: "No advanced captcha",
    freeLimit6: "No advanced protection against private links",
    freeLimit7: "No visual analysis of Telegram link destination photos",
    freeLimit8: "No full advanced whitelist/blacklist",
    freeLimit9: "No priority support",
    freeLimit10: "No advanced punishment adjustments",
    freeLimit11: "Group and recent-log limits",
    freeLimit12: "No access to future premium resources",
    freeCta: "Start moderating your small group now",
    trialKicker: "7-day free trial",
    trialTitle: "Test the full The Staff experience",
    trialPrice: "Price: free for 7 days",
    trialFit: "admins who want to test the full The Staff before paying.",
    visualHighlightNsfw: "Visual NSFW moderation",
    visualHighlightGore: "Visual GORE moderation",
    trialFeature1: "All Free resources",
    trialFeature2: "No ads",
    trialFeature3: "Visual NSFW moderation",
    trialFeature4: "Visual GORE moderation",
    trialFeature5: "Image analysis",
    trialFeature6: "Video analysis, if enabled on the server",
    trialFeature7: "Captcha for new members",
    trialFeature8: "Advanced flood protection",
    trialFeature9: "Advanced suspicious-link protection",
    trialFeature10: "Private invite blocking",
    trialFeature11: "Joinchat and masked-link detection",
    trialFeature12: "Detection of links added by message editing",
    trialFeature13: "Link/domain whitelist",
    trialFeature14: "Link/domain/keyword blacklist",
    trialFeature15: "Recent visual logs",
    trialFeature16: "Recent link logs",
    trialFeature17: "Individual configuration per group",
    trialFeature18: "Complete automatic punishments",
    trialFeature19: "Protection against bypass attempts",
    trialFeature20: "Access to premium commands",
    trialFeature21: "Full experience with no commitment",
    trialLimit1: "Lasts only 7 days",
    trialLimit2: "After the trial ends, if you do not subscribe, the group automatically returns to Free",
    trialLimit3: "When returning to Free, ads are enabled",
    trialLimit4: "Premium resources are disabled",
    trialLimit5: "NSFW/GORE are disabled",
    trialLimit6: "Premium captcha may be disabled",
    trialLimit7: "Advanced link protection returns to the Free limit",
    trialCta: "Try it free for 7 days now!",
    proKicker: "PRO plan",
    proTitle: "Staff PRO",
    proPrice: "US$10/month",
    proFit:
      "medium/large groups, serious communities, paid groups, crypto, sales, studies, tech and channels with discussion groups.",
    proFeature1: "All Free resources",
    proFeature2: "No ads",
    proFeature3: "Visual NSFW moderation",
    proFeature4: "Visual GORE moderation",
    proFeature5: "Photo analysis",
    proFeature6: "Video analysis by frames/thumbnail, depending on configuration",
    proFeature7: "Captcha for new members",
    proFeature8: "Advanced anti-flood",
    proFeature9: "Advanced suspicious-link protection",
    proFeature10: "Private invite blocking",
    proFeature11: "Joinchat link detection",
    proFeature12: "Masked-link detection",
    proFeature13: "Shortener detection",
    proFeature14: "Embedded-link detection",
    proFeature15: "Caption-link detection",
    proFeature16: "Inline-button link detection",
    proFeature17: "Edited-message moderation",
    proFeature18: "Link/domain/username whitelist",
    proFeature19: "Link/domain/username/keyword blacklist",
    proFeature20: "Telegram link title/description analysis",
    proFeature21: "Visual analysis of Telegram link destination photos, when possible",
    proFeature22: "Advanced moderation logs",
    proFeature23: "Recent link logs",
    proFeature24: "Recent visual logs",
    proFeature25: "Configurable automatic punishments",
    proFeature26: "Isolated rules per group",
    proFeature27: "Multi-group",
    proFeature28: "Access to future premium improvements",
    proFeature29: "Priority support",
    proCta: "Start moderating your large group now for $10/month"
  }
};

function readStoredLanguage() {
  try {
    return localStorage.getItem("the-staff-language");
  } catch (error) {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem("the-staff-language", language);
  } catch (error) {
    // The language switch still works for the current page when storage is blocked.
  }
}

let activeLanguage = readStoredLanguage() || "pt-BR";

const textNodes = document.querySelectorAll("[data-i18n]");
const languageButtons = document.querySelectorAll("[data-lang]");
const rateStatus = document.querySelector("#rate-status");
const usdPrice = document.querySelector("#usd-price");
const xmrPrice = document.querySelector("#xmr-price");
const brlPrice = document.querySelector("#brl-price");
const refreshRatesButton = document.querySelector("#refresh-rates");
const currentYear = document.querySelector("#current-year");

function getMetaPixelId() {
  const configuredId = window.THE_STAFF_META_PIXEL_ID || META_PIXEL_FALLBACK_ID;

  if (typeof configuredId !== "string") {
    return "";
  }

  const pixelId = configuredId.trim();
  const isPlaceholder = ["", "COLE_SEU_PIXEL_ID_AQUI", "YOUR_PIXEL_ID"].includes(pixelId);

  return isPlaceholder ? "" : pixelId;
}

function createMetaEventId(eventName) {
  const randomPart =
    window.crypto && typeof window.crypto.randomUUID === "function"
      ? window.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  return `the-staff-${eventName.toLowerCase()}-${randomPart}`;
}

function trackMetaEvent(eventName, parameters = {}) {
  if (!getMetaPixelId() || typeof window.fbq !== "function") {
    return;
  }

  window.fbq(
    "track",
    eventName,
    {
      source: "the_staff_landing_page",
      ...parameters
    },
    {
      eventID: createMetaEventId(eventName)
    }
  );
}

function trackMetaCustomEvent(eventName, parameters = {}) {
  if (!getMetaPixelId() || typeof window.fbq !== "function") {
    return;
  }

  window.fbq(
    "trackCustom",
    eventName,
    {
      source: "the_staff_landing_page",
      ...parameters
    },
    {
      eventID: createMetaEventId(eventName)
    }
  );
}

function initMetaPixel() {
  const pixelId = getMetaPixelId();

  if (!pixelId || typeof window.fbq === "function") {
    return;
  }

  (function loadMetaPixel(f, b, e, v, n, tElement, sElement) {
    if (f.fbq) {
      return;
    }

    n = f.fbq = function fbqQueue() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) {
      f._fbq = n;
    }
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    tElement = b.createElement(e);
    tElement.async = true;
    tElement.src = v;
    sElement = b.getElementsByTagName(e)[0];
    sElement.parentNode.insertBefore(tElement, sElement);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  window.fbq("init", pixelId);
  trackMetaEvent("PageView", {
    content_name: "The Staff landing page",
    content_category: "Telegram moderation bot"
  });
  trackMetaEvent("ViewContent", {
    content_name: "The Staff Telegram moderation bot",
    content_category: "Telegram security bot",
    content_ids: ["the-staff-pro"],
    content_type: "product",
    value: MONTHLY_PRICE_USD,
    currency: "USD"
  });
}

function normalizeUrl(url) {
  return url.replace(/\/$/, "");
}

function getCtaText(link) {
  return link.textContent.replace(/\s+/g, " ").trim();
}

function initAdClickTracking() {
  document.querySelectorAll('a[href^="https://t.me/"]').forEach((link) => {
    link.addEventListener("click", () => {
      const targetUrl = normalizeUrl(link.href);

      if (targetUrl === BOT_TELEGRAM_URL) {
        trackMetaEvent("Lead", {
          content_name: "Open The Staff bot",
          content_category: "Telegram bot trial",
          cta_text: getCtaText(link),
          value: MONTHLY_PRICE_USD,
          currency: "USD"
        });
        return;
      }

      if (targetUrl === CONTACT_TELEGRAM_URL) {
        trackMetaEvent("Contact", {
          content_name: "Contact TrueKatz666 on Telegram",
          content_category: "Telegram support contact",
          cta_text: getCtaText(link)
        });
      }
    });
  });
}

function initInternalClickTracking() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const destination = link.getAttribute("href");

      if (!destination || destination === "#") {
        return;
      }

      trackMetaCustomEvent("InternalButtonClick", {
        content_name: "Internal landing page click",
        content_category: "Landing page navigation",
        cta_text: getCtaText(link),
        destination
      });
    });
  });

  refreshRatesButton.addEventListener("click", () => {
    trackMetaCustomEvent("InternalButtonClick", {
      content_name: "Refresh pricing rates",
      content_category: "Pricing interaction",
      cta_text: getCtaText(refreshRatesButton),
      destination: "#preco"
    });
  });
}

function initScrollReveal() {
  const revealElements = Array.from(
    document.querySelectorAll(
      [
        ".section-band:not(.hero) .section-heading",
        ".split-section > *",
        ".use-case-grid article",
        ".feature-grid article",
        ".preview-figure",
        ".pricing-copy",
        ".price-board article",
        ".plan-card",
        ".faq-list details"
      ].join(", ")
    )
  );

  if (!revealElements.length) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  revealElements.forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 60}ms`);
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.14
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function t(key) {
  return translations[activeLanguage][key] || translations["pt-BR"][key] || key;
}

function setMeta(name, content) {
  const meta = document.querySelector(`meta[name="${name}"]`);
  if (meta) {
    meta.setAttribute("content", content);
  }
}

function setProperty(property, content) {
  const meta = document.querySelector(`meta[property="${property}"]`);
  if (meta) {
    meta.setAttribute("content", content);
  }
}

function applyLanguage(language) {
  activeLanguage = translations[language] ? language : "pt-BR";
  storeLanguage(activeLanguage);
  document.documentElement.lang = activeLanguage;
  document.title = t("pageTitle");

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  setMeta("description", t("metaDescription"));
  setMeta("keywords", t("metaKeywords"));
  setMeta("twitter:title", t("pageTitle"));
  setMeta("twitter:description", t("metaDescription"));
  setProperty("og:title", t("pageTitle"));
  setProperty("og:description", t("metaDescription"));
  setProperty("og:locale", activeLanguage === "pt-BR" ? "pt_BR" : "en_US");

  updateUsdPrice();
}

function updateUsdPrice() {
  usdPrice.textContent = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(MONTHLY_PRICE_USD);
}

function setLoadingRates() {
  xmrPrice.textContent = t("loadingRate");
  brlPrice.textContent = t("loadingRate");
  rateStatus.textContent = t("rateLoading");
}

function flashRateValues() {
  [xmrPrice, brlPrice].forEach((element) => {
    element.classList.remove("rate-value-updated");
    void element.offsetWidth;
    element.classList.add("rate-value-updated");
  });
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

async function updateRates() {
  setLoadingRates();

  try {
    const [exchangeData, cryptoData] = await Promise.all([
      fetchJson("https://open.er-api.com/v6/latest/USD"),
      fetchJson("https://api.coingecko.com/api/v3/simple/price?ids=monero&vs_currencies=usd")
    ]);

    const usdBrl = Number(exchangeData?.rates?.BRL);
    const xmrUsd = Number(cryptoData?.monero?.usd);

    if (!Number.isFinite(usdBrl) || !Number.isFinite(xmrUsd) || xmrUsd <= 0) {
      throw new Error("Invalid rate payload");
    }

    const brlValue = MONTHLY_PRICE_USD * usdBrl;
    const xmrValue = MONTHLY_PRICE_USD / xmrUsd;
    const locale = activeLanguage === "pt-BR" ? "pt-BR" : "en-US";

    brlPrice.textContent = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(brlValue);

    xmrPrice.textContent = `${xmrValue.toLocaleString(locale, {
      minimumFractionDigits: 6,
      maximumFractionDigits: 6
    })} XMR`;

    const time = new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date());

    rateStatus.textContent = t("rateUpdated").replace("{time}", time);
    flashRateValues();
  } catch (error) {
    xmrPrice.textContent = "--";
    brlPrice.textContent = "--";
    rateStatus.textContent = t("rateUnavailable");
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
    updateRates();
  });
});

refreshRatesButton.addEventListener("click", updateRates);

currentYear.textContent = new Date().getFullYear();
initScrollReveal();
applyLanguage(activeLanguage);
initMetaPixel();
initAdClickTracking();
initInternalClickTracking();
updateRates();
window.setInterval(updateRates, RATE_REFRESH_MS);
