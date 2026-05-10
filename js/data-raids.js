// ═══════════════════════════════════════════════
//  data-raids.js
//  Lista maestra de raids y jefes.
//  Para agregar una nueva raid: añade un objeto
//  a RAIDS y crea su archivo data-{id}.js.
// ═══════════════════════════════════════════════

const RAIDS = [
  {
    id: 'tot',
    name: 'Trono del Trueno',
    patch: '5.2',
    bosses: [
      { id: 'jinrokh',    name: "Jin'rokh el Rompedor",    n: 1  },
      { id: 'horridon',   name: 'Horridon',                n: 2  },
      { id: 'ancianos',   name: 'Consejo de Ancianos',     n: 3  },
      { id: 'tortos',     name: 'Tortos',                  n: 4  },
      { id: 'megaera',    name: 'Megaera',                 n: 5  },
      { id: 'jikun',      name: 'Ji-Kun',                  n: 6  },
      { id: 'durumu',     name: 'Durumu el Olvidado',      n: 7  },
      { id: 'primordius', name: 'Primordius',              n: 8  },
      { id: 'animus',     name: 'Animus Oscuro',           n: 9  },
      { id: 'hierroqon',  name: 'Qon el Tenaz',            n: 10 },
      { id: 'consortes',  name: 'Las Empíreas Gemelas',    n: 11 },
      { id: 'leishen',    name: 'Lei Shen',                n: 12 },
      { id: 'raden',      name: 'Ra-den',                  n: 13, hc: true },
    ]
  },
  {
    id: 'soo',
    name: 'Asedio de Orgrimmar',
    patch: '5.4',
    bosses: [
      { id: 'immerseus',    name: 'Immerseus',               n: 1  },
      { id: 'protectores',  name: 'Los Protectores del Eterno', n: 2 },
      { id: 'norushen',     name: 'Norushen',                n: 3  },
      { id: 'sha',          name: 'El Sha de Orgullo',       n: 4  },
      { id: 'galakras',     name: 'Galakras',                n: 5  },
      { id: 'hierroclaw',   name: 'Ironmaw el Brutal',       n: 6  },
      { id: 'nazgrim',      name: 'General Nazgrim',         n: 7  },
      { id: 'malkorok',     name: 'Malkorok',                n: 8  },
      { id: 'spoils',       name: 'Saqueo de Pandaria',      n: 9  },
      { id: 'thokk',        name: 'Thok el Sediento de Sangre', n: 10 },
      { id: 'siegemaster',  name: 'Maestro de Asedio Blackfuse', n: 11 },
      { id: 'paragons',     name: 'Paragons de la Klaxxi',   n: 12 },
      { id: 'garrosh',      name: 'Garrosh Hellscream',      n: 13 },
    ]
  }
];
