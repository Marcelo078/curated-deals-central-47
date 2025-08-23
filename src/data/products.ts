export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: "saude" | "tecnologia" | "negocios";
  affiliateUrl: string;
  benefits: string[];
  content: {
    introduction: string;
    detailedDescription: string;
    howToUse: string;
    testimonials: string[];
    faq: Array<{ question: string; answer: string }>;
    differentials: string[];
  };
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
}

export const products: Product[] = [
  {
    id: "lift-detox-black",
    title: "Lift Detox Black",
    slug: "lift-detox-black",
    description: "Fórmula avançada que acelera o emagrecimento com ingredientes naturais na medida certa",
    category: "saude",
    affiliateUrl: "https://app.monetizze.com.br/r/AQB15367580",
    benefits: [
      "Acelera o metabolismo naturalmente",
      "Queima gordura localizada",
      "Desintoxica o organismo",
      "Aumenta a energia e disposição",
      "Reduz o inchaço corporal"
    ],
    content: {
      introduction: "O Lift Detox Black revoluciona o processo de emagrecimento com uma fórmula científica que combina os melhores ingredientes naturais para acelerar seu metabolismo e queimar gordura de forma segura e eficaz.",
      detailedDescription: "Desenvolvido com tecnologia avançada, o Lift Detox Black reúne ingredientes cuidadosamente selecionados e dosados na medida exata para proporcionar resultados superiores. Sua fórmula exclusiva atua diretamente no metabolismo, acelerando a queima de gordura e promovendo uma desintoxicação profunda do organismo. Diferente de outros produtos no mercado, não requer preparo de receitas complicadas ou a compra de ingredientes caros e difíceis de encontrar.",
      howToUse: "Para obter os melhores resultados, tome 2 cápsulas por dia, preferencialmente antes das principais refeições. Recomenda-se o uso contínuo por pelo menos 3 meses para resultados duradouros. Importante manter uma alimentação equilibrada e praticar atividades físicas regulares.",
      testimonials: [
        "Perdi 12kg em 2 meses usando Lift Detox Black! Minha energia aumentou muito e não sinto mais aquele inchaço após as refeições. - Maria Silva",
        "Finalmente encontrei algo que funciona! Em 6 semanas já eliminei 8kg e me sinto muito mais disposta. - Ana Costa",
        "O produto é incrível! Além de emagrecer, minha pele melhorou e durmo muito melhor. Recomendo! - Juliana Santos"
      ],
      faq: [
        {
          question: "Quanto tempo leva para ver os primeiros resultados?",
          answer: "Os primeiros resultados podem ser observados já nas primeiras semanas de uso, com redução do inchaço e aumento da disposição. A perda de peso significativa acontece a partir do primeiro mês de uso contínuo."
        },
        {
          question: "O produto tem alguma contraindicação?",
          answer: "O Lift Detox Black é composto por ingredientes naturais, mas é importante consultar um médico antes do uso, especialmente se você tiver alguma condição médica específica ou estiver tomando medicamentos."
        },
        {
          question: "Posso usar junto com outros suplementos?",
          answer: "Sim, mas é recomendável consultar um profissional de saúde para avaliar possíveis interações e garantir o uso seguro."
        }
      ],
      differentials: [
        "Fórmula exclusiva com ingredientes premium",
        "Tecnologia avançada de absorção",
        "Sem necessidade de preparo complicado",
        "Resultados comprovados cientificamente",
        "Ingredientes 100% naturais"
      ]
    },
    keywords: ["emagrecimento", "detox", "queima gordura", "metabolismo", "natural"],
    metaTitle: "Lift Detox Black - Emagreça Naturalmente com Fórmula Avançada",
    metaDescription: "Descubra o Lift Detox Black, o suplemento natural que acelera seu metabolismo e queima gordura de forma segura. Resultados visíveis em poucas semanas!"
  },
  {
    id: "sb2-turbo",
    title: "SB2 Turbo",
    slug: "sb2-turbo",
    description: "O suplemento alimentar definitivo para quem já tentou tudo e não conseguiu resultados",
    category: "saude",
    affiliateUrl: "https://app.monetizze.com.br/r/AXC11504216",
    benefits: [
      "Fórmula exclusiva para casos resistentes",
      "Acelera resultados quando outros falharam",
      "Melhora absorção de nutrientes",
      "Aumenta energia e vitalidade",
      "Acesso limitado - produto premium"
    ],
    content: {
      introduction: "O SB2 Turbo foi especialmente desenvolvido para pessoas que já investiram milhares de reais em produtos que não funcionaram. Uma fórmula revolucionária com acesso limitado a apenas 500 pessoas por mês.",
      detailedDescription: "Após anos de pesquisa e desenvolvimento, criamos o SB2 Turbo especificamente para casos resistentes - pessoas que já tentaram diversos suplementos sem sucesso. Nossa fórmula exclusiva combina ingredientes de alta potência em concentrações precisas, proporcionando resultados onde outros produtos falharam. O acesso limitado garante qualidade premium e acompanhamento personalizado para cada usuário.",
      howToUse: "Siga rigorosamente o protocolo personalizado que acompanha o produto. Geralmente recomenda-se o uso de 1-2 cápsulas por dia, conforme orientação específica. O acompanhamento é essencial para ajustes na dosagem conforme a resposta individual.",
      testimonials: [
        "Depois de gastar mais de R$ 5.000 em produtos que não funcionaram, o SB2 Turbo finalmente me deu os resultados que eu procurava! - Roberto Lima",
        "Sou uma dessas pessoas resistentes e o SB2 foi a única coisa que funcionou comigo. Valeu cada centavo! - Carla Mendes",
        "Incrível! Em 45 dias tive mais resultados do que em anos tentando outros produtos. - Fernando Silva"
      ],
      faq: [
        {
          question: "Por que o acesso é limitado?",
          answer: "Limitamos a 500 pessoas por mês para garantir qualidade premium dos ingredientes e acompanhamento personalizado para cada usuário, maximizando os resultados."
        },
        {
          question: "Como sei se sou um caso resistente?",
          answer: "Se você já tentou 3 ou mais suplementos diferentes sem resultados satisfatórios, ou investiu mais de R$ 1.000 em produtos sem sucesso, você se qualifica para o SB2 Turbo."
        },
        {
          question: "Quanto tempo até ver resultados?",
          answer: "Por ser formulado para casos resistentes, os resultados costumam aparecer entre 2-4 semanas, sendo mais intensos que produtos convencionais."
        }
      ],
      differentials: [
        "Exclusivo para casos resistentes",
        "Acesso limitado - premium",
        "Fórmula de alta potência",
        "Acompanhamento personalizado",
        "Garantia diferenciada"
      ]
    },
    keywords: ["suplemento", "casos resistentes", "premium", "alta potência", "exclusivo"],
    metaTitle: "SB2 Turbo - Suplemento Premium para Casos Resistentes",
    metaDescription: "SB2 Turbo: o suplemento que funciona quando todos os outros falharam. Fórmula exclusiva para casos resistentes. Acesso limitado!"
  },
  {
    id: "lovable-ia",
    title: "Lovable IA",
    slug: "lovable-ia",
    description: "Plataforma revolucionária para criar códigos de SaaS profissionais em segundos",
    category: "tecnologia",
    affiliateUrl: "https://lovable.dev/?via=marcelo-barbosa",
    benefits: [
      "Crie aplicações SaaS completas rapidamente",
      "Interface intuitiva e poderosa",
      "Código limpo e profissional",
      "Economize tempo e recursos",
      "Suporte para múltiplas tecnologias"
    ],
    content: {
      introduction: "A Lovable IA revoluciona o desenvolvimento de software, permitindo criar aplicações SaaS completas e profissionais em questão de segundos, sem necessidade de conhecimento técnico avançado.",
      detailedDescription: "Fundada em 2023 por Anton Osika e Fabian Hedin, a Lovable é uma plataforma de inteligência artificial voltada para a criação automatizada de aplicações web. Com tecnologia de ponta, a plataforma permite que empreendedores, startups e desenvolvedores criem sistemas complexos de forma rápida e eficiente. A IA compreende requisitos em linguagem natural e gera código profissional, incluindo frontend, backend, banco de dados e integrações.",
      howToUse: "Acesse a plataforma, descreva sua ideia de aplicação em linguagem natural, e a IA gerará automaticamente o código completo. Você pode refinar, customizar e fazer alterações em tempo real. A plataforma oferece deploy automático e hospedagem integrada.",
      testimonials: [
        "Criei minha startup SaaS em 2 dias com a Lovable! Incrível como a IA entende exatamente o que preciso. - João Entrepreneur",
        "Economizei meses de desenvolvimento. A qualidade do código gerado é impressionante. - Sarah Developer",
        "Transformou minha ideia em realidade sem precisar contratar uma equipe inteira. - Marcus Business"
      ],
      faq: [
        {
          question: "Preciso saber programar para usar a Lovable?",
          answer: "Não! A Lovable foi criada para que qualquer pessoa possa criar aplicações profissionais usando apenas linguagem natural. Conhecimento técnico é opcional."
        },
        {
          question: "Que tipos de aplicações posso criar?",
          answer: "SaaS, e-commerce, dashboards, CRMs, aplicações móveis, APIs, integrações e muito mais. A plataforma é versátil e poderosa."
        },
        {
          question: "O código gerado é de boa qualidade?",
          answer: "Sim! A IA gera código limpo, documentado e seguindo melhores práticas da indústria. É código que você pode usar em produção."
        }
      ],
      differentials: [
        "IA de última geração",
        "Criação em segundos",
        "Código profissional",
        "Deploy automático",
        "Sem necessidade de programação"
      ]
    },
    keywords: ["IA", "SaaS", "desenvolvimento", "código", "automação"],
    metaTitle: "Lovable IA - Crie SaaS Profissionais em Segundos com IA",
    metaDescription: "Descubra a Lovable IA: plataforma revolucionária que cria aplicações SaaS completas automaticamente. Transforme suas ideias em código profissional!"
  },
  {
    id: "hostinger",
    title: "Hostinger",
    slug: "hostinger",
    description: "Hospedagem de sites profissional com domínios inclusos e suporte premium",
    category: "tecnologia",
    affiliateUrl: "https://hostinger.com.br?REFERRALCODE=1W8MARCELJCB",
    benefits: [
      "Hospedagem rápida e confiável",
      "Domínios gratuitos inclusos",
      "SSL gratuito para segurança",
      "Suporte 24/7 especializado",
      "Painel de controle intuitivo"
    ],
    content: {
      introduction: "A Hostinger oferece soluções completas de hospedagem web com performance superior, segurança avançada e suporte especializado para impulsionar seu negócio online.",
      detailedDescription: "Reconhecida mundialmente como uma das melhores provedoras de hospedagem, a Hostinger combina tecnologia de ponta com preços acessíveis. Oferece servidores ultra-rápidos, uptime de 99.9%, backups automáticos e ferramentas profissionais para criação e gerenciamento de sites. Ideal tanto para iniciantes quanto para desenvolvedores experientes, conta com datacenters globais e CDN integrado para máximo desempenho.",
      howToUse: "Escolha o plano ideal para seu projeto, registre seu domínio (gratuito no primeiro ano), configure sua hospedagem em minutos usando o painel intuitivo, e publique seu site com facilidade. Ferramentas one-click para WordPress, e-commerce e outras aplicações.",
      testimonials: [
        "Migrei para a Hostinger e meu site ficou 3x mais rápido! O suporte é excepcional. - Pedro Webmaster",
        "Uso há 2 anos e nunca tive problemas. Confiabilidade total para meus projetos. - Marina Digital",
        "Preço justo, qualidade premium. Recomendo para qualquer projeto online. - Lucas Tech"
      ],
      faq: [
        {
          question: "A hospedagem inclui domínio gratuito?",
          answer: "Sim! Todos os planos incluem registro de domínio gratuito no primeiro ano, além de SSL gratuito para segurança."
        },
        {
          question: "Qual é o tempo de atividade garantido?",
          answer: "Garantimos 99.9% de uptime com SLA. Nossa infraestrutura é monitorada 24/7 para máxima disponibilidade."
        },
        {
          question: "Posso migrar meu site de outro provedor?",
          answer: "Sim! Oferecemos migração gratuita com nossa equipe especializada. O processo é rápido e sem interrupções."
        }
      ],
      differentials: [
        "Velocidade superior com LiteSpeed",
        "Backups diários automáticos",
        "CDN global incluído",
        "Painel hPanel intuitivo",
        "Garantia de reembolso 30 dias"
      ]
    },
    keywords: ["hospedagem", "domínio", "site", "servidor", "web"],
    metaTitle: "Hostinger - Hospedagem Web Premium com Domínio Grátis",
    metaDescription: "Hospedagem Hostinger: servidores ultra-rápidos, domínio grátis, SSL incluído e suporte 24/7. A melhor escolha para seu site profissional!"
  },
  {
    id: "formula-negocio-online",
    title: "Fórmula Negócio Online",
    slug: "formula-negocio-online",
    description: "Curso completo que ensina como criar e escalar negócios online do zero",
    category: "negocios",
    affiliateUrl: "https://go.hotmart.com/E11195793E",
    benefits: [
      "Método testado e aprovado",
      "Do zero ao primeiro milhão",
      "Estratégias de marketing digital",
      "Mentoria e suporte completo",
      "Cases reais de sucesso"
    ],
    content: {
      introduction: "O Fórmula Negócio Online, criado por Alex Vargas, é o curso mais completo para quem quer construir um império digital partindo do absoluto zero, usando estratégias comprovadas que geraram milhões em faturamento.",
      detailedDescription: "Alex Vargas revela neste curso as estratégias exatas que o levaram de completo iniciante a multimilionário digital. O FNO não é apenas teoria - é um método prático, testado e refinado ao longo de anos, responsável por transformar milhares de vidas. O curso aborda desde os fundamentos do marketing digital até técnicas avançadas de conversão, automação e escala. Inclui cases reais, templates prontos, e acesso a uma comunidade exclusiva de empreendedores de sucesso.",
      howToUse: "Após a inscrição, você recebe acesso imediato à plataforma com mais de 200 aulas organizadas em módulos progressivos. Siga a sequência recomendada, implemente as estratégias apresentadas, participe da comunidade e aplique os templates fornecidos. Acompanhamento semanal com Alex e mentores.",
      testimonials: [
        "Sai do zero e faturei R$ 50.000 no primeiro mês aplicando o FNO. Mudou minha vida! - Carlos Empresário",
        "O método do Alex é incrível. Em 6 meses construí um negócio de 6 dígitos. - Fernanda Digital",
        "Melhor investimento da minha vida. Hoje tenho a liberdade financeira que sempre sonhei. - Ricardo Online"
      ],
      faq: [
        {
          question: "Preciso de conhecimento prévio em marketing?",
          answer: "Não! O FNO foi criado para iniciantes. Alex ensina desde o básico até estratégias avançadas, de forma didática e prática."
        },
        {
          question: "Quanto tempo leva para ver resultados?",
          answer: "Seguindo o método corretamente, os primeiros resultados aparecem entre 30-60 dias. Alguns alunos faturam já nas primeiras semanas."
        },
        {
          question: "Qual investimento inicial necessário?",
          answer: "Você pode começar com investimentos mínimos. O curso ensina como crescer organicamente e quando/como investir em anúncios."
        }
      ],
      differentials: [
        "Método do zero ao milhão",
        "Cases reais documentados",
        "Comunidade de empreendedores",
        "Templates e ferramentas prontas",
        "Acompanhamento direto com Alex"
      ]
    },
    keywords: ["negócio online", "marketing digital", "empreendedorismo", "renda extra", "Alex Vargas"],
    metaTitle: "Fórmula Negócio Online - Do Zero ao Primeiro Milhão Online",
    metaDescription: "Aprenda com Alex Vargas como criar negócios online milionários. Método comprovado, cases reais e comunidade exclusiva. Mude sua vida!"
  },
  {
    id: "carteira-estudante-digital",
    title: "Carteira Nacional do Estudante Digital",
    slug: "carteira-estudante-digital",
    description: "Carteira digital oficial que garante meia-entrada em eventos e cinema",
    category: "negocios",
    affiliateUrl: "https://app.monetizze.com.br/r/AWH25502896",
    benefits: [
      "Meia-entrada garantida por lei",
      "Válida em todo território nacional",
      "Processo 100% digital",
      "Economia de até 50% em ingressos",
      "Reconhecida oficialmente"
    ],
    content: {
      introduction: "A Carteira Nacional do Estudante Digital é o documento oficial que garante seu direito à meia-entrada em cinemas, teatros, shows e eventos esportivos em todo o Brasil, com processo totalmente online.",
      detailedDescription: "Reconhecida pela UNE (União Nacional dos Estudantes) e válida em todo território nacional, a Carteira Nacional do Estudante Digital é seu passaporte para economizar até 50% em entretenimento. O processo é 100% digital, rápido e seguro. A carteira tem validade de um ano e é aceita em todos os estabelecimentos que oferecem desconto estudantil. Além da economia financeira, você contribui para o movimento estudantil e tem acesso a benefícios exclusivos.",
      howToUse: "Preencha o formulário online com seus dados pessoais e acadêmicos, envie a documentação solicitada (foto, RG e comprovante de matrícula), efetue o pagamento e receba sua carteira digital em até 48 horas. Use apresentando o documento em seu smartphone nos locais de entretenimento.",
      testimonials: [
        "Já economizei mais de R$ 500 este ano só em cinema! Vale muito a pena ter a carteira. - Juliana Estudante",
        "Processo super rápido e fácil. Agora posso ir ao teatro sem pesar no orçamento. - Bruno Universitário",
        "Recomendo para todos os estudantes. A economia é real e significativa! - Amanda Acadêmica"
      ],
      faq: [
        {
          question: "A carteira digital tem a mesma validade da física?",
          answer: "Sim! A carteira digital tem exatamente a mesma validade legal que a física, garantindo meia-entrada em todos os estabelecimentos."
        },
        {
          question: "Quanto tempo demora para receber?",
          answer: "Após envio da documentação e aprovação, você recebe sua carteira digital em até 48 horas úteis."
        },
        {
          question: "Posso usar em qualquer estado do Brasil?",
          answer: "Sim! A Carteira Nacional do Estudante é válida em todo território nacional, em qualquer estabelecimento que oferece desconto estudantil."
        }
      ],
      differentials: [
        "Processo 100% online",
        "Válida nacionalmente",
        "Reconhecida pela UNE",
        "Entrega em 48h",
        "Economia garantida por lei"
      ]
    },
    keywords: ["carteira estudante", "meia entrada", "desconto", "cinema", "evento"],
    metaTitle: "Carteira Nacional do Estudante Digital - Meia-Entrada Garantida",
    metaDescription: "Obtenha sua Carteira Nacional do Estudante Digital e garanta meia-entrada em cinemas, shows e eventos. Processo 100% online!"
  },
  {
    id: "carteira-estudante-fisica",
    title: "Carteira Nacional do Estudante Física e Digital",
    slug: "carteira-estudante-fisica",
    description: "Carteira física e digital oficial para meia-entrada em ingressos e eventos",
    category: "negocios",
    affiliateUrl: "https://app.monetizze.com.br/r/AEG25503067",
    benefits: [
      "Carteira física + digital incluídas",
      "Válida em todo território nacional",
      "Meia-entrada garantida por lei",
      "Economia de até 50% em entretenimento",
      "Reconhecimento oficial"
    ],
    content: {
      introduction: "A única carteira que oferece tanto a versão física quanto digital, garantindo máxima praticidade e economia em todos os seus momentos de lazer e entretenimento.",
      detailedDescription: "Esqueça os ingressos caros! Com a Carteira Nacional do Estudante Física e Digital, você tem acesso aos melhores eventos, cinemas, teatros e shows pagando apenas metade do preço. Esta solução completa oferece tanto a carteira física tradicional quanto a versão digital moderna, garantindo que você sempre tenha sua identificação estudantil disponível. Reconhecida nacionalmente e aceita em todos os estabelecimentos que oferecem desconto estudantil.",
      howToUse: "Após o cadastro, você recebe primeiro a carteira digital (em até 48h) e depois a física pelos correios (5-10 dias úteis). Use a digital no smartphone ou apresente a física nos locais de entretenimento para garantir sua meia-entrada.",
      testimonials: [
        "Ter as duas versões é perfeito! Uso a digital no dia a dia e a física como backup. - Rafael Estudante",
        "Já economizei mais de R$ 800 este ano. Investimento que se paga rapidamente! - Camila Universitária", 
        "A praticidade de ter digital e física é incrível. Nunca mais pago inteira! - Diego Acadêmico"
      ],
      faq: [
        {
          question: "Recebo as duas versões no mesmo pedido?",
          answer: "Sim! Você recebe primeiro a versão digital em até 48h e depois a física pelos correios em 5-10 dias úteis."
        },
        {
          question: "As duas têm a mesma validade?",
          answer: "Sim! Tanto a carteira física quanto a digital têm validade de 1 ano e são oficialmente reconhecidas."
        },
        {
          question: "Posso usar em qualquer lugar do Brasil?",
          answer: "Sim! Ambas as versões são válidas em todo território nacional em estabelecimentos que oferecem desconto estudantil."
        }
      ],
      differentials: [
        "Dupla modalidade: física + digital",
        "Entrega expressa da versão digital",
        "Reconhecimento oficial nacional",
        "Máxima praticidade e segurança",
        "Melhor custo-benefício do mercado"
      ]
    },
    keywords: ["carteira estudante", "meia entrada", "desconto", "física", "digital"],
    metaTitle: "Carteira Estudante Física + Digital - Meia-Entrada Garantida",
    metaDescription: "Carteira Nacional do Estudante física e digital. Meia-entrada em cinemas, shows e eventos. Economia garantida com praticidade total!"
  },
  {
    id: "agenciagram",
    title: "Agênciagram",
    slug: "agenciagram", 
    description: "Sistema completo para ganhar seguidores reais e engajamento no Instagram",
    category: "negocios",
    affiliateUrl: "https://app.monetizze.com.br/r/ALZ12471991",
    benefits: [
      "Seguidores reais e engajados",
      "Crescimento orgânico garantido",
      "Estratégias profissionais comprovadas",
      "Aumento de vendas através do Instagram",
      "Suporte especializado incluso"
    ],
    content: {
      introduction: "O Agênciagram é o sistema mais completo para transformar seu Instagram em uma máquina de vendas, com estratégias profissionais para conquistar seguidores reais e altamente engajados.",
      detailedDescription: "Desenvolvido por especialistas em marketing digital, o Agênciagram revela os segredos por trás dos perfis de maior sucesso no Instagram. Não se trata apenas de ganhar seguidores, mas de construir uma audiência verdadeiramente engajada que se converte em clientes fiéis. O sistema inclui estratégias de conteúdo, técnicas de engajamento, automação inteligente e métodos comprovados para monetização através da plataforma. Ideal para empreendedores, influenciadores e empresas que querem dominar o Instagram.",
      howToUse: "Acesse a plataforma, implemente as estratégias passo a passo conforme os módulos, utilize as ferramentas fornecidas para criação de conteúdo e automação, e acompanhe o crescimento através dos relatórios detalhados. Suporte disponível para tirar dúvidas.",
      testimonials: [
        "Saí de 500 para 15.000 seguidores em 3 meses! Meu faturamento triplicou. - Marina Empreendedora",
        "As estratégias do Agênciagram são ouro puro. Engajamento real e vendas constantes. - Bruno Influencer",
        "Finalmente entendi como usar o Instagram para vender. Resultados desde a primeira semana! - Carla Business"
      ],
      faq: [
        {
          question: "Os seguidores são reais?",
          answer: "Sim! Todas as estratégias focam em atrair seguidores reais e engajados, interessados no seu nicho. Nada de bots ou seguidores falsos."
        },
        {
          question: "Quanto tempo para ver resultados?",
          answer: "Os primeiros resultados aparecem em 7-15 dias. Crescimento significativo em 30-60 dias, dependendo da dedicação na implementação."
        },
        {
          question: "Funciona para qualquer nicho?",
          answer: "Sim! As estratégias são adaptáveis para qualquer nicho: vendas, serviços, produtos físicos, infoprodutos, etc."
        }
      ],
      differentials: [
        "Foco em seguidores reais e engajados",
        "Estratégias de monetização incluídas",
        "Ferramentas de automação inteligente",
        "Suporte especializado",
        "Métodos testados e aprovados"
      ]
    },
    keywords: ["instagram", "seguidores", "marketing digital", "redes sociais", "engajamento"],
    metaTitle: "Agênciagram - Ganhe Seguidores Reais e Venda Mais no Instagram",
    metaDescription: "Descubra como ganhar seguidores reais no Instagram e transformar seu perfil em uma máquina de vendas com o Agênciagram!"
  },
  {
    id: "mounja-slim",
    title: "Mounja Slim",
    slug: "mounja-slim",
    description: "O segredo revolucionário para perda de peso rápida e saudável de forma natural",
    category: "saude", 
    affiliateUrl: "https://app.monetizze.com.br/r/AJZ25504136",
    benefits: [
      "Perda de peso rápida e saudável",
      "Ingredientes 100% naturais",
      "Acelera o metabolismo",
      "Reduz a compulsão alimentar",
      "Aumenta energia e disposição"
    ],
    content: {
      introduction: "O Mounja Slim revoluciona o emagrecimento com uma fórmula única que combina eficácia comprovada com ingredientes naturais, proporcionando perda de peso rápida sem comprometer sua saúde.",
      detailedDescription: "Desenvolvido após anos de pesquisa, o Mounja Slim representa o que há de mais avançado em suplementação para emagrecimento. Sua fórmula exclusiva atua em múltiplas frentes: acelera o metabolismo, reduz a compulsão por doces, melhora a queima de gordura localizada e aumenta significativamente os níveis de energia. Diferente de outros produtos no mercado, o Mounja Slim trabalha em harmonia com seu organismo, promovendo emagrecimento sustentável sem efeitos colaterais indesejados. A combinação precisa de ingredientes naturais garante resultados visíveis já nas primeiras semanas.",
      howToUse: "Tome 2 cápsulas ao dia, sendo 1 cápsula 30 minutos antes do almoço e 1 cápsula 30 minutos antes do jantar, sempre com um copo de água. Para melhores resultados, mantenha uma alimentação equilibrada e pratique atividades físicas regulares.",
      testimonials: [
        "Perdi 15kg em 3 meses com Mounja Slim! Me sinto uma nova pessoa, cheia de energia. - Patrícia Silva",
        "Finalmente encontrei algo que funciona de verdade. Sem efeitos colaterais e resultados incríveis! - Roberto Costa", 
        "O Mounja Slim mudou minha vida. Eliminei 20kg e mantenho o peso facilmente. - Ana Beatriz"
      ],
      faq: [
        {
          question: "Em quanto tempo vejo os primeiros resultados?",
          answer: "Os primeiros resultados são visíveis entre 7-15 dias, com redução do inchaço e aumento da disposição. A perda de peso significativa acontece a partir da terceira semana."
        },
        {
          question: "Tem algum efeito colateral?",
          answer: "Não! O Mounja Slim é composto 100% por ingredientes naturais e não causa efeitos colaterais quando usado conforme as instruções."
        },
        {
          question: "Preciso fazer dieta restritiva?",
          answer: "Não é necessário dieta restritiva. O produto ajuda a controlar a compulsão alimentar naturalmente, mas uma alimentação equilibrada potencializa os resultados."
        }
      ],
      differentials: [
        "Fórmula 100% natural",
        "Resultados rápidos e sustentáveis", 
        "Sem efeitos colaterais",
        "Controla compulsão alimentar",
        "Aumenta energia e disposição"
      ]
    },
    keywords: ["emagrecimento", "perda peso", "natural", "metabolismo", "mounja slim"],
    metaTitle: "Mounja Slim - Emagrecimento Rápido e Natural Sem Efeitos Colaterais",
    metaDescription: "Descubra o Mounja Slim: o segredo para perda de peso rápida e saudável com ingredientes naturais. Resultados visíveis em semanas!"
  },
  {
    id: "hidraliso",
    title: "Hidraliso - Alisante de Chuveiro",
    slug: "hidraliso",
    description: "Alisante revolucionário sem formol que alisa e hidrata na primeira aplicação",
    category: "saude",
    affiliateUrl: "https://app.monetizze.com.br/r/AWW11504208",
    benefits: [
      "Liso instantâneo na primeira aplicação",
      "Sem formol, sem ardência, sem cheiro",
      "Hidratação profunda garantida",
      "Compatível com qualquer química",
      "Efeito prolongado e duradouro"
    ],
    content: {
      introduction: "O Hidraliso revoluciona o cuidado capilar oferecendo alisamento profissional no conforto de casa, sem os riscos do formol e com hidratação intensa em uma única aplicação.",
      detailedDescription: "Desenvolvido com tecnologia de ponta, o Hidraliso é o primeiro alisante de chuveiro que combina alisamento eficaz com hidratação profunda, sem usar formol ou qualquer componente tóxico. Sua fórmula inovadora é adequada para todos os tipos de cabelo, desde os mais crespos até os ondulados, proporcionando fios lisos, sedosos e saudáveis. O produto não possui cheiro forte, não causa ardência no couro cabeludo e é totalmente seguro para uso doméstico. Além do alisamento, oferece proteção térmica e reparação capilar, deixando os fios visivelmente mais bonitos e manejáveis.",
      howToUse: "Lave o cabelo com shampoo, retire o excesso de água, aplique o Hidraliso mecha por mecha, deixe agir por 20-30 minutos, enxágue bem e finalize com secador e chapinha se desejar. Use a cada 15-20 dias para manutenção.",
      testimonials: [
        "Meu cabelo nunca ficou tão liso e hidratado! E sem cheiro ruim. Amei! - Fernanda Cabelos",
        "Uso há 6 meses e meu cabelo está irreconhecível. Liso natural e super saudável. - Juliana Hair",
        "Finalmente um alisante sem formol que funciona de verdade. Recomendo! - Carla Style"
      ],
      faq: [
        {
          question: "Funciona em cabelos muito crespos?",
          answer: "Sim! O Hidraliso é eficaz em todos os tipos de cabelo, desde ondulados até crespos. A intensidade do alisamento varia conforme o tipo de fio."
        },
        {
          question: "Posso usar se já tenho química no cabelo?",
          answer: "Sim! O Hidraliso é compatível com qualquer química anterior: relaxamento, tintura, luzes, etc. É totalmente seguro."
        },
        {
          question: "Quanto tempo dura o efeito?",
          answer: "O efeito dura entre 3-4 meses, dependendo do tipo de cabelo e cuidados. Para manutenção, use a cada 15-20 dias."
        }
      ],
      differentials: [
        "100% livre de formol",
        "Alisamento + hidratação em 1 produto",
        "Sem cheiro, sem ardência",
        "Compatível com qualquer química",
        "Uso doméstico seguro"
      ]
    },
    keywords: ["alisante", "cabelo", "hidratação", "sem formol", "liso"],
    metaTitle: "Hidraliso - Alisante de Chuveiro Sem Formol para Cabelos Lisos",
    metaDescription: "Hidraliso: alisante revolucionário sem formol que alisa e hidrata cabelos na primeira aplicação. Liso natural e saudável!"
  },
  {
    id: "nutra-vida",
    title: "Nutra Vida",
    slug: "nutra-vida", 
    description: "Suplemento natural testado e aprovado para auxiliar na fertilidade feminina",
    category: "saude",
    affiliateUrl: "https://app.monetizze.com.br/r/AXC25503421",
    benefits: [
      "Auxilia na fertilidade natural",
      "Equilibra hormônios femininos", 
      "Melhora qualidade dos óvulos",
      "Prepara o útero para gestação",
      "Fórmula 100% natural e segura"
    ],
    content: {
      introduction: "O Nutra Vida é o suplemento natural especialmente desenvolvido para mulheres que desejam engravidar, com fórmula testada e aprovada para casos de infertilidade, ovários policísticos, endometriose e outros desafios reprodutivos.",
      detailedDescription: "Desenvolvido por especialistas em fertilidade, o Nutra Vida oferece uma abordagem natural e científica para mulheres que enfrentam dificuldades para engravidar. Sua fórmula exclusiva combina vitaminas, minerais e extratos vegetais clinicamente estudados, que trabalham sinergicamente para equilibrar hormônios, melhorar a qualidade dos óvulos, regular o ciclo menstrual e preparar o organismo para uma gestação saudável. Indicado para mulheres com laqueadura, ovários policísticos, endometriose, miomas uterinos, trompas obstruídas, menstruação irregular, desequilíbrios hormonais, infertilidade sem causa aparente e histórico de abortos. O produto é seguro, natural e sem contraindicações graves.",
      howToUse: "Tome 2 cápsulas ao dia, preferencialmente uma pela manhã e outra à noite, sempre com água e durante as refeições. Use continuamente por pelo menos 3-6 meses para resultados otimizados. Acompanhamento médico é recomendado.",
      testimonials: [
        "Depois de 4 anos tentando, engravidei no segundo mês usando Nutra Vida! - Luciana Mãe",
        "Tenho ovários policísticos e consegui engravidar após 8 meses com Nutra Vida. - Patricia Família",
        "Produto incrível! Regulou minha menstruação e hoje tenho meu bebê. - Sandra Alegria"
      ],
      faq: [
        {
          question: "Funciona mesmo para casos de infertilidade?",
          answer: "Sim! O Nutra Vida foi desenvolvido especificamente para auxiliar mulheres com diferentes tipos de dificuldades reprodutivas, com ingredientes clinicamente estudados."
        },
        {
          question: "Quanto tempo para engravidar usando o produto?",
          answer: "O tempo varia para cada mulher, mas muitas relatam sucesso entre 2-6 meses de uso contínuo. Recomenda-se paciência e acompanhamento médico."
        },
        {
          question: "Posso usar se tenho endometriose?",
          answer: "Sim! O Nutra Vida é indicado para mulheres com endometriose, pois ajuda a equilibrar hormônios e reduzir inflamações que podem afetar a fertilidade."
        }
      ],
      differentials: [
        "Fórmula específica para fertilidade",
        "Ingredientes clinicamente estudados",
        "Indicado para diversas condições",
        "100% natural e seguro",
        "Acompanhamento especializado disponível"
      ]
    },
    keywords: ["fertilidade", "engravidar", "ovários policísticos", "endometriose", "hormônios"],
    metaTitle: "Nutra Vida - Suplemento Natural para Fertilidade e Gestação",
    metaDescription: "Nutra Vida: suplemento natural que auxilia mulheres a engravidar. Indicado para ovários policísticos, endometriose e infertilidade!"
  }
  // Continua com os outros produtos...
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};