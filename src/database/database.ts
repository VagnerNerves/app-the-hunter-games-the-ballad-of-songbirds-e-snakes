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

interface DatabaseProps {
  trailers: TrailerDTO[]
  synopsis: string[]
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
