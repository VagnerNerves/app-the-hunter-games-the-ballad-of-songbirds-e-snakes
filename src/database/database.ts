export interface TrailerDTO {
  id: string
  pathImage: any
  urlVideo: string
}

export interface ActorDTO {
  id: string
  name: string
  about: string
  birth: string
  height: string
  urlInstagram: string
  pathImageScreenHome: any
  pathImageScreenActor: any
}

export interface CharactersDTO {
  id: string
  name: string
  pathImage: any
  impactfulPhrase: string[]
  about: string[]
}

interface DatabaseProps {
  trailers: TrailerDTO[]
  synopsis: string[]
  characters: CharactersDTO[]
  actors: ActorDTO[]
}

export const database: DatabaseProps = {
  trailers: [
    {
      id: 'trailer1',
      pathImage: require('../assets/images/trailers/thumb-trailer1.png'),
      urlVideo: 'https://youtu.be/mIZ4fX4ACUY?si=GQ-phrtBn_HQf1e0'
    },
    {
      id: 'trailer2',
      pathImage: require('../assets/images/trailers/thumb-trailer2.png'),
      urlVideo: 'https://youtu.be/psF5B6jJBV4?si=xtzfA5BqdW-nlSTT'
    }
  ],
  synopsis: [
    'Anos antes de se tornar o tirano Presidente de Panem, Coriolanus Snow, com 18 anos, é a última esperança para sua linhagem enfraquecida, uma família outrora orgulhosa que caiu em desgraça em um Capitol pós-guerra.',
    'Com os 10º Jogos Vorazes anuais se aproximando rapidamente, o jovem Snow fica alarmado ao ser designado para mentorar Lucy Gray Baird, a tributo feminina do empobrecido Distrito 12. No entanto, depois que Lucy Gray chama a atenção de todo Panem ao cantar desafiadoramente durante a cerimônia de colheita, Snow pensa que pode virar as probabilidades a seu favor.',
    'Unindo seus instintos para o showbiz e sua astúcia política recém-descoberta, a corrida contra o tempo de Snow e Lucy para sobreviver revelará, em última instância, quem é um pássaro cantor e quem é uma cobra.'
  ],
  characters: [
    {
      id: 'coriolanussnow',
      name: 'Coriolanus Snow',
      pathImage: require('../assets/images/characters/coriolanus-snow.png'),
      impactfulPhrase: [
        '“Os jogos vorazes vão punir os distritos. Esses tributos não têm escolha.”'
      ],
      about: [
        'Coriolanus Snow é filho do General Crassus Snow, que morreu em batalha quando tinha oito anos. Tendo também perdido sua mãe devido a uma doença, Coriolanus cresceu órfão na Capital co m seu primo Tigre e sua avó. O jovem Coriolanus Snow (ou Coryo, para abreviar) é da realeza da Capital, e seu direito a prestígio e poder é, para ele, um dado adquirido. Crescer durante o cerco ao Capitólio e na miséria financeira após a guerra tornou Coryo ainda mais determinado a devolver a sua família à antiga glória.',
        'Ambicioso, mas desapaixonado, astuto, mas otimista, Coryo está impaciente para deixar suas dificuldades para trás e entrar no futuro que merece. Manter as aparências é uma habilidade de sobrevivência que Coryo aprende bem com sua avó. Aos 18 anos, ele é adepto de esconder seus verdadeiros sentimentos enquanto navega pelas pistas e pressões sociais necessárias para ter sucesso na Academia. Servindo como mentor estudantil durante os 10º Jogos Vorazes, ele vê uma oportunidade de ganhar uma bolsa de estudos universitária e garantir seu futuro entre a elite da Capital, sem nunca expor o quão perto as Neves chegaram da ruína.',
        'Coriolanus Snow se tornará o presidente da Panem.'
      ]
    },
    {
      id: 'lucygraybaird',
      name: 'Lucy Gray Baird',
      pathImage: require('../assets/images/characters/lucy-gray-baird.png'),
      impactfulPhrase: [
        '“Você realmente quer cuidar de mim nessa arena?',
        'Comece pensando que posso realmente vencer.”'
      ],
      about: [
        'Em uma época antes de sobreviver aos Jogos Vorazes exigia carisma, o domínio de Lucy Gray Baird com o público a tornou querida pelo Capitólio. Carismática e perspicaz, Lucy Gray é tão hábil em desempenhar um papel quanto em dizer a verdade, habilidades que lhe permitem enfrentar tudo o que surge em seu caminho com igual coragem e talento. Ela chega à colheita sem vontade de dar satisfação a quem tenta reprimi-la. Chamada como homenagem, ela desfila pela plataforma com um distinto vestido arco-íris cantando sua declaração pessoal de liberdade.',
        'Criada no Covey, Lucy Gray passou a vida se apresentando em palcos, escrevendo músicas e emocionando o público. Como homenagem, ela usa essas habilidades para se tornar inesquecível. Apesar da fome, da prisão e de uma sentença de morte pendente nos jogos, ela mantém com determinação sua postura e autocontrole, encantando facilmente os espectadores da Capital e seu mentor, Coriolanus Snow, de 18 anos, com sua inteligência e cordialidade singulares.',
        'O orgulho e o prazer de Lucy Gray em tudo o que significa ser Covey são visíveis no vestido que ela escolhe usar no dia da colheita dos 10º Jogos Vorazes. Tendo pertencido à sua falecida mãe, o vestido arco-íris com babados de Lucy Gray é uma declaração de autodomínio diante da desumanização. Antes mesmo de chegar ao Capitólio, Lucy Gray deixou uma boa impressão.'
      ]
    },
    {
      id: 'castahighbottom',
      name: 'Casta Highbottom',
      pathImage: require('../assets/images/characters/casta-highbottom.png'),
      impactfulPhrase: [
        '“Como mentor, SR. Neve... Seu papel é transformar essas crianças em óculos, não sobreviventes.”'
      ],
      about: [
        'Mais de uma década antes dos distritos se rebelarem contra o Capitólio, Casca Highbottom, bêbado, elabora uma proposta para os Jogos Vorazes como parte de uma tarefa de aula para a Dra. Volumnia Gaul na Universidade.',
        'Após a rebelião fracassada, o Tratado de Traição é redigido, apresentando novas leis e políticas restritivas adicionadas para evitar futuras rebeliões. A Gália adapta sua proposta para os Jogos Vorazes ao Tratado. Ela apresenta publicamente Highbottom como o criador dos Jogos Vorazes.',
        'Highbottom supervisiona pessoalmente o programa de mentores e se apresenta aos alunos com toda a energia de um sonâmbulo, seu físico outrora belo, encolhido e coberto de pele flácida, olhos sonhadores e, como sempre, dopado com morfina.',
        'Ele não é fã de Coriolanus.'
      ]
    },
    {
      id: 'tigrissnow',
      name: 'Tigris Snow',
      pathImage: require('../assets/images/characters/tigris-snow.png'),
      impactfulPhrase: [
        '“Imagine que foi o seu nome que eles puxaram. Eu só gostaria de saber que alguém ainda se importa comigo...',
        'Que eu ainda era de valor.”'
      ],
      about: [
        'Tigris é a prima mais velha de Coriolanus Snow, um relacionamento mais parecido com o de irmãos. Tendo ambos perdido os pais quando crianças, Tigris e Coriolanus sobreviveram à guerra com a avó. Tigris rapidamente se tornou o zelador principal e na década seguinte, que vê a família Snow afundar ainda mais na pobreza, o trabalho e os sacrifícios pessoais de Tigris não apenas os impedem de morrer de fome, mas também ajudam a manter sua dignidade. Sua desenvoltura e habilidade de transformar roupas de trapos em roupas reais ajudam os Snows a manter as aparências, uma habilidade vital de sobrevivência na Capital.',
        'Simpatizante com as injustiças vividas pelos tributos, Tigris ajuda Coryo em seu papel de mentor durante os 10º Jogos Vorazes, fornecendo o que pode para ajudar Lucy Gray. Tigris é finalmente dispensado de ser o único provedor financeiro quando a fortuna de Coryo muda após seu verão no Distrito 12. Mas mesmo que o futuro pareça mais brilhante para os Snows, o vínculo estreito entre Tigris e seu primo começa a ser substituído pelas ambições de Coryo.'
      ]
    },
    {
      id: 'sejanusplinth',
      name: 'Sejanus Plinth',
      pathImage: require('../assets/images/characters/sejanus-plinth.png'),
      impactfulPhrase: ['“Vocês são Monstros!!', 'Todos vocês!!”'],
      about: [
        'Ser deslocado de sua casa e criado em uma sociedade que vê ele e sua família com desprezo apenas aprofundou a compaixão e a preocupação de Sejano pela justiça. Embora a amargura às vezes surja quando ele olha para a crueldade casual daqueles que o rodeiam, Sejano é um jovem que não hesita em ajudar os necessitados ou em questionar aqueles que estão no poder.',
        'Uma das poucas famílias a fazer a transição de cidadão do Distrito para o Capitólio, os Plinths são vistos com suspeita e escárnio no Capitólio, exceto onde o dinheiro de suas munições permite a entrada, e são considerados traidores pela comunidade do Distrito 2. Intimidado por seus colegas de escola da Capital e vendo a saudade de sua mãe, Sejano nunca se acostuma com os valores ou atitudes defendidas por seu pai, Estrabão, aliado da Capital.',
        'Inteligente e atencioso, ele se destaca como aluno da Academia, o que lhe valeu involuntariamente a posição de mentor dos 10º Jogos Vorazes. Incapaz de ajudar seu pupilo Marcus, um ex-colega do Distrito 2 que se recusa a falar com ele, Sejanus tenta usar sua posição para aliviar o sofrimento dos tributos presos, trazendo-lhes comida e discutindo com o Dr.'
      ]
    },
    {
      id: 'luckyflickerman',
      name: '"Lucky" Flickerman',
      pathImage: require('../assets/images/characters/lucky-flickerman.png'),
      impactfulPhrase: [
        '“Que maravilhoso que todos estamos aqui para o desempenho final de alguém”'
      ],
      about: [
        'Lucretius “Lucky” Flickerman é um meteorologista da Capitol TV vestido de maneira estranha e o primeiro apresentador de Jogos Vorazes, onde apresenta ao público um novo evento de TV imperdível. Do estúdio, Flickerman adiciona comentários irreverentes e conduz entrevistas com criadores de jogos e partes relacionadas, ao mesmo tempo que atualiza os espectadores sobre os últimos boletins meteorológicos.',
        'Seu truque característico da moeda (lançá-la no ar, onde ela desaparece e depois reaparece) é como ele inicia e termina seus relatórios. Ele acredita que as crianças da Capital são melhores do que as dos distritos. Como ele diz: “Mas certamente você não está comparando nossos filhos com os deles? Uma olhada lhe diz que a nossa raça é superior.”'
      ]
    },
    {
      id: 'volumniagaul',
      name: 'Volumnia Gaul',
      pathImage: require('../assets/images/characters/volumnia-gaul.png'),
      impactfulPhrase: [
        '“Você é bom em jogos.',
        'Talvez um dia você seja um gamemaker como eu.”'
      ],
      about: [
        'Um primeiro gamemaker principal; diretor da divisão de armas experimentais da Cidadela e instrutor de estratégia militar na Universidade.',
        'Como geneticista, a Dra. Volumnia Gaul estuda e manipula os blocos de construção fundamentais da vida. Como inovadora em armamento militar experimental, ela cria novas maneiras de acabar com a vida. Inabalável e sem remorso, a Dra. Gaul prossegue seu trabalho com determinação e até alegria.',
        'Sua crença central, de que o estado natural da humanidade é caótico e violento, justifica seus meios de controle e é evidente em todos os projetos que ela supervisiona, principalmente nos Jogos Vorazes. Comprometido com o governo dos distritos do Capitólio, foi o Dr. Gaul quem liderou os Jogos Vorazes como retribuição de guerra após a rebelião dos Dias Negros. Após nove anos de jogos, o Dr. Gaul cria iniciativas para garantir a continuidade dos jogos, transformando a forma como os cidadãos consideram o seu significado. O programa de mentoria é desenvolvido para os 10º jogos sob a supervisão do Dr. Gaul, plantando as sementes para a evolução dos jogos, de um concurso taciturno de punição a um esporte para espectadores insensíveis.',
        'Durante os 10º Jogos, a Dra. Gaul tem um interesse particular em Coriolanus Snow, de 18 anos, orientando-o e manipulando-o enquanto testa suas convicções e caráter.'
      ]
    }
  ],
  actors: [
    {
      id: 'tomblith',
      name: 'Tom Blith',
      about:
        'Tom Keir Blyth é um ator inglês. Seus filmes incluem Scott e Sid, Benediction e a prequela de The Hunger Games, The Ballad of Songbirds & Snakes. Na televisão, ele estrela como o personagem-título da série Epix Billy the Kid.',
      birth: '2 de fevereiro de 1995 (idade 28 anos), Birmingham, Reino Unido.',
      height: '1,83 m',
      urlInstagram: 'https://www.instagram.com/tomblyth/',
      pathImageScreenHome: require('../assets/images/actors/tom-blith-home.png'),
      pathImageScreenActor: require('../assets/images/actors/tom-blith-actor.png')
    },
    {
      id: 'rachelzegler',
      name: 'Rachel Zegler',
      about:
        'Rachel Anne Zegler é uma atriz, cantora, e YouTuber americana. Ela é mais conhecida por seu papel como Maria Vasquez na adaptação cinematográfica de 2021 de West Side Story, dirigida por Steven Spielberg e escrita por Tony Kushner.',
      birth: '3 de maio de 2001 (idade 22 anos), Hackensack, Nova Jersey, EUA.',
      height: '1,57 m',
      urlInstagram: 'https://www.instagram.com/rachelzegler/',
      pathImageScreenHome: require('../assets/images/actors/rachel-zegler-home.png'),
      pathImageScreenActor: require('../assets/images/actors/rachel-zegler-actor.png')
    },
    {
      id: 'peterdinklage',
      name: 'Peter Dinklage',
      about:
        'Peter Hayden Dinklage é um premiado e aclamado ator americano. É mais conhecido por interpretar Tyrion Lannister na série Game of Thrones e já atuou em filmes como The Station Agent, Elf, Underdog, Find Me Guilty, The Chronicles of Narnia: Prince Caspian e Vingadores: Guerra Infinita.',
      birth:
        '11 de junho de 1969 (idade 54 anos), Morristown, Nova Jersey, EUA.',
      height: '1,35 m',
      urlInstagram: 'https://www.instagram.com/peterdinklage/',
      pathImageScreenHome: require('../assets/images/actors/peter-dinklage-home.png'),
      pathImageScreenActor: require('../assets/images/actors/peter-dinklage-actor.png')
    },
    {
      id: 'hunterschafer',
      name: 'Hunter Schafer',
      about:
        'Hunter Schafer é uma modelo, atriz e ativista dos direitos LGBT estadunidense. Em 2019 ela fez sua estreia como atriz interpretando Jules na série da HBO Euphoria.',
      birth:
        '31 de dezembro de 1998 (idade 24 anos), Trenton, Nova Jersey, EUA.',
      height: '1,78 m',
      urlInstagram: 'https://www.instagram.com/hunterschafer',
      pathImageScreenHome: require('../assets/images/actors/hunter-schafer-home.png'),
      pathImageScreenActor: require('../assets/images/actors/hunter-schafer-actor.png')
    },
    {
      id: 'joshandresriveira',
      name: 'Josh Andrés Riveira',
      about:
        'Josh Andrés Rivera é um ator americano. Ele é mais conhecido por estrelar como Chino no remake de 2021 de Steven Spielberg de West Side Story. Ele também se apresentou na companhia original na primeira turnê nacional de Hamilton.',
      birth: '1 de maio de 1995 (idade 28 anos), EUA.',
      height: '1,82 m',
      urlInstagram: 'https://www.instagram.com/joshandresrivera/',
      pathImageScreenHome: require('../assets/images/actors/josh-andres-riveira-home.png'),
      pathImageScreenActor: require('../assets/images/actors/josh-andres-riveira-actor.png')
    },
    {
      id: 'jasonschuwartzman',
      name: 'Jason Schuwartzman',
      about:
        'Jason Francesco Schwartzman é um ator e músico estadunidense. Ele é mais famoso por atuar nos filmes Rushmore, I Heart Huckabees, Marie Antoinette e Scott Pilgrim vs. the World. Jason é também ex-integrantes da banda de rock alternativo Phantom Planet.',
      birth:
        '26 de junho de 1980 (idade 43 anos), Los Angeles, Califórnia, EUA.',
      height: '1,68 m',
      urlInstagram: 'https://www.instagram.com/jasonnschwartzman/',
      pathImageScreenHome: require('../assets/images/actors/jason-schuwartzman-home.png'),
      pathImageScreenActor: require('../assets/images/actors/jason-schuwartzman-actor.png')
    },
    {
      id: 'violadavis',
      name: 'Viola Davis',
      about:
        'Viola Davis é uma atriz e produtora norte-americana. Vencedora de um Óscar, um Emmy Award, dois Tony Awards e um Grammy, dessa forma alcançando todos os principais prêmios da indústria do entretenimento, se tornando a décima oitava personalidade do mundo e a terceira mulher negra a conquistar o título EGOT.',
      birth:
        '11 de agosto de 1965 (idade 58 anos), Setor Matthews, Carolina do Sul, EUA.',
      height: '1,65 m',
      urlInstagram: 'https://www.instagram.com/violadavis',
      pathImageScreenHome: require('../assets/images/actors/viola-davis-home.png'),
      pathImageScreenActor: require('../assets/images/actors/viola-davis-actor.png')
    }
  ]
}
