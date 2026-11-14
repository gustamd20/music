import { Router } from "express";
import { exec } from "node:child_process";

const endpoints = Router();

const musicas = [
  {
    numero: 1,
    cantor: "Post Malone, Ty Dolla $ign",
    nome: "Psycho",
    youtubeId: "d1wy6LWfHAs"
  },
  {
    numero: 2,
    cantor: "Duran Duran",
    nome: "Ordinary World",
    youtubeId: "vm5iK_tNWAg"
  },
  {
    numero: 3,
    cantor: "Cássia Eller",
    nome: "O Segundo Sol",
    youtubeId: "cv8mUTfZPsI"
  },
    {
    numero: 4,
    cantor: "Akon, Snoop Dogg",
    nome: "I Wanna Love You",
    youtubeId: "jOiqV38fyKM"
  },
  {
    numero: 5,
    cantor: "Jason Derulo",
    nome: "Whatcha Say",
    youtubeId: "XQUt2NT6Af4"
  },
  {
    numero: 6,
    cantor: "Linkin Park",
    nome: "Papercut",
    youtubeId: "84J_XmGkX48"
  },
    {
    numero: 7,
    cantor: "Audioslave",
    nome: "I Am The Highway",
    youtubeId: "pOOItvMnMB0"
  },
  {
    numero: 8,
    cantor: "50 Cent",
    nome: "P.I.M.P",
    youtubeId: "Jy1D6caG8nU"
  },
  {
    numero: 9,
    cantor: "Three Days Grace",
    nome: "I Hate Everything About You",
    youtubeId: "ph9KP2_lT5Q"
  },
    {
    numero: 10,
    cantor: "Paula Fernandes",
    nome: "Pássaro de Fogo",
    youtubeId: "FKu_iQSnNBY"
  },
  {
    numero: 11,
    cantor: "Fort Minor",
    nome: "Remember The Name",
    youtubeId: "MJD39Aja1Is"
  },
  {
    numero: 12,
    cantor: "Bruno e Marrone",
    nome: "Ligação Urbana",
    youtubeId: "71KHNZsKr2s"
  },
    {
    numero: 13,
    cantor: "Eminem",
    nome: "Not Afraid",
    youtubeId: "grPV-Fae6I"
  },
  {
    numero: 14,
    cantor: "Red Hot Chilli Peppers",
    nome: "Californication",
    youtubeId: "A__cH65WRvE"
  },
  {
    numero: 15,
    cantor: "Temple Of The Dog",
    nome: "Hunger Strike",
    youtubeId: "c3QX1zMGT3w"
  },
    {
    numero: 16,
    cantor: "Slipknot",
    nome: "Psychosocial",
    youtubeId: "-XlW-cyAdiw"
  },
  {
    numero: 17,
    cantor: "Kanye West, Pusha T",
    nome: "Runaway",
    youtubeId: "VhEoCOWUtcU"
  },
  {
    numero: 18,
    cantor: "Dalto",
    nome: "Muito Estranho",
    youtubeId: "cwd9PaXBKzM"
  },
    {
    numero: 19,
    cantor: "Backstreet Boys",
    nome: "I Want It That Way",
    youtubeId: "LwkrXybZ1uo"
  },
  {
    numero: 20,
    cantor: "Blink-182",
    nome: "All The Small Things",
    youtubeId: "5_PBNZXlzp0"
  },
  {
    numero: 21,
    cantor: "Marília Mendonça",
    nome: "Deprê",
    youtubeId: "UPxGNI-u4XA"
  },
    {
    numero: 22,
    cantor: "Legião Urbana",
    nome: "Giz",
    youtubeId: "CbFNwokMbG8"
  },
  {
    numero: 23,
    cantor: "Linkin Park",
    nome: "Faint",
    youtubeId: "2mXNRsyTitA"
  },
  {
    numero: 24,
    cantor: "A Flock of Seagulls",
    nome: "I Ran (So Far Away)",
    youtubeId: "ui40yHyBe2I"
  },
    {
    numero: 25,
    cantor: "Rupert Holmes",
    nome: "Escape",
    youtubeId: "FXG_I_tf_i4"
  },
  {
    numero: 26,
    cantor: "Pearl Jam",
    nome: "Alive",
    youtubeId: "3MutXUvS37k"
  },
  {
    numero: 27,
    cantor: "Capital Inicial",
    nome: "À Sua Maneira",
    youtubeId: "aD5h8zD0NMM"
  },
    {
    numero: 28,
    cantor: "Three Days Grace",
    nome: "Animal I Have Become",
    youtubeId: "ysho2xTWUYo"
  },
  {
    numero: 29,
    cantor: "João Bosco e Vinícius",
    nome: "Chora, Me Liga",
    youtubeId: "6fJayNqtkM4"
  },
  {
    numero: 30,
    cantor: "Wham!",
    nome: "Last Christmas",
    youtubeId: "GJvGf_ifiKw"
  },
    {
    numero: 31,
    cantor: "Simple Plan",
    nome: "Perfect",
    youtubeId: "PMMqfnRx2IA"
  },
  {
    numero: 32,
    cantor: "Jorge e Mateus",
    nome: "Duas Metades",
    youtubeId: "jxSbRY2yjfE"
  },
  {
    numero: 33,
    cantor: "Juice WRLD",
    nome: "Lucid Dreams",
    youtubeId: "hHtv2XMZlKs"
  },
    {
    numero: 34,
    cantor: "Pitbull, Afrojack, Ne-Yo",
    nome: "Give Me Everything",
    youtubeId: "E2lX1ZovtcA"
  },
  {
    numero: 35,
    cantor: "Amado Batista",
    nome: "Meu Ex-Amor",
    youtubeId: "s-0yw1xODak"
  },
  {
    numero: 36,
    cantor: "Green Day",
    nome: "Good Riddance",
    youtubeId: "X2TYH_qTGv8"
  },    {
    numero: 37,
    cantor: "Slipknot",
    nome: "Duality",
    youtubeId: "B2lmOei7qfk"
  },
  {
    numero: 38,
    cantor: "Twenty One Pilots",
    nome: "Heavydirtysoul",
    youtubeId: "lzXRdS9cynQ"
  },
  {
    numero: 39,
    cantor: "AC/DC",
    nome: "You Shook Me All Night Long",
    youtubeId: "SP9t2Iq_zQ8"
  },    {
    numero: 40,
    cantor: "Kid Abelha",
    nome: "Como Eu Quero",
    youtubeId: "mWynalx323E"
  },
  {
    numero: 41,
    cantor: "The Offspring",
    nome: "Pretty Fly",
    youtubeId: "BepGmpLT9HA"
  },
  {
    numero: 42,
    cantor: "Kanye West",
    nome: "Stronger",
    youtubeId: "2ulp_AMut14"
  },    
  {
    numero: 43,
    cantor: "Foo Fighters",
    nome: "Learn To Fly",
    youtubeId: "HJMLLKgknvk"
  },
  {
    numero: 44,
    cantor: "Cleiton e Camargo",
    nome: "Não Quero Te Perder",
    youtubeId: "yiEeG1qxbN4"
  },
  {
    numero: 45,
    cantor: "Michael Jackson",
    nome: "You Are Not Alone",
    youtubeId: "02dMNQxwy48"
  },
  {
    numero: 46,
    cantor: "Glass Animals",
    nome: "Heat Waves",
    youtubeId: "XDjB9E3YtUE"
  },
  {
    numero: 47,
    cantor: "Nickelback",
    nome: "How You Remind Me",
    youtubeId: "vkvrbbtnp6s"
  },
  {
    numero: 48,
    cantor: "Projota",
    nome: "Ela Só Quer Paz",
    youtubeId: "SzhaTUwfB5M"
  },
  {
    numero: 49,
    cantor: "João Neto e Frederico",
    nome: "Lê Lê Lê",
    youtubeId: "QMdQFCy1Fcs"
  },
  {
    numero: 50,
    cantor: "Joy Crookes",
    nome: "Feet Don't Fail Me Now",
    youtubeId: "icKzfie3Xhk"
  },
  {
    numero: 51,
    cantor: "Jorge Ben Jor",
    nome: "O Telefone Tocou Novamente",
    youtubeId: "vzb4nUxFBVk"
  },
  {
    numero: 52,
    cantor: "Link do Zap",
    nome: "a última dança",
    youtubeId: "aYsP_fD-sn0"
  },
  {
    numero: 53,
    cantor: "Pearl Jam",
    nome: "Last Kiss",
    youtubeId: "buGVXyYyqXw"
  },
  {
    numero: 54,
    cantor: "Justin Timberlake, T.I",
    nome: "My Love",
    youtubeId: "3LmSjmcUNh8"
  },
  {
    numero: 55,
    cantor: "Maroon 5",
    nome: "Maps",
    youtubeId: "lMMGvFS_KqE"
  },
  {
    numero: 56,
    cantor: "Los Lobos",
    nome: "La Bamba",
    youtubeId: "P8PYQvl5HP4"
  },
  {
    numero: 57,
    cantor: "R.E.M",
    nome: "Losing My Religion",
    youtubeId: "Efa6BAWPm9o"
  },
  {
    numero: 58,
    cantor: "Sean Paul",
    nome: "I Still in Love with You",
    youtubeId: "Y949lQBp5zk"
  },
  {
    numero: 59,
    cantor: "Leandro e Leonardo",
    nome: "Pense em Mim",
    youtubeId: "qb-HMzBwOxE"
  },
  {
    numero: 60,
    cantor: "Ozzy Osbourne",
    nome: "No More Tears",
    youtubeId: "5foQanhdArA"
  },
  {
    numero: 61,
    cantor: "Guns N'Roses",
    nome: "Knockin'On Heaven's Door",
    youtubeId: "f8OHybVhQwc"
  },
  {
    numero: 62,
    cantor: "Henrique e Juliano",
    nome: "Na Hora da Raiva",
    youtubeId: "MUlDQ_wvQoA"
  },
  {
    numero: 63,
    cantor: "Michael Jackson",
    nome: "Human Nature",
    youtubeId: "oqLpko9Gprs"
  },
  {
    numero: 64,
    cantor: "Eminem, Dido",
    nome: "Stan",
    youtubeId: "HIqQ0PfuPo8"
  },
  {
    numero: 65,
    cantor: "Post Malone, Morgan Wallen",
    nome: "I Had Some Help",
    youtubeId: "B8VEqSBTjZQ"
  },
  {
    numero: 66,
    cantor: "Michael Jackson",
    nome: "Rock With You",
    youtubeId: "OvzJZTkWYoY"
  },
  {
    numero: 67,
    cantor: "Guns N'Roses",
    nome: "Sweet Child O'Mine",
    youtubeId: "oMfMUfgjiLg"
  },
  {
    numero: 68,
    cantor: "Luan Santana",
    nome: "Você de Mim Não Sai",
    youtubeId: "adfw1YthAOQ"
  },
  {
    numero: 69,
    cantor: "CPM 22",
    nome: "Um Minuto Para O Fim Do Mundo",
    youtubeId: "2Z8Fyuj-gxo"
  },
  {
    numero: 70,
    cantor: "Bon Jovi",
    nome: "Livin'On A Prayer",
    youtubeId: "YBdyc1WDlBQ"
  },
  {
    numero: 71,
    cantor: "Michael Jackson",
    nome: "Dirty Diana",
    youtubeId: "1R4pJc6vNn8"
  },
  {
    numero: 72,
    cantor: "Guns N'Roses",
    nome: "Patience",
    youtubeId: "MkoeqtKUUe4"
  },
  {
    numero: 73,
    cantor: "Talking Heads",
    nome: "Psycho Killer",
    youtubeId: "NyaOYfpq9Fc"
  },
  {
    numero: 74,
    cantor: "Radiohead",
    nome: "Creep",
    youtubeId: "9RfVp-GhKfs"
  },
  {
    numero: 75,
    cantor: "The Police",
    nome: "Every Breath You Take",
    youtubeId: "-SaUrDhp034"
  },
  {
    numero: 76,
    cantor: "Weezer",
    nome: "Buddy Holly",
    youtubeId: "cQzMHhRCTYw"
  },
  {
    numero: 77,
    cantor: "Outkast",
    nome: "Hey Ya!",
    youtubeId: "ubk1skSE9OA"
  },
  {
    numero: 78,
    cantor: "Linkin Park",
    nome: "What I've Done",
    youtubeId: "eXRWHzV72sU"
  },
  {
    numero: 79,
    cantor: "Charlie Brown Jr.",
    nome: "Uma Criança Com Seu Olhar",
    youtubeId: "a9GnjCz3dnQ"
  },
  {
    numero: 80,
    cantor: "The Calling",
    nome: "Wherever You Will Go",
    youtubeId: "iGbPR36zGx4"
  },
  {
    numero: 81,
    cantor: "Tupac",
    nome: "Changes",
    youtubeId: "xg3J5slvB-k"
  },
  {
    numero: 82,
    cantor: "Marcelo D2",
    nome: "Desabafo",
    youtubeId: "Kt2LGV2zbSY"
  },
  {
    numero: 83,
    cantor: "Raça Negra",
    nome: "Deus Me Livre",
    youtubeId: "GBHrjOYoTJc"
  },
  {
    numero: 84,
    cantor: "The Smiths",
    nome: "There Is A Light That Never Goes Out",
    youtubeId: "jC7ydeV62Ac"
  },
  {
    numero: 85,
    cantor: "Evanescence",
    nome: "Going Under",
    youtubeId: "OOUzex9msnc"
  },
  {
    numero: 86,
    cantor: "Perlla",
    nome: "Tremendo Vacilão",
    youtubeId: "DN5_iOrJjfc"
  },
  {
    numero: 87,
    cantor: "Matchbox Twenty",
    nome: "Push",
    youtubeId: "t2rsf8SiMJY"
  },
  {
    numero: 88,
    cantor: "Foo Fighters",
    nome: "Everlong",
    youtubeId: "AxuTd9rwEHQ"
  },
  {
    numero: 89,
    cantor: "Rihanna",
    nome: "Disturbia",
    youtubeId: "wmGjajXDHKo"
  },
  {
    numero: 90,
    cantor: "Sabrina Carpenter",
    nome: "Espresso",
    youtubeId: "kIft-LUHHVA"
  },
    {
    numero: 91,
    cantor: "Tears For Fears",
    nome: "Head Over Heels",
    youtubeId: "luOwnc5bqho"
  },
  {
    numero: 92,
    cantor: "Limp Bizkit",
    nome: "Behind Blue Eyes",
    youtubeId: "ozllPih3hOk"
  },
  {
    numero: 93,
    cantor: "Eurythmics",
    nome: "Sweet Dreams",
    youtubeId: "i5_asj1BGFs"
  },
  {
    numero: 94,
    cantor: "Lady Gaga",
    nome: "Poker Face",
    youtubeId: "oG-4Uvhm4lI"
  },
  {
    numero: 95,
    cantor: "Avenged Sevenfold",
    nome: "Bat Country",
    youtubeId: "NJ2regeDoJw"
  },
  {
    numero: 96,
    cantor: "Raça Negra",
    nome: "Jeito Felino",
    youtubeId: "EQzGTupUqWo"
  },
    {
    numero: 97,
    cantor: "Léo Magalhães",
    nome: "Fala Comigo",
    youtubeId: "XwkUd3NgYPY"
  },
  {
    numero: 98,
    cantor: "Sean Kingston",
    nome: "Beautiful Girls",
    youtubeId: "_Wxfu7Th2S8"
  },
  {
    numero: 99,
    cantor: "Metallica",
    nome: "The Unforgiven",
    youtubeId: "IKhscaE_9Ks"
  },
    {
    numero: 100,
    cantor: "Daft Punk, Julian Casablancas",
    nome: "Instant Crush",
    youtubeId: "khnokW3Mw24"
  }
  
];

endpoints.get("/musica", (req, resp) => {
    resp.send({
        message: "Escolha um número de 1 a 100"
    });
});

endpoints.get("/musica/:numero", async (req, resp) => {

    const numero = Number(req.params.numero);

    const musica = musicas.find(
        (musica) => musica.numero === numero
    );

    if (!musica) {
        return resp.status(404).json({
            erro: "Música não encontrada"
        });
    }

    const porta = process.env.PORT || 7777;
    const url = `http://localhost:${porta}/player/${numero}`;

    const { exec } = await import("node:child_process");

    exec(`start "" "${url}"`);

    resp.json(musica);
});

endpoints.get("/player/:numero", (req, resp) => {
    resp.sendFile("index.html", {
        root: "./src/public"
    });
});

endpoints.get("/dados-musica/:numero", (req, resp) => {
    const numero = Number(req.params.numero);

    const musica = musicas.find(
        musica => musica.numero === numero
    );

    if (!musica) {
        return resp.status(404).json({
            erro: "Música não encontrada"
        });
    }

    resp.json(musica);
});

export default endpoints;