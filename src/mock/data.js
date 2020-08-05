import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hackathon pela Vida', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hackathon ',
  name: 'pela Vida',
  subtitle: 'Vamos ajudar a nossa cidade',
  cta: 'Saiba Mais',
};

// ABOUT DATA
export const aboutData = {
  img: 'logo_life.png',
  paragraphOne: 'Devido ao atual contexto epidemiológico em virtude da COVID-19, a Life, em parceria com a ASSERTI, Unimed Marília, Covidas, abre este concurso com a finalidade de atender a necessidade de uma plataforma digital para o monitoramento dos casos suspeitos ou confirmados na Rede Municipal de Atenção à Saúde no município de Marília.',
  paragraphTwo: 'Para atingir tal finalidade o concurso foi elaborado para os estudantes da área de T.I. Os alunos terão a oportunidade de concorrer aos prêmios oferecidos pelos apoiadores e ao mesmo tempo auxiliar a Rede Municipal de Atenção à Saúde no município de Marília no atual contexto.',
  paragraphThree: 'Os prêmios serão concedidos pela Life, ASSERTI e UNIMED MARÍLIA, para mais informações consulte o edital abaixo.',
  resume: 'Concurso_Software_COVID19_L2.pdf', // Edital aqui
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'doc.jpg',
    title: 'Auxiliar a Rede Municipal de Saúde em suas necessidades.',
    info: 'O cenário da pandemia afetou diversas áreas e principalmente a Rede de Assistência à Saúde. Muitas pessoas vão as unidades de saúde todos os dias para serem atendidas. Cada munícipe atendido em uma unidade de saúde tem seu acolhimento e avaliação clínica e procedimentos registrados em prontuário eletrônico por meio do Sistema e-SUS.',
    info2: 'A Life tem como proposta auxiliar o monitoramento dos usuários SUS e seus comunicantes por meio do desenvolvimento de uma ferramenta que otimize o registro, classificação, memória e extração destas informações, sepossibilitando a articulação entre estudantes da área de TI e os profissionais da área da saúde.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'computer.jpg',
    title: 'Auxiliar a saúde municipal com ferramentas tecnológicas',
    info: 'A Rede Municipal de Assistência à Saúde, assim como outras áreas, necessitam frequentemente de ferramentas tecnológicas que auxiliem a resolver situações ou a otimizar processos de trabalho em qualquer organização.',
    info2: 'Como exemplo podemos citar a Ciência dos Dados que vêm mudando completamente como as organizações enxergam suas informações. Este concurso tem como escopo incentivar uma maior participação da área de Tecnologia da Informação no setor público.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'student.jpg',
    title: 'Reunir os estudantes da área de TI',
    info: 'Marília nos últimos anos vêm se destacado na área de TI, tanto na formação de empresas quanto profissionais. Neste contexto, a Life teve como foco possibilitar a articulação entre estudantes da área de TI e os profissionais da área da saúde.',
    info2: 'O concurso tem como objetivo incentivar os estudantes e auxiliá-los a desenvolverem soluções que atendam as necessidades dos setores públicos, com benefícios à população local.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// ENROLL DATA
export const enrollData = [
  {
    id: nanoid(),
    img: 'doc.jpg',
    title: 'Público Alvo e Inscrição 🔎',
    info: 'Estudantes regularmente matriculados em curso técnicos ou de graduação em Tecnologia da Informação.',
    info2: 'Para mais informações, acesse o edital no topo do website.',
    info3: '',
    url: '',
    nameBut: 'Inscreva-se',
    repo: 'https://docs.google.com/forms/d/1nAP7B3xjyMhJYOJxL7Zru5R7MUFyfwiiUehm_xQKhn0/', // if no repo, the button will not show up
  },
  {
    title: 'Envio do Projeto',
    info: 'Após a finalização do projeto, envie o link do repositório, o link da plataforma com os dados de login (usuário e senha)',
    info2: 'Fique atento as datas, o formulário será fechado no dia 4 de setembro.',
    nameBut: 'Clique para enviar os dados do projeto',
    repo: 'https://docs.google.com/forms/d/1nAP7B3xjyMhJYOJxL7Zru5R7MUFyfwiiUehm_xQKhn0/',
  },
  {
    id: nanoid(),
    img: 'computer.jpg',
    title: 'Vencedores 🎇',
    info: 'Os vencedores serão premiados com uma valor total estimado de R$12.400,00.',
    info2: 'A equipe vencedora também ganhará um certificado de honra ao mérito pela ASSERTI.',
    info3: 'Seja um destaque para a sua cidade, PARTICIPE !',
    url: '',
    nameBut: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'student.jpg',
    title: 'Prêmios 🏆',
    info: 'Será premiada a equipe do software que tiver a maior pontuação pelos jurados.',
    info2: 'Prêmio de R$ 2.000,00 para a equipe (patrocínio da empresa Life), Certificado de honra do mérito concedido pela ASSERTI e R$ 800,00 concedido pela ACIM.',
    info3: 'Assim como será distribuido de R$ 9.600,00 pela UNIMED MARÍLIA, para desenvolvimento e implantação do sistema, divididos em 4 parcelas de R$ 2400,00 reais cada.',
    url: '',
    nameBut: '',
    repo: '', // if no repo, the button will not show up
  },
];
// DATE DATA

export const dateData = [
  {
    id: nanoid(),
    img: 'doc.jpg',
    title: 'Quando Irá Acontecer ? 📆',
    info: '• 3 a 15 de agosto – Período de inscrições. O aluno coordenador deverá preencher o Termo de Adesão com os dados dos alunos componentes de sua equipe, que deverá ter até 4 membros.',
    info2: '• 17 de agosto – Live pelo Zoom explicando a iniciativa do Concurso para os participantes e Sessão de Perguntas e Respostas da Secretaria Municipal de Saúde',
    info3: '•	31 de agosto – Live com mentoria nas áreas da Saúde, Tecnologia e Inovação.',
    info4: '•	2 a 4 de setembro – Entrega do software. O aluno coordenador deverá informar no formulário de inscrição o link para acesso ao sistema com dados de login e o link para os códigos fontes na plataforma Github.',
    info5: '•	7 de setembro – Divulgação do resultado final do vencedor no site do concurso.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'computer.jpg',
    title: 'Resultado do Concurso 💯',
    info: 'A equipe vencedora será divulgada aqui no website',
    info2: '7 de setembro – Divulgação do resultado final da equipe vencedora no site do concurso.',
    info3: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'student.jpg',
    title: 'Equipe Vencedora 🎉',
    info: 'Logo logo ... 🙌',
    info2: '',
    info3: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// MOREINFO DATA



export const moreInfoData = [
  {
    id: nanoid(),
    img: 'edital.jpg',
    title: 'Baixe nosso edital!',
    info: 'Para mais informações sobre o concurso consulte o edital, qualquer dúvida entre em contato pelo email.',
    info2: 'Os critérios de avaliação estão completamente ligados as necessides estabelecidas pela Secretária de Saúde Municipal.',
    info3: '',
    url: 'Concurso_Software_COVID19_L2.pdf',
    text: 'Baixar',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'programming.jpg',
    title: 'Confira as regras no GitHub',
    info: 'As soluções entregues serão publicas no GitHub, vamos tornar nossas propostas públicas para todos verem e auxiliar a comunidade de desenvolvimento.',
    info2: 'Todas as soluções feitas serão Bem-Vindas, precisamos fomentar mais a interação da comunidade de desenvolvivento no âmbito de soluções digitais para a cidade.',
    info3: 'Vamos transformar Marília em um destaque na região!',
    url: 'https://github.com/pedrocardoz0/concursocovid19',
    text: 'GitHub',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'team.jpg',
    title: 'Não perca esta oportunidade !',
    info: 'Não fique de fora, se você apresenta este perfil nos ajude a auxiliar a saúde pública, nossa cidade precisa de você!',
    info2: 'Seja a diferença para a cidade em um momento de necessidade, as pequenas ajudas refletem em inúmeras vidas. Sua ajuda é fundamental.',
    info3: '',
    url: false,
    text: false,
    repo: '', // if no repo, the button will not show up
  },
];

// SUPORT DATA

export const suportData = [
  {
    id: nanoid(),
    img: 'logo_life.png',
  },
  {
    id: nanoid(),
    img: 'unimed.png',
  },
  {
    id: nanoid(),
    img: 'logosec.jpg',
  },
  {
    id: nanoid(),
    img: 'asserti.png',
  },
  {
    id: nanoid(),
    img: 'ACIM.jpeg',
  },
  {
    id: nanoid(),
    img: 'logo_covidas.png',
  },
  
];


// CONTACT DATA
export const contactData = {
  cta: 'Quer nos ajudar? Entre em contato conosco hackathonpelavida@gmail.com ',
  btn: '',
  email: 'hackathonpelavida@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/Lifefibra/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/life_fibra/'
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/life-servi-os-de-comunica-o-multimidia-ltda/',
    },
    {
      id: nanoid(),
      name: 'globe',
      url: 'https://www.life.com.br/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pedrocardoz0',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
