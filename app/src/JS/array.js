const ufcFighters = [
  // Flyweight Division
  {
    name: 'Alexandre Pantoja',
    rank: 'Champion',
    wins: 26,
    losses: 5,
    division: 'Flyweight',
    isChampion: true,
  },

  // Flyweight Contenders
  {
    name: 'Brandon Royval',
    rank: 1,
    wins: 15,
    losses: 6,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Brandon Moreno',
    rank: 2,
    wins: 21,
    losses: 7,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Amir Albazi',
    rank: 3,
    wins: 17,
    losses: 1,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Kai Kara-France',
    rank: 4,
    wins: 24,
    losses: 11,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Tatsuro Taira',
    rank: 5,
    wins: 14,
    losses: 0,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Manel Kape',
    rank: 6,
    wins: 18,
    losses: 6,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Alex Perez',
    rank: 7,
    wins: 24,
    losses: 7,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Asu Almabayev',
    rank: 8,
    wins: 17,
    losses: 2,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Steve Erceg',
    rank: 9,
    wins: 10,
    losses: 1,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Tim Elliott',
    rank: 10,
    wins: 19,
    losses: 12,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Tagir Ulanbekov',
    rank: 11,
    wins: 14,
    losses: 2,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Charles Johnson',
    rank: 12,
    wins: 13,
    losses: 5,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Bruno Silva',
    rank: 13,
    wins: 12,
    losses: 5,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Kai Asakura',
    rank: 14,
    wins: 19,
    losses: 4,
    division: 'Flyweight',
    isChampion: false,
  },
  {
    name: 'Joshua Van',
    rank: 15,
    wins: 9,
    losses: 1,
    division: 'Flyweight',
    isChampion: false,
  },
  // End of Flyweight Contenders

  // Bantamweight Division
  {
    name: 'Merab Dvalishvili',
    rank: 'Champion',
    wins: 16,
    losses: 4,
    division: 'Bantamweight',
    isChampion: true,
  },

  // Bantamweight Contenders
  {
    name: "Sean O'Malley",
    rank: 1,
    wins: 17,
    losses: 1,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Umar Nurmagomedov',
    rank: 2,
    wins: 16,
    losses: 0,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Petr Yan',
    rank: 3,
    wins: 16,
    losses: 5,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Cory Sandhagen',
    rank: 4,
    wins: 16,
    losses: 4,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Deiveson Figueiredo',
    rank: 5,
    wins: 21,
    losses: 3,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Marlon Vera',
    rank: 6,
    wins: 20,
    losses: 8,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Henry Cejudo',
    rank: 7,
    wins: 16,
    losses: 3,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Song Yadong',
    rank: 8,
    wins: 20,
    losses: 7,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Rob Font',
    rank: 9,
    wins: 20,
    losses: 6,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Mario Bautista',
    rank: 10,
    wins: 13,
    losses: 2,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'José Aldo',
    rank: 11,
    wins: 31,
    losses: 8,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Kyler Phillips',
    rank: 12,
    wins: 10,
    losses: 2,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Aiemann Zahabi',
    rank: 13,
    wins: 10,
    losses: 2,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Marcus McGhee',
    rank: 14,
    wins: 7,
    losses: 1,
    division: 'Bantamweight',
    isChampion: false,
  },
  {
    name: 'Montel Jackson',
    rank: 15,
    wins: 13,
    losses: 2,
    division: 'Bantamweight',
    isChampion: false,
  },
  // End of Bantamweight Contenders

  // Featherweight Division
  {
    name: 'Ilia Topuria',
    rank: 'Champion',
    wins: 14,
    losses: 0,
    division: 'Featherweight',
    isChampion: true,
  },

  // Featherweight Contenders
  {
    name: 'Alexander Volkanovski',
    rank: 1,
    wins: 25,
    losses: 2,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Max Holloway',
    rank: 2,
    wins: 24,
    losses: 7,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Diego Lopes',
    rank: 3,
    wins: 21,
    losses: 5,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Movsar Evloev',
    rank: 4,
    wins: 17,
    losses: 0,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Yair Rodriguez',
    rank: 5,
    wins: 15,
    losses: 4,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Brian Ortega',
    rank: 6,
    wins: 15,
    losses: 3,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Arnold Allen',
    rank: 7,
    wins: 19,
    losses: 2,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Josh Emmett',
    rank: 8,
    wins: 18,
    losses: 4,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Aljamain Sterling',
    rank: 9,
    wins: 23,
    losses: 4,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Calvin Kattar',
    rank: 10,
    wins: 23,
    losses: 7,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Lerone Murphy',
    rank: 11,
    wins: 12,
    losses: 0,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Giga Chikadze',
    rank: 12,
    wins: 14,
    losses: 3,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Bryce Mitchell',
    rank: 13,
    wins: 15,
    losses: 1,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Dan Ige',
    rank: 14,
    wins: 17,
    losses: 6,
    division: 'Featherweight',
    isChampion: false,
  },
  {
    name: 'Edson Barboza',
    rank: 15,
    wins: 23,
    losses: 11,
    division: 'Featherweight',
    isChampion: false,
  },
  // End of Featherweight Contenders

  // Lightweight Division
  {
    name: 'Islam Makhachev',
    rank: 'Champion',
    wins: 25,
    losses: 1,
    division: 'Lightweight',
    isChampion: true,
  },

  // Lightweight Contenders
  {
    name: 'Charles Oliveira',
    rank: 1,
    wins: 34,
    losses: 9,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Dustin Poirier',
    rank: 2,
    wins: 29,
    losses: 7,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Justin Gaethje',
    rank: 3,
    wins: 25,
    losses: 4,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Beneil Dariush',
    rank: 4,
    wins: 22,
    losses: 5,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Michael Chandler',
    rank: 5,
    wins: 23,
    losses: 8,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Rafael Fiziev',
    rank: 6,
    wins: 12,
    losses: 2,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Arman Tsarukyan',
    rank: 7,
    wins: 20,
    losses: 3,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Mateusz Gamrot',
    rank: 8,
    wins: 22,
    losses: 2,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Jalin Turner',
    rank: 9,
    wins: 14,
    losses: 6,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Dan Hooker',
    rank: 10,
    wins: 22,
    losses: 12,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Renato Moicano',
    rank: 11,
    wins: 17,
    losses: 5,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Drew Dober',
    rank: 12,
    wins: 26,
    losses: 12,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Grant Dawson',
    rank: 13,
    wins: 20,
    losses: 2,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Diego Ferreira',
    rank: 14,
    wins: 18,
    losses: 5,
    division: 'Lightweight',
    isChampion: false,
  },
  {
    name: 'Matt Frevola',
    rank: 15,
    wins: 11,
    losses: 3,
    division: 'Lightweight',
    isChampion: false,
  },
  // End of Lightweight Contenders

  // Welterweight Division
  {
    name: 'Leon Edwards',
    rank: 'Champion',
    wins: 21,
    losses: 3,
    division: 'Welterweight',
    isChampion: true,
  },

  // Welterweight Contenders
  {
    name: 'Colby Covington',
    rank: 1,
    wins: 17,
    losses: 3,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Belal Muhammad',
    rank: 2,
    wins: 23,
    losses: 3,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Kamaru Usman',
    rank: 3,
    wins: 20,
    losses: 3,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Gilbert Burns',
    rank: 4,
    wins: 22,
    losses: 6,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Shavkat Rakhmonov',
    rank: 5,
    wins: 17,
    losses: 0,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Geoff Neal',
    rank: 6,
    wins: 15,
    losses: 5,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Sean Brady',
    rank: 7,
    wins: 15,
    losses: 1,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Stephen Thompson',
    rank: 8,
    wins: 17,
    losses: 6,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Vicente Luque',
    rank: 9,
    wins: 22,
    losses: 9,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Jack Della Maddalena',
    rank: 10,
    wins: 15,
    losses: 2,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Michel Pereira',
    rank: 11,
    wins: 28,
    losses: 11,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Michael Chiesa',
    rank: 12,
    wins: 16,
    losses: 7,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Ian Garry',
    rank: 13,
    wins: 13,
    losses: 0,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Bryan Barberena',
    rank: 14,
    wins: 18,
    losses: 10,
    division: 'Welterweight',
    isChampion: false,
  },
  {
    name: 'Kevin Holland',
    rank: 15,
    wins: 25,
    losses: 9,
    division: 'Welterweight',
    isChampion: false,
  },
  // End of Welterweight Contenders

  // Middleweight Division
  {
    name: 'Sean Strickland',
    rank: 'Champion',
    wins: 28,
    losses: 5,
    division: 'Middleweight',
    isChampion: true,
  },

  // Middleweight Contenders
  {
    name: 'Israel Adesanya',
    rank: 1,
    wins: 24,
    losses: 3,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Dricus Du Plessis',
    rank: 2,
    wins: 20,
    losses: 2,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Robert Whittaker',
    rank: 3,
    wins: 24,
    losses: 7,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Marvin Vettori',
    rank: 4,
    wins: 19,
    losses: 7,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Jared Cannonier',
    rank: 5,
    wins: 17,
    losses: 6,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Derek Brunson',
    rank: 6,
    wins: 23,
    losses: 9,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Paulo Costa',
    rank: 7,
    wins: 14,
    losses: 2,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Roman Dolidze',
    rank: 8,
    wins: 12,
    losses: 2,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Jack Hermansson',
    rank: 9,
    wins: 23,
    losses: 8,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Andre Muniz',
    rank: 10,
    wins: 23,
    losses: 5,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Brendan Allen',
    rank: 11,
    wins: 22,
    losses: 5,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Kelvin Gastelum',
    rank: 12,
    wins: 17,
    losses: 8,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Chris Curtis',
    rank: 13,
    wins: 30,
    losses: 10,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Caio Borralho',
    rank: 14,
    wins: 14,
    losses: 1,
    division: 'Middleweight',
    isChampion: false,
  },
  {
    name: 'Anthony Hernandez',
    rank: 15,
    wins: 11,
    losses: 2,
    division: 'Middleweight',
    isChampion: false,
  },
  // End of Middleweight Contenders

  // Light Heavyweight Division
  {
    name: 'Jamahal Hill',
    rank: 'Champion',
    wins: 12,
    losses: 1,
    division: 'Light Heavyweight',
    isChampion: true,
  },

  // Light Heavyweight Contenders
  {
    name: 'Jiri Prochazka',
    rank: 1,
    wins: 29,
    losses: 3,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Magomed Ankalaev',
    rank: 2,
    wins: 18,
    losses: 1,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Jan Blachowicz',
    rank: 3,
    wins: 29,
    losses: 10,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Aleksandar Rakic',
    rank: 4,
    wins: 14,
    losses: 3,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Nikita Krylov',
    rank: 5,
    wins: 30,
    losses: 9,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Johnny Walker',
    rank: 6,
    wins: 21,
    losses: 7,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Ryan Spann',
    rank: 7,
    wins: 21,
    losses: 8,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Volkan Oezdemir',
    rank: 8,
    wins: 18,
    losses: 7,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Paul Craig',
    rank: 9,
    wins: 17,
    losses: 6,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Anthony Smith',
    rank: 10,
    wins: 36,
    losses: 18,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Khalil Rountree Jr.',
    rank: 11,
    wins: 12,
    losses: 5,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Dominick Reyes',
    rank: 12,
    wins: 12,
    losses: 4,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Azamat Murzakanov',
    rank: 13,
    wins: 13,
    losses: 0,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Dustin Jacoby',
    rank: 14,
    wins: 19,
    losses: 7,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  {
    name: 'Carlos Ulberg',
    rank: 15,
    wins: 8,
    losses: 1,
    division: 'Light Heavyweight',
    isChampion: false,
  },
  // End of Light Heavyweight Contenders

  // Heavyweight Division
  {
    name: 'Jon Jones',
    rank: 'Champion',
    wins: 27,
    losses: 1,
    division: 'Heavyweight',
    isChampion: true,
  },

  // Heavyweight Contenders
  {
    name: 'Sergei Pavlovich',
    rank: 1,
    wins: 18,
    losses: 1,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Ciryl Gane',
    rank: 2,
    wins: 12,
    losses: 2,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Stipe Miocic',
    rank: 3,
    wins: 20,
    losses: 4,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Curtis Blaydes',
    rank: 4,
    wins: 17,
    losses: 4,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Tom Aspinall',
    rank: 5,
    wins: 13,
    losses: 3,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Tai Tuivasa',
    rank: 6,
    wins: 15,
    losses: 5,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Sergey Spivak',
    rank: 7,
    wins: 16,
    losses: 4,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Alexander Volkov',
    rank: 8,
    wins: 37,
    losses: 10,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Jailton Almeida',
    rank: 9,
    wins: 19,
    losses: 2,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Marcin Tybura',
    rank: 10,
    wins: 24,
    losses: 8,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Derrick Lewis',
    rank: 11,
    wins: 27,
    losses: 11,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Blagoy Ivanov',
    rank: 12,
    wins: 19,
    losses: 5,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Chris Daukaus',
    rank: 13,
    wins: 12,
    losses: 6,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: "Don'Tale Mayes",
    rank: 14,
    wins: 10,
    losses: 5,
    division: 'Heavyweight',
    isChampion: false,
  },
  {
    name: 'Walt Harris',
    rank: 15,
    wins: 13,
    losses: 10,
    division: 'Heavyweight',
    isChampion: false,
  },
  // End of Heavyweight Contenders
]
