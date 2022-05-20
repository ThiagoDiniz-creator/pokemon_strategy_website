export const calculateStat = (baseValue, ev, iv, level, isHealth) =>
  isHealth
    ? Math.floor((((2 * parseFloat(baseValue) + parseFloat(iv) + parseFloat(ev)) * parseFloat(level)) / 100) + parseFloat(level) + 10)
    : Math.floor(Math.floor(((2 * parseFloat(baseValue) + parseFloat(iv) + parseFloat(ev)) * parseFloat(level)) / 100 + 5));

export const STATS_PATTERN = [
  {
    base_stat: 0,
    effort: 0,
    iv: 0,
    stat: {
      name: "hp",
      url: "https://pokeapi.co/api/v2/stat/1/",
    },
    first_loading: true,
  },
  {
    base_stat: 0,
    effort: 0,
    iv: 0,
    stat: {
      name: "attack",
      url: "https://pokeapi.co/api/v2/stat/2/",
    },
  },
  {
    base_stat: 0,
    effort: 0,
    iv: 0,
    stat: {
      name: "defense",
      url: "https://pokeapi.co/api/v2/stat/3/",
    },
    first_loading: true,
  },
  {
    base_stat: 0,
    effort: 0,
    iv: 0,
    stat: {
      name: "special-attack",
      url: "https://pokeapi.co/api/v2/stat/4/",
    },
    first_loading: true,
  },
  {
    base_stat: 0,
    effort: 0,
    iv: 0,
    stat: {
      name: "special-defense",
      url: "https://pokeapi.co/api/v2/stat/5/",
    },
    first_loading: true,
  },
  {
    base_stat: 0,
    effort: 0,
    iv: 0,
    stat: {
      name: "speed",
      url: "https://pokeapi.co/api/v2/stat/6/",
    },
    first_loading: true,
  },
];
