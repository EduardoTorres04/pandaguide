// ═══════════════════════════════════════════════
//  data-soo.js
//  Guías de Asedio de Orgrimmar (Parche 5.4)
//
//  Para completar la guía de un jefe:
//  1. Reemplaza el objeto placeholder por la
//     estructura completa (ver data-tot.js).
//  2. Cambia video: null por video: 'ID_YOUTUBE'
//     cuando tengas el enlace.
// ═══════════════════════════════════════════════

function _sooPlaceholder(name) {
  return {
    name,
    type: 'Guía en preparación · Asedio de Orgrimmar',
    video: null,
    general: {
      intro: `La guía completa para ${name} está siendo preparada. Próximamente disponible con mecánicas detalladas, consejos por rol y errores frecuentes.`,
      mechanics: [],
      positioning: ''
    },
    tanque:  { intro: 'Contenido próximamente.', tips: [] },
    dps:     { intro: 'Contenido próximamente.', tips: [] },
    healer:  { intro: 'Contenido próximamente.', tips: [] },
    errores: []
  };
}

const SOO_GUIDES = {
  immerseus:   _sooPlaceholder('Immerseus'),
  protectores: _sooPlaceholder('Los Protectores del Eterno'),
  norushen:    _sooPlaceholder('Norushen'),
  sha:         _sooPlaceholder('El Sha de Orgullo'),
  galakras:    _sooPlaceholder('Galakras'),
  hierroclaw:  _sooPlaceholder('Ironmaw el Brutal'),
  nazgrim:     _sooPlaceholder('General Nazgrim'),
  malkorok:    _sooPlaceholder('Malkorok'),
  spoils:      _sooPlaceholder('Saqueo de Pandaria'),
  thokk:       _sooPlaceholder('Thok el Sediento de Sangre'),
  siegemaster: _sooPlaceholder('Maestro de Asedio Blackfuse'),
  paragons:    _sooPlaceholder('Paragons de la Klaxxi'),
  garrosh:     _sooPlaceholder('Garrosh Hellscream'),
};
