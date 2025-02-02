const fighters = [
  {
    name: 'Islam Makhachev',
    nickname: '',
    rank: 1,
    wins: 27,
    losses: 1,
    division: 'Lightweight',
    isChampion: true,
    country: 'Russia',
    description:
      'Islam Makhachev is the reigning UFC Lightweight champion, known for his dominant grappling and well-rounded skill set. A protégé of Khabib Nurmagomedov, he has established himself as a formidable force in the division.',
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/7/MAKHACHEV_ISLAM_L_BELT_01-18.png?itok=VptniX86',
  },
  {
    name: 'Alex Pereira',
    nickname: 'Poatan',
    rank: 2,
    wins: 12,
    losses: 2,
    division: 'Light Heavyweight',
    isChampion: true,
    country: 'Brazil',
    description:
      "Alex 'Poatan' Pereira is the UFC Light Heavyweight champion, renowned for his striking prowess and knockout power. Transitioning from a successful kickboxing career, he has quickly ascended the MMA ranks.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/PEREIRA_ALEX_L_BELT_10-05.png?itok=-HWopS_9',
  },
  {
    name: 'Jon Jones',
    nickname: 'Bones',
    rank: 3,
    wins: 27,
    losses: 1,
    division: 'Heavyweight',
    isChampion: true,
    country: 'USA',
    description:
      "Jon 'Bones' Jones is the UFC Heavyweight champion and a former Light Heavyweight champion. Known for his versatility and fight IQ, he is considered one of the greatest fighters in MMA history.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/JONES_JON_L_BELT_11-16.png?itok=CUPv7ubQ',
  },
  {
    name: 'Ilia Topuria',
    nickname: 'El Matador',
    rank: 4,
    wins: 16,
    losses: 0,
    division: 'Featherweight',
    isChampion: true,
    country: 'Spain',
    description:
      "Ilia 'El Matador' Topuria is the undefeated UFC Featherweight champion, recognized for his dynamic striking and grappling abilities. He has rapidly risen through the ranks with impressive performances.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/TOPURIA_ILIA_L_BELT_10-26.png?itok=4a1uyWfc',
  },
  {
    name: 'Merab Dvalishvili',
    nickname: 'The Machine',
    rank: 5,
    wins: 16,
    losses: 4,
    division: 'Bantamweight',
    isChampion: false,
    country: 'Georgia',
    description:
      "Merab 'The Machine' Dvalishvili is a top Bantamweight contender known for his relentless pace and wrestling dominance. His endurance and pressure have overwhelmed many opponents.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/7/DVALISHVILI_MERAB_L_BELT_01-18.png?itok=6d15Ml6s',
  },
  {
    name: 'Belal Muhammad',
    nickname: 'Remember the Name',
    rank: 6,
    wins: 23,
    losses: 3,
    division: 'Welterweight',
    isChampion: true,
    country: 'USA',
    description:
      "Belal 'Remember the Name' Muhammad is a leading Welterweight contender recognized for his well-rounded skill set and strategic approach. He has consistently showcased his abilities against top-tier competition.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/MUHAMMAD_BELAL_L_BELTMOCK.png?itok=KkpJDuuw',
  },
  {
    name: 'Dricus Du Plessis',
    nickname: 'Stillknocks',
    rank: 7,
    wins: 20,
    losses: 2,
    division: 'Middleweight',
    isChampion: true,
    country: 'South Africa',
    description:
      "Dricus 'Stillknocks' Du Plessis is a prominent Middleweight fighter known for his striking power and resilience. Hailing from South Africa, he has made a significant impact in the UFC.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/DU_PLESSIS_DRICUS_L_BELT.png?itok=G7oOu7pz',
  },
  {
    name: "Sean O'Malley",
    nickname: 'Sugar',
    rank: 8,
    wins: 17,
    losses: 1,
    division: 'Bantamweight',
    isChampion: false,
    country: 'USA',
    description:
      "Sean 'Sugar' O'Malley is the UFC Bantamweight champion, celebrated for his flashy striking and charismatic persona. He has garnered a substantial following with his entertaining fighting style.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/OMALLEY_SEAN_L_08-19.png?itok=PZizstP4',
  },
  {
    name: 'Leon Edwards',
    nickname: 'Rocky',
    rank: 9,
    wins: 21,
    losses: 3,
    division: 'Welterweight',
    isChampion: false,
    country: 'United Kingdom',
    description:
      "Leon 'Rocky' Edwards is the UFC Welterweight champion, known for his technical striking and composure under pressure. His journey to the title has been marked by perseverance and skill.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/EDWARDS_LEON_L_08-20.png?itok=kVEURjwd',
  },
  {
    name: 'Jamahal Hill',
    nickname: 'Sweet Dreams',
    rank: 10,
    wins: 12,
    losses: 1,
    division: 'Light Heavyweight',
    isChampion: false,
    country: 'USA',
    description:
      "Jamahal 'Sweet Dreams' Hill is the UFC Light Heavyweight champion, recognized for his knockout power and striking accuracy. He has swiftly climbed the ranks with impressive finishes.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/HILL_JAMAHAL_L_01-18.png?itok=31OdpoOU',
  },
  {
    name: 'Israel Adesanya',
    nickname: 'The Last Stylebender',
    rank: 11,
    wins: 24,
    losses: 3,
    division: 'Middleweight',
    isChampion: false,
    country: 'Nigeria',
    description:
      "Israel 'The Last Stylebender' Adesanya is a former UFC Middleweight champion, acclaimed for his striking finesse and tactical prowess. His reign included multiple title defenses against top contenders.",
    image: '../Fighter-1.png',
  },
  {
    name: 'Alexander Volkanovski',
    nickname: 'The Great',
    rank: 12,
    wins: 25,
    losses: 2,
    division: 'Featherweight',
    isChampion: false,
    country: 'Australia',
    description:
      "Alexander 'The Great' Volkanovski is a former UFC Featherweight champion, known for his well-rounded abilities and strategic fight approach. He has been involved in some of the division's most memorable bouts.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/VOLKANOVSKI_ALEXANDER_L_02-17.png?itok=n9TnCDKb',
  },
  {
    name: 'Max Holloway',
    nickname: 'Blessed',
    rank: 13,
    wins: 24,
    losses: 7,
    division: 'Featherweight',
    isChampion: false,
    country: 'USA',
    description:
      "Max 'Blessed' Holloway is a former UFC Featherweight champion, celebrated for his high-volume striking and durability. He remains a perennial contender in the division.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-04/HOLLOWAY_MAX_L_04-13.png?itok=U9IB8OUQ',
  },
  {
    name: 'Kamaru Usman',
    nickname: 'The Nigerian Nightmare',
    rank: 14,
    wins: 20,
    losses: 3,
    division: 'Welterweight',
    isChampion: false,
    country: 'Nigeria',
    description:
      "Kamaru 'The Nigerian Nightmare' Usman is a former UFC Welterweight champion, known for his dominant wrestling and well-rounded skills. He held the title for several years and defended it multiple times.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/USMAN_KAMARU_L_10-21.png?itok=VXrrBgWG',
  },
  {
    name: 'Charles Oliveira',
    nickname: 'Do Bronx',
    rank: 15,
    wins: 34,
    losses: 9,
    division: 'Lightweight',
    isChampion: false,
    country: 'Brazil',
    description:
      "Charles 'Do Bronx' Oliveira is a former UFC Lightweight champion, known for his exceptional submission game and striking. Holding the record for most submissions in UFC history, he remains a dangerous contender in the division.",
    image:
      'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2025-01/5/OLIVEIRA_CHARLES_L_11-16.png?itok=ReesBWpC',
  },
]
