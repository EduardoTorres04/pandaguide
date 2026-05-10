// ═══════════════════════════════════════════════
//  data-tot.js — Trono del Trueno (Parche 5.2)
// ═══════════════════════════════════════════════

const TOT_GUIDES = {

// ─────────────────────────────────────────────
//  1. JIN'ROKH EL ROMPEDOR
// ─────────────────────────────────────────────
jinrokh: {
  name: "Jin'rokh el Rompedor",
  bossImg: 'img/jinrokh_model.png',
  type: 'Jefe 1 · Una sola fase repetida · Agua y rayo',
  video: '1wuOLYMzaRs',
  general: {
    intro: "Jin'rokh repite el mismo ciclo hasta 4 veces: rompe una estatua creando un charco de Agua Conductora que crece hasta cubrir un cuarto de la sala, lanza al tanque contra la estatua más cercana, y cada ciclo termina con una Tormenta de relámpagos de 15 segundos. Dentro del charco el raid recibe +40% de daño y curación — el encuentro entero gira en torno a aprovechar esa ventana.",
    mechanics: [
      { name: 'Lanzamiento Atronador', desc: "Lanza al tanque contra la estatua más cercana stunándolo 5 segundos y creando un charco de Agua Conductora que crece gradualmente. Hay una estatua por ciclo — el tanque puede influir hacia qué estatua lo mandan alejándose de la del siguiente ciclo antes del cast.", img: null },
      { name: 'Ráfaga estática / Herida estática', desc: "Ráfaga estática aplica 10 stacks de Herida estática al tanque activo. Mientras tenga stacks, cada golpe de auto-ataque de Jin'rokh hace daño de Naturaleza adicional a todo el raid. Los stacks caen solos con el tiempo — el swap debe hacerse cuando quede 1 segundo para minimizar el daño al raid.", img: null },
      { name: 'Relámpago enfocado', desc: "Se fija en un jugador (prefiere ranged) y lo persigue hasta explotar creando una Fisura de relámpagos permanente en el suelo. Si explota dentro del charco el daño de Naturaleza se amplifica un 100%. Si explota sobre una Fisura ya existente el daño es devastador para el raid.", img: 'img/image6.jpeg' },
      { name: 'Tormenta de relámpagos', desc: "Jin'rokh salta al centro y canaliza daño moderado a todo el raid durante 15 segundos. El charco queda electrificado permanentemente tras la tormenta. Después, los tanques mueven al boss a la estatua contigua en sentido horario — nunca a la opuesta, ya que dividiría la sala.", img: 'img/image24.jpeg' },
      { name: 'Ionización', desc: "Solo heroico. Todos los no-tanques reciben este debuff que explota al ser dispelado haciendo daño de Naturaleza en área. Si el jugador está dentro del Agua Conductora al disiparse el daño se amplifica por Conducción — limpiada garantizada. Establece un orden de dispels antes del pull.", hc: true },
    ],
    positioning: "Todo el raid dentro del charco para el +40% de daño y curación. El boss se tankea en el borde del charco mirando la pared. Al inicio de la Tormenta todos salen del charco inmediatamente. Tras ella, los tanques reposicionan al boss a la estatua contigua en sentido horario."
  },
  tanque: {
    intro: "Dos tanques por la mecánica de Herida estática. El swap se hace cuando queda 1 segundo en el debuff — no cuando llega a 0. Esperar ese segundo reduce el daño al raid al mínimo.",
    tips: [
      { t: 't', l: 'T', txt: "Herida estática: cada auto-ataque de Jin'rokh mientras tienes stacks hace daño de Naturaleza a todo el raid. Tauniea cuando el otro tanque tenga 1 segundo restante en el debuff. Nunca esperes a que llegue a 0." },
      { t: 't', l: 'T', txt: "Lanzamiento Atronador: Jin'rokh te lanza siempre a la estatua más lejana de tu posición actual. Para controlar adónde te manda, aléjate de la estatua del siguiente ciclo y acércate a la opuesta antes del cast. DK con Icebound Fortitude y Paladín con Divine Shield pueden romper el stun de 5s." },
      { t: 't', l: 'T', txt: "Puedes quedarte dentro del charco siendo tanque — el +100% de daño de Naturaleza es manejable con cooldowns. Si el healer está bajo presión, posiciónate en el borde del charco teniendo al boss dentro." },
      { t: 'w', l: '!', txt: "Nunca estés dentro del charco cuando el Relámpago enfocado explote cerca. El daño de Naturaleza amplificado puede limpiar al raid si la explosión ocurre dentro del agua." },
    ],
    hcTips: [
      { t: 't', l: 'T', txt: "Ionización (HC): debuff en todos los no-tanques. Si explota dentro del charco limpia al raid. Coordina el orden de dispels antes del pull — el jugador sale del agua, recibe el dispel, vuelve. Un Paladín puede usar Hand of Protection en sí mismo para limpiar el debuff antes de que explote." },
    ]
  },
  dps: {
    intro: "Bloodlust en el primer charco (~35 segundos desde el pull). El +40% de daño dentro del charco es la ventana más importante de la pelea — todos los cooldowns ofensivos alineados con ese momento.",
    tips: [
      { t: 'd', l: 'D', txt: "Relámpago enfocado: si te marca kítea el orbe hacia el borde trasero de la sala alejándote del grupo. Nunca lo lleves sobre una Fisura existente. Si llevas el rayo sal del charco antes de que explote — el daño amplificado puede matarte." },
      { t: 'd', l: 'D', txt: "Tormenta de relámpagos: 15 segundos de daño moderado al raid. Sal del charco inmediatamente, stackea en el boss y deja que los healers cubran. El melee puede seguir atacando durante el canal." },
      { t: 'w', l: '!', txt: "Cada ciclo el charco crece más. Al cuarto ciclo cubre gran parte de la sala y quedan pocas zonas seguras — planifica adónde colocar las Fisuras desde el principio para no bloquear las zonas de escape." },
    ],
    hcTips: [
      { t: 'd', l: 'D', txt: "Ionización (HC): sal del charco antes de que expire el debuff. Clases con inmunidad (Paladín con Divine Shield, Monje con Karma) pueden absorber la explosión sin daño al raid si la usan justo antes del cast." },
    ]
  },
  healer: {
    intro: "Poca presión en Normal. La ventana más eficiente es el charco — todos reciben +40% de curación. Guarda cooldowns mayores para los últimos ciclos donde el charco electrificado añade presión extra.",
    tips: [
      { t: 'h', l: 'H', txt: "Maximiza throughput durante el Bloodlust dentro del charco (+40% curación recibida). Pre-castea heals de área justo antes de que empiece la Tormenta de relámpagos para absorber el pico inicial." },
      { t: 'h', l: 'H', txt: "Vigila al jugador que kítea el Relámpago enfocado — está alejado del grupo y puede recibir daño directo de la explosión. Un heal preventivo antes de que el orbe explote le da margen de seguridad." },
      { t: 'h', l: 'H', txt: "En los últimos ciclos el charco electrificado añade daño de Naturaleza a quienes lo pisen involuntariamente. El daño total del raid sube notablemente — guarda un cooldown de raid para el tercer o cuarto ciclo." },
    ],
    hcTips: [
      { t: 'h', l: 'H', txt: "Ionización (HC): NUNCA dispeles dentro del charco — el daño amplificado limpia al raid. Establece un orden claro antes del pull: jugador sale, dispel, vuelve. Los heals de área que pones dentro del charco también benefician a los jugadores fuera del agua, así que no tienes que elegir entre curar y gestionar los dispels." },
    ]
  },
  errores: [
    { title: "Relámpago enfocado sobre una Fisura existente", desc: "La explosión del Rayo sobre una Fisura hace daño devastador al raid. Kítea siempre hacia el borde trasero libre. Acuerda antes del pull qué zonas quedarán libres de Fisuras." },
    { title: "Relámpago enfocado dentro del charco", desc: "El charco amplifica el daño de Naturaleza un 100%. El jugador marcado debe salir del agua antes de que el Rayo explote." },
    { title: "Swap de tanque tardío", desc: "Cada auto-ataque con stacks altos de Herida estática hace daño de Naturaleza a todo el raid. Cambiar cuando quede 1 segundo en el debuff, no cuando llegue a 0." },
    { title: "Bloodlust fuera del charco", desc: "El charco da +40% de daño. Usarlo en los primeros 35 segundos, antes de que aparezca el primer charco, desperdicia la mayor ventana de DPS del encuentro." },
  ]
},

// ─────────────────────────────────────────────
//  2. HORRIDON
// ─────────────────────────────────────────────
horridon: {
  name: 'Horridon',
  bossImg: 'img/horridon_model.png',
  type: 'Jefe 2 · Una fase dividida en cinco partes · Adds por puertas',
  video: 'YsPftpyCJ_0',
  general: {
    intro: "Cuatro puertas tribales se abren en orden. Cada puerta libera adds de una tribu troll distinta — matar los adds es siempre prioritario sobre el daño al boss. Al 30% aparece el Dios de la Guerra Jalak haciendo daño progresivo al raid hasta morir. Un raid que ignora los adds no llega a la fase final.",
    mechanics: [
      { name: 'Cornada triple', desc: "Tank-buster principal. Daño físico masivo (~600k) con un debuff de 90 segundos que aumenta el daño de la siguiente Cornada un 10% por stack. No puede esquivarse, bloquearse ni pararse — solo absorbs activos (Shield Barrier, Blood Shield) y Shield of the Righteous lo mitigan. El swap se hace entre puertas para que los stacks caigan antes de la siguiente oleada.", img: null },
      { name: 'Doble barrido', desc: "Cono doble (frontal y trasero) que mata a cualquier jugador que no sea el tanque. Horridon debe estar siempre de lado mirando la pared. Tras cada carga de Horridon ejecuta un Doble barrido — corre hacia su cabeza o cola para que el cono no apunte al raid.", img: 'img/image38.jpeg' },
      { name: 'Dinomante', desc: "Aparece 60 segundos después de que abre cada puerta. Interrumpir su curación constantemente — cada tick recupera el 1% de la vida máxima de Horridon. Al 50% de vida se transforma en raptor y suelta el Orbe de Control al morir — clickearlo inmediatamente para cerrar la puerta y detener el spawn de adds.", img: 'img/dinomante_model.png' },
      { name: 'Puerta 1 — Farraki', desc: "Observador Pétreo: castea Mirada de Piedra (stun, interrumpir y matar rápido). Caminante Yermo: crea Trampas de Arena que crecen en el suelo — dispersarse y dispel de los DoTs.", img: 'img/add_farraki_transitayermos.png' },
      { name: 'Puerta 2 — Gurubashi', desc: "Sacerdote de Veneno: interrumpir Descargar de Veneno constantemente. Al morir invoca una Efusión Venenosa que crea charcos de veneno en movimiento — matar inmediatamente. Los charcos se acumulan y bloquean zonas críticas de la sala.", img: 'img/add_gurubashi_sacerdote.png' },
      { name: 'Puerta 3 — Drakkari', desc: "Guerreros y Campeones atacan objetivos aleatorios aplicando Plaga Mortal — dispel inmediato. Señor de la Guerra Congelado aplica Golpe Mortal (−50% curación) al tanque — alta prioridad de kill.", img: 'img/add_drakkari_seniorderguerra.png' },
      { name: 'Puerta 4 — Amani', desc: "Osos de Guerra tienen frontal — posicionarlos de espaldas al raid. Chamán: interrumpir Cadena de Rayos, dispel Hexo de Confusión, matar el Tótem de Nova de Relámpago inmediatamente nada más aparecer (pulsa ~400k AoE cada 3 segundos).", img: 'img/add_amani_oso.png' },
      { name: 'Dios de la Guerra Jalak (30%)', desc: "Aparece al 30% y hace daño progresivo a todo el raid hasta morir. Al morir enfurece a Horridon (+100% daño, +50% velocidad de ataque). Con DPS alto se puede ignorar a Jalak e ir directo a Horridon. Con DPS justo, matar a Jalak primero es más seguro.", img: 'img/horridon_jalak.png' },
      { name: 'Rugido temible', desc: "Solo heroico. Cada 60 segundos invoca un Espíritu de cuernoatroz invisible que solo puede ver el jugador al que persigue. Ese jugador debe empujarlo constantemente con knockbacks durante toda la pelea — nunca se puede matar.", hc: true },
    ],
    positioning: "Horridon de lado mirando la pared lateral, lejos del raid. El tanque de adds lleva los elites agrupados lejos del boss para facilitar el AoE. Mantener a Horridon cerca del raid para reducir el reposicionamiento entre puertas."
  },
  tanque: {
    intro: "Cornada triple no puede esquivarse, bloquearse ni pararse — solo Shield Barrier, Blood Shield y Shield of the Righteous. Swap entre puertas para limpiar los stacks del debuff de 90 segundos.",
    tips: [
      { t: 't', l: 'T', txt: "Posicionamiento base: Horridon siempre de lado mirando la pared. El raid perpendicular al boss para evitar el Doble barrido. Melee en los flancos, nunca delante ni directamente detrás.", img: 'img/horridon_pos_safe.png' },
      { t: 't', l: 'T', txt: "Con muchos adds activos: el tanque de adds los lleva más lejos para dar espacio de maniobra al raid y facilitar el AoE sin riesgo.", img: 'img/horridon_pos_space.png' },
      { t: 't', l: 'T', txt: "Cornada triple: el debuff de 90 segundos aumenta el daño de cada Cornada siguiente un 10% por stack. Swap entre puertas para que caigan. Un Paladín puede usar Hand of Protection en el tanque afectado para limpiar los stacks sin swap." },
      { t: 't', l: 'T', txt: "Doble barrido tiene cono frontal Y trasero. Tras cada carga de Horridon se ejecuta un Doble barrido — muévete hacia su cabeza o cola para que el cono no apunte al raid. Nunca estés frente a Horridon si no eres el tanque." },
      { t: 'w', l: '!', txt: "Jalak al 30%: el tanque de adds lo recoge inmediatamente. Al morir Jalak, Horridon enfurece — cooldown defensivo mayor en ese momento." },
    ],
    hcTips: [
      { t: 't', l: 'T', txt: "Espíritu de cuernoatroz (HC): usa knockbacks (Vínculo débil, Heroic Throw) para alejarlo constantemente. El Espíritu nunca muere — te persigue toda la pelea. Si como tanque eres el objetivo, pide al co-tanque que cubra a Horridon mientras lo manejas." },
    ]
  },
  dps: {
    intro: "Prioridad siempre: elite solitario → Dinomante (interrupt curación constante) → limpiar resto. El Orbe de Control al 50% del Dinomante — click inmediato para cerrar la puerta.",
    tips: [
      { t: 'd', l: 'D', txt: "Puerta 2: la Efusión Venenosa del Sacerdote es máxima prioridad al aparecer. Crea charcos de veneno en movimiento que se acumulan bloqueando zonas críticas de la sala. No la dejes viva más de 2-3 segundos." },
      { t: 'd', l: 'D', txt: "Puerta 4: el Tótem de Nova de Relámpago pulsa ~400k AoE cada 3 segundos. Matar en cuanto aparezca — es la prioridad absoluta de esa puerta. Dos pulsos sin respuesta pueden limpiar al raid." },
      { t: 'd', l: 'D', txt: "Jalak al 30%: con DPS alto ignorar a Jalak e ir directo a Horridon. Con DPS justo, matar a Jalak primero — su daño al raid escala rápido y al morir enfurece a Horridon de todas formas." },
      { t: 'w', l: '!', txt: "El Señor de la Guerra Congelado (Puerta 3) aplica −50% curación al tanque. Es alta prioridad de kill — mientras viva el tanque está en riesgo ante cualquier Cornada triple." },
    ],
    hcTips: [
      { t: 'd', l: 'D', txt: "Rugido temible (HC): además de invocar el Espíritu, aumenta un +50% la velocidad de ataque de todos los adds activos. Limpia los adds antes de que el Rugido coincida con una puerta llena de elites." },
    ]
  },
  healer: {
    intro: "La presión escala puerta a puerta. Puerta 1 es ligera, Puerta 4 y Jalak son los momentos más duros. Llega a ellos con al menos un cooldown de raid disponible.",
    tips: [
      { t: 'h', l: 'H', txt: "Puerta 3: el Señor de la Guerra Congelado reduce la curación al tanque un 50%. Aumenta el output en ese tanque hasta que muera el add. Los adds de Puerta 3 también atacan objetivos aleatorios — mantén HoTs activos en todo el raid." },
      { t: 'h', l: 'H', txt: "Jalak: hace daño progresivo al raid hasta morir. Cooldown de raid en ese momento. Si el grupo va directo a Horridon ignorando a Jalak, prepara un segundo cooldown — el daño combinado de ambos puede ser muy alto." },
      { t: 'w', l: '!', txt: "No uses cooldowns mayores en Puertas 1 y 2. Puerta 4 y la fase de Jalak son los momentos de mayor presión — llega a ellos con reservas." },
    ],
    hcTips: [
      { t: 'h', l: 'H', txt: "Rugido temible (HC): +50% velocidad de ataque de todos los adds activos. Si coincide con una puerta llena, el daño al tanque de adds puede dispararse — cooldown individual en ese tanque en cada Rugido." },
    ]
  },
  errores: [
    { title: "No interrumpir la Curación de Dino del Dinomante", desc: "Cada tick recupera el 1% de la vida máxima de Horridon. Es el interrupt más importante de cada puerta — asigna un interruptor dedicado." },
    { title: "No clickear el Orbe de Control al aparecer", desc: "El Orbe cae cuando el Dinomante llega al 50%. Sin clickearlo los adds de esa puerta siguen apareciendo." },
    { title: "Efusión Venenosa viva más de 3 segundos (Puerta 2)", desc: "Crea charcos de veneno en movimiento que bloquean zonas críticas. Máxima prioridad al aparecer." },
    { title: "Tótem de Nova de Relámpago sin matar (Puerta 4)", desc: "Pulsa ~400k AoE cada 3 segundos. Dos pulsos sin respuesta pueden limpiar al raid." },
  ]
},

// ─────────────────────────────────────────────
//  3. CONSEJO DE ANCIANOS
// ─────────────────────────────────────────────
ancianos: {
  name: 'Consejo de Ancianos',
  bossImg: null,
  type: 'Jefe 3 · Una fase · Cuatro jefes simultáneos',
  video: '5FCmCHfiz9Y',
  general: {
    intro: "Cuatro jefes simultáneos que no comparten vida. Siempre uno está empoderado — hay que bajarle un 25% de vida para romper el empoderamiento. Si llega a 100 de energía sin cortarlo hace daño progresivo al raid hasta que se interrumpa. Al morir un jefe su poder pasa al siguiente, acumulándose. Orden de empoderamiento: Malakk → Kazra'jin → Mar'li → Sul.",
    mechanics: [
      { name: 'Sul — Descarga de arena / Tormenta de arena', desc: "Descarga de arena: proyectil interrumpible. Arenas movedizas: aparecen bajo jugadores aleatorios — rootea y daña, salir inmediatamente. Empoderado: Tormenta de arena genera daño continuo al raid y convierte los charcos del suelo en adds que deben matarse antes del siguiente cast o se curan y potencian.", img: 'img/council_sul_model.png' },
      { name: 'Malakk — Asalto glacial / Congelamiento', desc: "Frío cortante: debuff acumulable en el tanque con cada auto-ataque de Malakk. Swap entre 10-13 stacks antes de llegar a 15 (stun). Asalto glacial: daño de Naturaleza extra al raid con cada golpe — la mitigación activa no lo reduce. Empoderado: Congelamiento tiene 5 stacks que caen uno por persona cercana al marcado — el raid se apila inmediatamente con el marcado.", img: 'img/council_malakk_model.png' },
      { name: "Mar'li — Espíritu loa bendito", desc: "Invoca espíritus que intentan llegar al jefe con menos vida para curarle — CC, ralentizar y matar antes de que lleguen. Su cast debe interrumpirse constantemente. Empoderada: invoca un espíritu de sombra que persigue a un jugador aleatorio y hace daño masivo si lo alcanza.", img: 'img/council_marli_model.png' },
      { name: "Kazra'jin — Carga imprudente / Descargar", desc: "Carga aleatoriamente sobre jugadores — nadie en su trayectoria. Empoderado: refleja todo el daño recibido al atacante durante 20 segundos tras cada carga. DPS stop completo durante el reflejo.", img: 'img/council_kazrajin_model.png' },
    ],
    positioning: "Un tanque en Mar'li, otro rotando entre Sul y Malakk. Kazra'jin no se puede tankear. El raid se dispersa por la sala para minimizar charcos de arena solapados. El empoderado activo tiene siempre prioridad de daño, salvo Kazra'jin empoderado."
  },
  tanque: {
    intro: "Malakk es el boss más peligroso por el Asalto glacial — la mitigación activa no lo reduce. Swap de Frío cortante entre 10-13 stacks, nunca dejar llegar a 15.",
    tips: [
      { t: 't', l: 'T', txt: "Frío cortante (Malakk): swap entre 10-13 stacks. A 15 stacks el tanque queda stuneado varios segundos — potencialmente letal. Los stacks caen solos con el tiempo, así que el co-tanque solo necesita relevar brevemente." },
      { t: 't', l: 'T', txt: "Asalto glacial: la mitigación activa (Shield Block, Elusive Brew) NO reduce su daño al raid. Usa cooldowns mayores cuando Malakk esté activo si el daño al raid está siendo alto." },
      { t: 't', l: 'T', txt: "Mar'li: tankearla cerca de los otros bosses para aprovechar el cleave. Muévela lejos de su posición antes de su cast de espíritu para ganar tiempo de reacción al raid." },
      { t: 'w', l: '!', txt: "Kazra'jin no tiene tabla de amenaza — apártate de su trayectoria de carga y avisa al raid por donde va a cargar si puedes predecirlo." },
    ],
    hcTips: [
      { t: 't', l: 'T', txt: "Descargar (HC): tras cada carga de Kazra'jin empoderado refleja el 5% de todo el daño recibido durante 20 segundos. Es el momento de mayor presión de curación del encuentro — Spirit Link Totem, Power Word: Barrier o Tranquilidad aquí." },
    ]
  },
  dps: {
    intro: "Lust en el pull. Todo el daño inicial a Sul mientras Malakk está empoderado para cleavar ambos. Romper el empoderamiento activo siempre tiene prioridad sobre cualquier otro objetivo.",
    tips: [
      { t: 'd', l: 'D', txt: "Kazra'jin empoderado: DPS stop completo cuando cargue — refleja todo el daño al atacante durante 20 segundos. En HC el reflejo afecta a todo el raid, no solo al atacante." },
      { t: 'd', l: 'D', txt: "Espíritus de Mar'li: CC, ralentizar y matar inmediatamente. Un espíritu que llega al jefe objetivo puede curar una cantidad relevante de vida, alargando el combate." },
      { t: 'd', l: 'D', txt: "Sul empoderado: los adds de Tormenta de arena son máxima prioridad. Si no se matan antes del siguiente cast se curan a vida completa y ganan un buff de daño — efecto bola de nieve." },
      { t: 'w', l: '!', txt: "La estrategia óptima es matar a Sul antes de que sea empoderado — es la mecánica más destructiva del encuentro si llega a activarse plenamente." },
    ],
    hcTips: [
      { t: 'd', l: 'D', txt: "Destino retorcido (HC, Mar'li empoderada): dos jugadores generan adds que dañan progresivamente cuanto más cerca estén entre sí. Un ranged fuera atrae uno de los dos. CC y matar ambos rápido." },
    ]
  },
  healer: {
    intro: "La presión varía mucho según el empoderado activo. Malakk y Sul empoderados son los momentos más duros. Guarda cooldowns para esos momentos.",
    tips: [
      { t: 'h', l: 'H', txt: "Congelamiento (Malakk empoderado): cuando el raid se apila con el marcado para distribuir los 5 stacks, prepara curación de área — todos reciben daño simultáneamente." },
      { t: 'h', l: 'H', txt: "Tormenta de arena (Sul empoderado): daño continuo al raid más el daño de los adds activos. Asigna un cooldown de raid para cada Tormenta — puede haber varias si Sul sobrevive mucho." },
      { t: 'w', l: '!', txt: "Kazra'jin empoderado con reflejo activo: si algún DPS no para el daño el resultado puede ser su propia muerte. Ten curación de emergencia disponible — el reflejo puede matar jugadores sin avisar." },
    ],
    hcTips: [
      { t: 'h', l: 'H', txt: "Kazra'jin empoderado (HC): el reflejo afecta a todo el raid. Es el momento de mayor presión del encuentro en heroico — asigna cooldowns específicamente para cuando cargue empoderado." },
    ]
  },
  errores: [
    { title: "Dejar el empoderamiento llegar a 100 de energía", desc: "Es la causa más común de limpiada. Romper el empoderamiento activo siempre tiene prioridad sobre cualquier otro objetivo." },
    { title: "Atacar a Kazra'jin durante el reflejo de daño", desc: "Todo el daño se devuelve al atacante durante 20 segundos. DPS stop completo cuando está empoderado y carga." },
    { title: "No apiñarse con el marcado de Malakk empoderado", desc: "Congelamiento tiene 5 stacks que caen uno por persona cercana. Si el raid no se apila, el marcado recibe todo el daño solo." },
    { title: "Dejar que Sul sea empoderado", desc: "La Tormenta de arena es la mecánica más destructiva del encuentro. La estrategia óptima es matar a Sul antes de que llegue su turno de empoderamiento." },
  ]
},

// ─────────────────────────────────────────────
//  4. TORTOS
// ─────────────────────────────────────────────
tortos: {
  name: 'Tortos',
  bossImg: 'img/tortos_model.png',
  type: 'Jefe 4 · Una sola fase · Tortuga gigante en cueva',
  video: 'R8LXa3jgNdQ',
  general: {
    intro: "Una sola fase repetitiva donde el control de tortugas y murciélagos tiene prioridad absoluta sobre el daño al boss. Un raid desordenado en esta pelea muere de daño acumulado mucho antes de que Tortos llegue al 0%.",
    mechanics: [
      { name: 'Tortugas Torbellino', desc: "Se invocan cada ~60 segundos. Giran persiguiendo jugadores, dañando y lanzando por los aires a quien tocan. Al bajar de vida entran en Bloqueo de caparazón — quedan inmunes al daño. En ese estado, un jugador puede interponerse entre la tortuga y el boss y usar el Botón de Acción Extra (Patear caparazón) para lanzarla hacia Tortos.", img: 'img/tortos_torbellino.png' },
      { name: 'Aliento de piedra furioso', desc: "Cada ~45 segundos, cuando Tortos acumula 100 de Furia, canaliza 5 segundos de daño letal a todo el raid. Solo puede interrumpirse pateando una tortuga en Bloqueo de caparazón hacia él. El impacto aplica Conmoción de caparazón: +50% daño recibido durante 15 segundos — la ventana de mayor DPS. Si no hay tortuga disponible cuando castea, el raid muere.", img: null },
      { name: 'Llamada del Enjambre — Murciélagos', desc: "Oleada de Murciélagos de Cueva Vampíricos cada ~55 segundos. Drenan vida masivamente al objetivo de mayor amenaza. Si el tanque baja de 350k de vida los murciélagos se curan significativamente. Prioridad de AoE número uno en cuanto bajan del techo.", img: 'img/tortos_murcielago.png' },
      { name: 'Mordisco férreo', desc: "Tank-buster con cast de ~2 segundos que penetra armadura. No puede esquivarse ni bloquearse — solo Shield of the Righteous, Shield Barrier y Blood Shield lo mitigan. Ocurre periódicamente a lo largo de toda la pelea.", img: null },
      { name: 'Pisotón sísmico', desc: "AoE periódico que hace daño a todo el raid y lanza hacia atrás. 65% de la vida máxima en Normal, 100% en Heroico. Predecible — los healers deben tenerlo en el radar para pre-castear.", img: null },
      { name: 'Caída de rocas', desc: "Zonas de daño que caen del techo durante toda la pelea. Moverse continuamente para no acumular zonas en el mismo sitio.", img: 'img/image111.jpeg' },
      { name: 'Caparazones de Roca', desc: "Solo heroico. Fragmentos de caparazón en línea recta — moverse perpendicular a la trayectoria del boss para no quedar en la línea de fuego.", hc: true },
    ],
    positioning: "Tortos de lado mirando la pared. Raid en abanico detrás, moviéndose constantemente para evitar acumular zonas de Caída de rocas. El jugador asignado a patear tortugas sigue su movimiento por la sala."
  },
  tanque: {
    intro: "Un solo tanque principal. El reto es gestionar el Mordisco férreo con mitigación activa a lo largo de toda la pelea mientras se evitan las zonas de daño del suelo.",
    tips: [
      { t: 't', l: 'T', txt: "Mordisco férreo: NO puede esquivarse ni bloquearse. Usa Shield of the Righteous, Shield Barrier o Blood Shield en cada cast. El daño upfront puede ser letal sin mitigación activa, especialmente si coincide con stacks de DoTs." },
      { t: 't', l: 'T', txt: "Pisotón sísmico: avisa a los healers justo antes. En HC hace el 100% de la vida del raid — coordina Crystal Shell u otro cooldown de raid para cada Pisotón." },
      { t: 'w', l: '!', txt: "Muévete constantemente para no acumular zonas de Caída de rocas bajo tus pies. Un tanque quieto bloquea el espacio del melee y obliga al raid a comprimir posiciones." },
    ],
    hcTips: [
      { t: 't', l: 'T', txt: "Pisotón sísmico (HC): hace el 100% de la vida de todo el raid. Crystal Shell antes de cada Pisotón es prácticamente obligatorio para que el raid sobreviva." },
    ]
  },
  dps: {
    intro: "Prioridades: murciélagos > interrumpir Aliento (tortugas) > daño al boss. Asigna antes del pull quién patéa tortugas y quién es el tanque de adds de murciélagos.",
    tips: [
      { t: 'd', l: 'D', txt: "Reserva siempre al menos una tortuga en Bloqueo de caparazón para el próximo Aliento de piedra furioso. Nunca gastes todas a la vez — si no hay tortuga disponible cuando castea, el raid muere. Con excedente, encadena patadas cada 15 segundos para mantener el +50% activo." },
      { t: 'd', l: 'D', txt: "En cuanto bajen los murciélagos para el DPS al boss y límpialos con AoE. Cada murciélago que llega al raid drena vida y complica al healer. El tanque de murciélagos debe recogerlos y aguantarlos con un cooldown defensivo." },
      { t: 'd', l: 'D', txt: "Conmoción de caparazón (+50% daño recibido, 15s): la mayor ventana de DPS del encuentro. Usa cooldowns ofensivos en ese momento y encadénalos con el Bloodlust si es posible." },
    ],
    hcTips: [
      { t: 'd', l: 'D', txt: "Caparazones de Roca (HC): fragmentos en línea recta desde la posición del boss. Muévete perpendicularmente a la trayectoria para no quedar en la línea." },
    ]
  },
  healer: {
    intro: "Daño constante y picos predecibles. La presión es manejable si los DPS gestionan bien los murciélagos — si no los controlan, la curación se vuelve insostenible rápidamente.",
    tips: [
      { t: 'h', l: 'H', txt: "Pisotón sísmico es periódico y predecible — pre-hechiza curación de área justo antes para absorber el pico inicial. En HC hace el 100% de la vida — cooldown de raid para cada Pisotón." },
      { t: 'h', l: 'H', txt: "Si los murciélagos llegan al raid el drenaje de vida simultáneo en múltiples jugadores puede ser insostenible. Curación de área agresiva mientras el DPS los limpia — prioriza la supervivencia del raid sobre el tanque del boss en ese momento." },
      { t: 'w', l: '!', txt: "Muévete constantemente. Un healer inmovilizado por zonas de daño acumuladas bajo sus pies es el peor escenario en esta pelea." },
    ],
    hcTips: [
      { t: 'h', l: 'H', txt: "Cada Pisotón sísmico hace el 100% de la vida del raid. Asigna un cooldown de raid para cada uno — no hay flexibilidad si se pasa por alto." },
    ]
  },
  errores: [
    { title: "No tener tortuga lista para el Aliento de piedra furioso", desc: "Sin una tortuga en Bloqueo de caparazón cuando Tortos castea el Aliento, el raid muere. Siempre reservar al menos una." },
    { title: "Ignorar los murciélagos", desc: "Un enjambre sin tratar drena vida a todo el raid simultáneamente. Siempre prioridad sobre el boss." },
    { title: "Patear una tortuga viva", desc: "Solo se puede patear una tortuga cuando está en Bloqueo de caparazón. Si intentas patear una viva el botón no funciona y perderás el interrupt del Aliento." },
  ]
},

// ─────────────────────────────────────────────
//  5. MEGAERA
// ─────────────────────────────────────────────
megaera: {
  name: 'Megaera',
  type: 'Jefe 5 · Hidra de tres cabezas · Gestión de Furias',
  video: 'pzKFtgwY6c8',
  general: {
    intro: "Hidra con múltiples cabezas elementales. Siempre hay 2 cabezas activas. Al morir una cabeza, Megaera entra en Desenfreno: daño elemental masivo a todo el raid durante ~20 segundos. En Normal: alternar Venenosa-Flamígera, ignorar siempre la Congelada. Todo el raid stackea en melee range durante el Desenfreno.",
    mechanics: [
      { name: 'Cabeza Flamígera', desc: "Aliento Encender carne: cono frontal que aplica un DoT de fuego de 45 segundos acumulable al tanque. Desde la niebla: Cenizas (DoT a jugador aleatorio — dispel fuera del grupo, coloca el charco de llamas donde no moleste).", img: 'img/megaera_fire.png' },
      { name: 'Cabeza Congelada', desc: "Aliento Frío ártico: cono frontal que aplica stacks de hielo al tanque — a 4 stacks queda stuneado 20 segundos. Desde la niebla: Torrente de hielo (deja Suelo de hielo que ralentiza y apaga las Cenizas). En Normal esta cabeza nunca se mata.", img: 'img/megaera_ice.png' },
      { name: 'Cabeza Venenosa', desc: "Aliento Pudrir armadura: cono frontal que aplica +10% daño recibido de todas las fuentes acumulable (45s) al tanque. Desde la niebla: Lluvia ácida (500.000 Naturaleza a todos al impactar; en HC escupe tres globos).", img: 'img/megaera_poison.png' },
      { name: 'Desenfreno', desc: "Cada muerte de cabeza activa el Desenfreno — daño elemental masivo a todo el raid ~20 segundos. TODO el raid stackea en melee range inmediatamente para compartir el daño. Hay 6-7 Desenfrenos por combate — distribuid cooldowns de curación antes del pull.", img: null },
      { name: 'Cabeza Arcana', desc: "Solo heroico. Aliento Difusión: 165.750 Arcano c/3s en cono + redirige el 10% de la curación recibida a aliados en radio 8m. Desde la niebla: Hendedura abisal invoca Vermis abisales c/3s durante 6s. Cada Vermis abisal usa Púa abisal (135.000 Arcano, interrumpible) y Supresión (aturde 15s al objetivo, interrumpible).", img: 'img/megaera_arcane.png', hc: true },
    ],
    positioning: "Dos tanques, cada uno con su cabeza mirando a la pared lejos del raid. Raid detrás de las cabezas en melee range. Durante el Desenfreno todo el raid al stack de melee. Jugadores con Cenizas salen uno o dos pasos del grupo y piden dispel."
  },
  tanque: {
    intro: "Dos tanques. La Cabeza Congelada (no se mata en Normal) acumula Frenesí de hidra con cada muerte de otra cabeza — su daño de auto-ataque crece progresivamente.",
    tips: [
      { t: 't', l: 'T', txt: "Encender carne (Flamígera): DoT de fuego de 45s acumulable. Si el Desenfreno coincide con el DoT activo la presión de curación se dispara. Informa al healer si ves que va a coincidir para que prepare un externo." },
      { t: 't', l: 'T', txt: "La Cabeza Congelada en Normal acumula Frenesí de hidra — es la más dura de tankear al final. Guarda cooldowns defensivos mayores y pide externals (Pain Suppression, Hand of Sacrifice) para los últimos Desenfrenos cuando el Frenesí está alto." },
      { t: 'w', l: '!', txt: "Nunca dejes una cabeza sin tanque. Si pierde el agro atacará con Rabia de Megaera al raid." },
    ],
    hcTips: [
      { t: 't', l: 'T', txt: "La Cabeza Venenosa no se mata en HC. Frenesí de hidra sube mucho al final de la pelea — reserva externals (Pain Suppression, Hand of Sacrifice) para ese tanque en los últimos Desenfrenos." },
    ]
  },
  dps: {
    intro: "Normal: empezar con la Cabeza Venenosa, luego alternar Venenosa-Flamígera indefinidamente. La Congelada NUNCA se mata. Bloodlust en el 6º Desenfreno (la última cabeza).",
    tips: [
      { t: 'd', l: 'D', txt: "Desenfreno: TODOS al stack de melee inmediatamente al morir una cabeza. El punto de stack es siempre en melee range, nunca ranged. Stackear a distancia hace la curación imposible y el daño por persona aumenta enormemente." },
      { t: 'd', l: 'D', txt: "Cenizas (desde la niebla Flamígera): si te marca, sal uno o dos pasos del grupo melee y pide dispel. No hay que correr lejos — el charco de llamas dura 1 minuto, colócalo en una zona que no bloquee rutas de movimiento." },
    ],
    hcTips: [
      { t: 'd', l: 'D', txt: "Cabeza Arcana (HC): Vermis abisales — interrumpir Supresión primero (15s de stun si pasa), luego Púa abisal. Warrior con Disrupting Shout puede interrumpir varios a la vez. Matar todos antes del siguiente spawn." },
    ]
  },
  healer: {
    intro: "El encounter de mayor throughput de curación en ToT Normal. Distribuid cooldowns por Desenfreno ANTES del pull — hay 6-7 y los últimos son los más letales.",
    tips: [
      { t: 'h', l: 'H', txt: "Asigna un cooldown de raid a cada Desenfreno antes del pull. Los dos últimos Desenfrenos son los más letales por el Frenesí de hidra acumulado — guarda Tranquilidad e Himno Divino para ellos." },
      { t: 'h', l: 'H', txt: "El stack del Desenfreno en melee facilita enormemente la curación de área. Si el grupo no stackea bien — algunos en ranged — la presión se vuelve insostenible. Es el problema más común en esta pelea." },
    ],
    hcTips: [
      { t: 'h', l: 'H', txt: "El tanque de la Cabeza Venenosa (no se mata en HC) puede quedar lejos del raid tras cada Desenfreno. Unos pasos hacia delante después de cada Desenfreno aseguran que esté en rango." },
    ]
  },
  errores: [
    { title: "Matar la Cabeza Congelada en Normal", desc: "Nunca se mata. Desordena el patrón de reaparición de cabezas y activa mecánicas mucho más difíciles de gestionar." },
    { title: "Stack de Desenfreno a distancia ranged", desc: "El punto de stack durante el Desenfreno es siempre en melee range. Stackear en ranged hace la curación imposible." },
    { title: "No guardar cooldowns para los últimos Desenfrenos", desc: "Los últimos 2-3 Desenfrenos son los más letales por el Frenesí de hidra acumulado. Usar todos los cooldowns al principio garantiza muertes al final." },
  ]
},

// ─────────────────────────────────────────────
//  6. JI-KUN
// ─────────────────────────────────────────────
jikun: {
  name: 'Ji-Kun',
  bossImg: 'img/jikun_model.png',
  type: 'Jefe 6 · Halcón colosal · Mecánica de nidos',
  video: '4Yz7a0Xoa2o',
  general: {
    intro: "La pelea se divide entre la plataforma principal y plataformas laterales de nidos. Un equipo de 5-6 jugadores vuela a las plataformas con Alas de Dédalo para destruir Proles antes de que evolucionen. Interceptar el alimento de Ji-Kun en el aire otorga Alimentación primaria (+100% daño / +30% curación durante 30 segundos).",
    mechanics: [
      { name: 'Plumas / Corriente inferior / Graznido', desc: "Plumas: Ji-Kun lanza plumas 90.000 físico c/1s durante 8 segundos — stackear en melee. Corriente inferior: aleja a todos los jugadores de la plataforma durante 8 segundos. Graznido: 400.000 físico en radio 8m a un jugador aleatorio.", img: 'img/image183.jpeg' },
      { name: 'Arañazo de garras', desc: "175% daño de arma como físico + debuff que aumenta el daño de futuros Arañazos un 50% durante 1 minuto. No puede esquivarse ni pararse con evasión. Swap cada 2 stacks — a 3 stacks se necesita un externo.", img: null },
      { name: 'Garfas infectadas', desc: "50.000 Naturaleza c/3s durante 10 segundos, acumulable. Cae sola — no requiere swap obligatorio, pero el co-tanque puede relevar brevemente para dejar caer los stacks.", img: null },
      { name: 'Alimentar a la prole / Alimentación primaria', desc: "Ji-Kun escupe glóbulos de comida hacia sus crías. Interceptarlos en el aire con Alas de Dédalo da Alimentación primaria pero también aplica Baboso (75.000 Naturaleza c/5s durante 15s, escala +25% con cada aplicación). Si los glóbulos tocan el suelo forman charcos de comida (150.000 daño c/s mientras se permanezca).", img: null },
      { name: 'Mecánica de nidos', desc: "Huevos jóvenes eclosionan en Proles que piden comida — si se alimentan evolucionan a Volantones (Pio: 200.000 físico, depositan más huevos). Alas de Dédalo: permiten volar 10 segundos. Lección de Ícaro: 1 minuto de cooldown entre plumas.", img: null },
      { name: 'Guardianes del nido', desc: "Solo heroico. Golpe de garfa: cono de 180° — posicionar de espaldas al grupo. Chirrido: si no hay nadie en melee, 150.000 físico e interrumpe el lanzamiento de todos los jugadores permanentemente con −30% velocidad de casteo.", hc: true },
    ],
    positioning: "Grupo principal bajo Ji-Kun. Equipo de nidos en movimiento entre plataformas. En Corriente inferior todos se mueven hacia el interior de la plataforma."
  },
  tanque: {
    intro: "Swap cada 2 stacks de Arañazo de garras. No puede esquivarse ni pararse — solo Shield of the Righteous, Shield Block+Barrier y Blood Shield lo mitigan correctamente.",
    tips: [
      { t: 't', l: 'T', txt: "Arañazo de garras: swap cada 2 stacks. A 3 stacks el daño es muy alto y necesitas un externo (Pain Suppression, Hand of Sacrifice). El debuff de +50% daño dura 1 minuto — el tanque relevado no vuelve hasta que expire." },
      { t: 't', l: 'T', txt: "Corriente inferior: usa boosts de velocidad (Stampeding Roar de Druida es ideal) para mantenerte en la plataforma durante los 8 segundos. Si estás en el borde cuando empieza, corre hacia el interior." },
    ],
    hcTips: [
      { t: 't', l: 'T', txt: "Guardián del nido (HC): cono de 180° — posicionar de espaldas al grupo en todo momento. Si no hay nadie en melee casteará Chirrido que interrumpe permanentemente a todo el raid. El tanque de plataforma nunca puede abandonar al Guardián." },
    ]
  },
  dps: {
    intro: "El equipo de nidos mata Proles antes de que se alimenten. El equipo de plataforma maximiza el uptime en boss con Alimentación primaria alineada con cooldowns ofensivos.",
    tips: [
      { t: 'd', l: 'D', txt: "Alimentación primaria (+100% daño 30s): intercepta los glóbulos en el aire con Alas de Dédalo. Aplica Baboso (DoT que escala +25% por aplicación) — no acumules más de una intercepción sin dejar caer primero el DoT." },
      { t: 'd', l: 'D', txt: "Plumas: stackear en melee los 8 segundos del canal. Dispersarse antes de que termine para el siguiente Graznido." },
      { t: 'w', l: '!', txt: "No uses Alas de Dédalo para bajar de una plataforma — no hay daño de caída en Ji-Kun. Gastar las plumas para bajar significa Lección de Ícaro: 1 minuto sin poder subir a nidos superiores ni interceptar alimento." },
    ],
    hcTips: [
      { t: 'd', l: 'D', txt: "En HC las Alas de Dédalo dan 3 cargas (máximo 3 a la vez). Los jugadores pueden encadenar saltos entre plataformas más eficientemente." },
    ]
  },
  healer: {
    intro: "Presión moderada con picos durante Plumas. El +30% de curación de Alimentación primaria es muy valioso — prioriza interceptar los glóbulos cuando puedas.",
    tips: [
      { t: 'h', l: 'H', txt: "Plumas: 8 segundos de stack en melee — el momento de curación más predecible del encuentro. Pre-castea heals de área justo antes del canal para tener la curación activa desde el inicio." },
      { t: 'h', l: 'H', txt: "Si bajas a una plataforma de nidos, coordina con el raid para que no haya Plumas sin cobertura en la plataforma principal. Dos Plumas sin healer cerca pueden ser letales." },
    ],
    hcTips: [
      { t: 'h', l: 'H', txt: "Guardián del nido (HC): si el equipo de plataforma baja sin healer asignado, ten heals de largo rango preparados para emergencias. El Guardián puede hacer daño significativo al tanque de plataforma." },
    ]
  },
  errores: [
    { title: "Usar Alas de Dédalo para bajar de una plataforma", desc: "No hay daño de caída. Gastar las plumas para bajar activa Lección de Ícaro (1 minuto de cooldown) — el recurso más importante del encuentro desperdiciado." },
    { title: "Dejar al Guardián del nido sin tanque (HC)", desc: "Chirrido interrumpe a todo el raid permanentemente. El tanque de plataforma nunca puede dejar al Guardián suelto." },
    { title: "Proles que se alimentan", desc: "Una Prole que come evoluciona a Volantón. Los Volantones depositan más huevos y hacen Pio — efecto bola de nieve que escapa rápidamente al control." },
  ]
},

// ─────────────────────────────────────────────
//  7. DURUMU EL OLVIDADO
// ─────────────────────────────────────────────
durumu: {
  name: 'Durumu el Olvidado',
  bossImg: 'img/durumu_model.png',
  type: 'Jefe 7 · Ojo antiguo · El laberinto de niebla',
  video: 'U6FK0nd1f_w',
  general: {
    intro: "Dos fases que se alternan: fase principal con múltiples ojos activos, y el Haz de desintegración donde la niebla llena la sala y todo el raid navega por un único carril seguro. El Espectro luminoso invoca tres ojos de color que revelan nieblas invisibles con mecánicas de vida o muerte según cómo se gestionen.",
    mechanics: [
      { name: 'Mirada torva', desc: "Tank-buster principal. Inflige el 150% del daño de arma como físico. No puede esquivarse, bloquearse ni pararse — solo Shield of the Righteous, Shield Barrier y Blood Shield lo mitigan correctamente. Aplica Herida grave (−10% curación recibida por stack) y Corte arterial (60.000 físico c/s hasta que el tanque esté a vida completa). Si Durumu no tiene ningún objetivo en melee, Mirada golpea a todo el raid por el 50% del daño de arma.", img: null },
      { name: 'Haz de desintegración — El laberinto', desc: "Durumu genera niebla que llena la sala. Su Ojo bizco crea un laberinto de Dolores de ojo (160.000 Arcano AoE c/s). Quien quede en la niebla muere en segundos. Solo el carril interior del haz es seguro — el exterior deja al melee fuera de rango del boss.", img: 'img/image209.jpeg' },
      { name: 'Dagas mentales', desc: "Todos los ojos activos excepto el Ojo bizco infligen 40.000 Arcano a jugadores aleatorios del raid cada pocos segundos mientras duran activos.", img: null },
      { name: 'Espectro luminoso — Niebla Carmesí (Luz infrarroja)', desc: "Visibles solo bajo la Luz infrarroja del ojo rojo. Lanzan Púa cáustica (80.000 físico) mientras están en el cono. Si una Niebla carmesí sale del cono → Flor carmesí: 500.000 Fuego a todo el raid — limpiada instantánea. El portador del rayo rojo NO SE MUEVE hasta que las 3 Nieblas Carmesí estén muertas.", img: 'img/image207.jpeg' },
      { name: 'Espectro luminoso — Niebla Ámbar (Luz brillante)', desc: "Visibles solo bajo la Luz brillante del ojo amarillo. Represalia de ámbar: 15.000 Naturaleza a todos en el cono cada vez que pierden un 10% de salud. Si salen del área → Ráfaga de ámbar: 500.000 Naturaleza a todo el raid. El portador de Luz brillante puede moverse libremente eligiendo dónde spawnea el daño.", img: null },
      { name: 'Espectro luminoso — Niebla Azure (Rayos azules)', desc: "Visibles solo bajo los Rayos azules del ojo azul. NUNCA deben revelarse ni matarse — al morir lanzan Congelación apresurada: 500.000 Escarcha a todo el raid. El portador de Rayos azules identifica su posición y se aleja sin revelarla.", img: null },
      { name: 'Ojos — Fuerza de voluntad / Drenaje de vida / Mirada persistente', desc: "Ojo de la mente → Fuerza de voluntad: repele a todos los jugadores en su mirada. Ojo hambriento → Drenaje de vida: fija al jugador más cercano, lo aturde 15s y absorbe su vida — otro jugador debe interponerse para redirigir el canal. Ojo evaluador → Mirada persistente: zona oscura permanente hasta el final del encuentro (100.000 Sombras c/s, −30% velocidad dentro).", img: null },
      { name: 'Muros de hielo', desc: "Solo heroico. Tres paredes inmensas que bloquean el movimiento justo antes del laberinto. Las secciones de cada pared comparten una sola barra de vida — el AoE golpea a todas las secciones a la vez. Toda la raid focaliza la pared del lado de la entrada primero.", img: 'img/durumu_murosdehielo.png', hc: true },
      { name: 'Ojo malvado — Parásito Oscuro', desc: "Solo heroico. DoT de Sombras creciente de 30 segundos. Al disiparse → Peste oscura (misma duración restante) e invoca Ojos deambulantes cada 3s (50.000 Sombras c/s al portador, transfieren el 70% del daño recibido). Dispela cuando queden ~10 segundos y el jugador esté fuera del grupo.", hc: true },
    ],
    positioning: "Raid en el centro durante la fase principal. Mirada persistente: melee coloca zonas bajo el boss, ranged en los bordes. En el laberinto todos siguen el carril interior del haz."
  },
  tanque: {
    intro: "Mirada torva no puede esquivarse ni bloquearse. El swap se hace antes de la fase del Espectro luminoso para que ningún tanque entre en ella con stacks de Herida grave.",
    tips: [
      { t: 't', l: 'T', txt: "Mirada torva: solo Shield of the Righteous, Shield Barrier y Blood Shield mitigan correctamente. Haz el swap antes del Espectro luminoso — los stacks de Herida grave caen solos durante la fase del laberinto y el tanque relevado entra limpio." },
      { t: 't', l: 'T', txt: "Mantente siempre en melee con Durumu. Si no hay objetivo en melee, Mirada golpea al raid por el 50% del daño de arma — es un daño de raid masivo que los healers no esperan." },
      { t: 'w', l: '!', txt: "Hand of Protection y Divine Shield pueden eliminar los stacks de Herida grave. Si tienes un Paladín en el raid, usa ese recurso antes de entrar en una fase crítica con stacks altos." },
    ],
    hcTips: [
      { t: 't', l: 'T', txt: "Muros de hielo (HC): tres paredes antes del laberinto. Todas las secciones de cada pared comparten barra de vida. AoE masivo al mismo muro — empezar por la pared del lado de la entrada." },
    ]
  },
  dps: {
    intro: "Máximo DPS en la fase principal. En el Espectro luminoso: matar las 3 Nieblas Carmesí sin mover el rayo, nunca revelar ni matar la Azure.",
    tips: [
      { t: 'd', l: 'D', txt: "Niebla Carmesí (rojo): el portador del rayo NO SE MUEVE hasta que las 3 estén muertas. Si el rayo se aleja de una viva → Flor carmesí → 500.000 Fuego a todo el raid. Es la mecánica de limpiada más frecuente en esta fase." },
      { t: 'd', l: 'D', txt: "Niebla Azure (azul): NUNCA revelarla ni matarla. El portador de Rayos azules identifica dónde está y se aleja sin acercar el cono. Al morir → Congelación apresurada → 500.000 Escarcha a todo el raid." },
      { t: 'd', l: 'D', txt: "Laberinto: sigue el carril interior del haz. Un paso de más en la niebla y mueres en segundos. Las zonas de Mirada persistente colocadas en el carril del laberinto pueden forzarte a entrar en la niebla." },
    ],
    hcTips: [
      { t: 'd', l: 'D', txt: "Muros de hielo (HC): AoE masivo a las paredes — Chain Lightning de Chamán Elemental y enfermedades de DK golpean todas las secciones. Toda la raid al mismo muro, empezando por el del lado de la entrada." },
    ]
  },
  healer: {
    intro: "Mayor presión durante el Espectro luminoso — el raid está disperso y el daño llega de múltiples fuentes. El laberinto exige heals de área en movimiento.",
    tips: [
      { t: 'h', l: 'H', txt: "Espectro luminoso: raid disperso siguiendo sus rayos de color. Usa cooldowns que no requieran stack (Tranquilidad, Divine Hymn). Comunica antes del pull dónde van los portadores para que los healers estén próximos entre sí." },
      { t: 'h', l: 'H', txt: "Laberinto: coloca efectos de suelo (Lluvia Sanadora, Baldosas) ligeramente por delante del movimiento del grupo. No te quedes curando si la niebla avanza hacia ti — tú también mueres en segundos." },
    ],
    hcTips: [
      { t: 'h', l: 'H', txt: "Parásito Oscuro (HC): no dispeles con el debuff reciente — el daño escala con el tiempo. Cuando queden ~10s el jugador sale del grupo y entonces dispelas. Los Ojos deambulantes no se nukean — solo cleave pasivo." },
    ]
  },
  errores: [
    { title: "Mover el rayo rojo con una Niebla Carmesí viva", desc: "Flor carmesí: 500.000 Fuego a todo el raid. El portador no se mueve hasta que las 3 Nieblas Carmesí estén muertas." },
    { title: "Revelar o matar la Niebla Azure", desc: "Al morir → Congelación apresurada: 500.000 Escarcha a todo el raid. Nunca revelar ni matar." },
    { title: "Carril exterior en el laberinto", desc: "El carril exterior deja al melee fuera de rango del boss y expone a más jugadores a la niebla. Siempre carril interior." },
    { title: "Mirada persistente en el carril del laberinto", desc: "Un charco en el carril obliga a entrar en la niebla. Melee bajo el boss, ranged en los bordes." },
  ]
},

// ─────────────────────────────────────────────
//  8. PRIMORDIUS
// ─────────────────────────────────────────────
primordius: {
  name: 'Primordius',
  bossImg: 'img/primordius_model.png',
  type: 'Jefe 8 · Criatura en evolución · Mutágenos',
  video: 'ifJAVwgi-0M',
  general: {
    intro: "Absorber mutágenos de los Fluidos Vivientes muertos otorga mutaciones beneficiosas o dañinas. Con 5 mutaciones beneficiosas el jugador alcanza Totalmente mutado (+100% daño al boss / +30% curación). Cuanto más rápido evolucione el raid, menos mecánicas activas tiene el boss — la evolución rápida es la mejor estrategia defensiva.",
    mechanics: [
      { name: 'Golpe primordial', desc: "Tank-buster principal. 800.000 daño físico en un cono de 7 metros hacia el objetivo actual. El tanque debe mantenerse siempre de espaldas al raid.", img: null },
      { name: 'Sangre deforme', desc: "DoT acumulable en el tanque activo con cada golpe. 20.000 Naturaleza c/3s, crece con cada stack. El healer asignado al tanque debe avisar cuándo el DoT supera su capacidad de curación — el swap a tiempo es la mejor herramienta.", img: null },
      { name: 'Fluido viviente / Charco mutagénico / Charco volátil', desc: "Los Fluidos Vivientes son adds que al morir dejan un Charco mutagénico accesible unos segundos. Los jugadores se paran encima para absorberlo (100.000 daño + una mutación). Charco volátil: variante dañina que lleva la mutación de Primordius al máximo y le sana el 10% de vida — evitar a toda costa.", img: 'img/primordius_fluido.png' },
      { name: 'Mutaciones y Totalmente mutado', desc: "Con 5 mutaciones beneficiosas el jugador alcanza Totalmente mutado. Mutaciones beneficiosas: Huesos gruesos (+5% stats), Mente clara (+10% maestría), Sinapsis aceleradas (+10% celeridad), Vista aguda (+10% crítico). Primordius puede tener máximo 3 mutaciones en Normal (4 en HC) — cuanto antes evolucione el raid menos mecánicas activa el boss.", img: 'img/primordius_pools.jpeg' },
      { name: 'Horror viscoso', desc: "Solo heroico. Add formado del mismo fluido. Sangre negra: DoT acumulable al tanque (20.000 Naturaleza c/3s). Mutágeno mortal: si se acerca a Primordius la mezcla de energías hace que explote infligiendo 999.999 Naturaleza a todo el raid — limpiada instantánea.", hc: true },
    ],
    positioning: "Primordius en el centro de la sala. Los Fluidos Vivientes deben morir cerca del centro para que sus charcos sean accesibles a todos."
  },
  tanque: {
    intro: "Golpe primordial en cono de 7m — siempre de espaldas al raid. Sangre deforme: swap cuando el healer avise, generalmente entre 4-6 stacks.",
    tips: [
      { t: 't', l: 'T', txt: "Golpe primordial: cono de 7m hacia delante. Mantenerse SIEMPRE de espaldas al raid — un Golpe primordial que impacta al grupo puede matar a jugadores frágiles sin mitigación." },
      { t: 't', l: 'T', txt: "Evoluciona junto al raid — sin Totalmente mutado recibes las mecánicas completas de Primordius. Absorbe charcos cuando puedas sin alejarte demasiado del boss." },
    ],
    hcTips: [
      { t: 't', l: 'T', txt: "Abominación mutada (HC): sin Totalmente mutado recibes y haces un 75% menos de daño. La evolución es tan prioritaria como el agro en heroico." },
      { t: 't', l: 'T', txt: "Horror viscoso (HC): el off-tanque lo kitea siempre lejos del boss. Mutágeno mortal al acercarse = limpiada instantánea. Nunca matar al Horror cerca de Primordius." },
    ]
  },
  dps: {
    intro: "Mata los Fluidos Vivientes cerca del centro para que sus charcos sean accesibles. Absorber en 3 segundos de parada sobre el charco.",
    tips: [
      { t: 'd', l: 'D', txt: "Los charcos desaparecen en segundos. Muévete hacia ellos inmediatamente cuando caiga un Fluido viviente — si varios jugadores esperan el charco lo absorbe el primero que llegue, el resto no recibe mutación." },
      { t: 'd', l: 'D', txt: "Totalmente mutado: +100% daño al boss y el boss es vulnerable. Todo el DPS en Primordius desde ese momento. El boss también hará menos mecánicas activas cuantos más jugadores estén mutados." },
      { t: 'w', l: '!', txt: "Charco volátil: si Primordius lo pisa lleva su mutación al máximo y se sana el 10% de vida. Mata los Fluidos en el momento correcto y en la posición correcta para evitar que deje un Charco volátil accesible al boss." },
    ],
    hcTips: [
      { t: 'd', l: 'D', txt: "Abominación mutada (HC): sin Totalmente mutado haces un 75% menos de daño. La evolución rápida es el DPS check real del heroico." },
    ]
  },
  healer: {
    intro: "Presión baja si el raid evoluciona rápido. La mejor forma de reducir la presión de curación es que todos alcancen Totalmente mutado lo antes posible.",
    tips: [
      { t: 'h', l: 'H', txt: "Evoluciona tú también — con Totalmente mutado tienes +30% de curación. Vale más evolucionar rápido que curarlo todo desde atrás." },
      { t: 'h', l: 'H', txt: "Avisa cuándo la Sangre deforme supera tu capacidad. No esperes a que el tanque lo pida — el swap a tiempo es tu mejor herramienta." },
      { t: 'h', l: 'H', txt: "Si Primordius gana mecánicas por raid poco evolucionado la presión aumenta significativamente. La mejor curación es asegurarte de que el DPS absorbe sus charcos correctamente." },
    ],
    hcTips: [
      { t: 'h', l: 'H', txt: "Horror viscoso (HC): si el kiter no lo aleja suficientemente y activa Mutágeno mortal no hay curación posible — es limpiada instantánea. Ten vigilado al Horror en todo momento." },
    ]
  },
  errores: [
    { title: "Matar el Fluido viviente lejos del grupo", desc: "Sus charcos quedan inaccesibles en los bordes. Siempre morir cerca del centro para que todos puedan absorber." },
    { title: "No absorber los charcos a tiempo", desc: "Desaparecen en segundos. Si no se absorben la evolución se retrasa y el boss gana mecánicas adicionales." },
    { title: "Horror viscoso cerca de Primordius (HC)", desc: "Mutágeno mortal inflige 999.999 Naturaleza a todo el raid al instante. El kiter debe llevarlo siempre al borde opuesto." },
  ]
},

// ─────────────────────────────────────────────
//  9. ANIMUS OSCURO
// ─────────────────────────────────────────────
animus: {
  name: 'Animus Oscuro',
  bossImg: 'img/animus_model.png',
  type: 'Jefe 9 · Gólems de ánima · Encuentro de alta complejidad',
  video: 'TteKwbiJAwk',
  general: {
    intro: "La sala está llena de Gólems de Ánima de tres tamaños. Deben morir en orden estricto — matar uno fuera de secuencia lo absorbe el Animus, fortaleciendo el encuentro irrecuperablemente. El Animus desbloquea habilidades progresivamente al acumular 25, 50, 75 y 100 puntos de ánima.",
    mechanics: [
      { name: 'Gólems Pequeños', desc: "Vínculo de aceleración: los gólems cercanos se vinculan ganando +250% velocidad de ataque y movimiento, con inmunidad a ralentizaciones. Evasiva: 90% menos daño de área de efecto — sin AoE en ningún momento.", img: 'img/animus_golem_pequeno.png' },
      { name: 'Gólems Grandes', desc: "Estela carmesí: el ánima explota desde el suelo en una línea que persigue un objetivo aleatorio hasta 30 segundos infligiendo 200.000 daño de Fuego.", img: 'img/animus_golem_grande.png' },
      { name: 'Gólems Inmensos', desc: "Intercambio de materia: intercambia posición con el aliado más distante + daño Arcano igual a la salud máxima del objetivo dividido entre los dos. Embate explosivo: 140.000 Fuego en radio 9m + Abrasa (+25% daño futuros Embates, acumulable). Jugadores cebo designados en los bordes absorben el Intercambio para que no afecte a los tanques.", img: 'img/animus_golem_inmenso.png' },
      { name: 'Animus — Umbrales de ánima', desc: "25p: Anillo de ánima (esferas en círculo alrededor del objetivo — +200% daño cuerpo a cuerpo 15s; en HC también 180.000 Fuego). 50p: Fuente de ánima (descargas a ubicaciones cercanas c/1s, 375.000 Fuego). 75p: Sacudida interruptora (400.000 Naturaleza + interrumpe TODOS los hechizos del raid). 100p: PODER ABSOLUTO (torrente de descargas, 500.000 Fuego en radio 5m).", img: null },
      { name: 'Potenciar gólem', desc: "Solo heroico. El Animus selecciona al gólem activo con menos salud, lo sana un 3% y aumenta todo su daño un 24% permanentemente.", hc: true },
    ],
    positioning: "La posición inicial de cada jugador es crítica. Los tanques deben estar preposicionados para tomar el agro de sus gólems asignados desde el momento en que se activan. Los jugadores cebo se colocan en los bordes para absorber el Intercambio de materia."
  },
  tanque: {
    intro: "El encuentro de mayor responsabilidad para tanques en ToT. Perder el agro de un gólem en el primer minuto suele ser irrecuperable.",
    tips: [
      { t: 't', l: 'T', txt: "Asignaciones antes del pull: un tanque cubre al Animus Oscuro + Gólem de Ánima Inmenso. El otro cubre los gólems pequeños asignados. Respetar las asignaciones sin excepción." },
      { t: 't', l: 'T', txt: "Intercambio de materia: si el Animus te teletransporta, vuelve a tus gólems inmediatamente. Los jugadores cebo en los bordes están ahí específicamente para absorber los swaps — si ellos absorben el Intercambio tú no te moverás." },
      { t: 'w', l: '!', txt: "Nunca pierdas el agro de un gólem. Si muere sin control el Animus absorbe su ánima. Con suficientes absorpciones el encuentro se vuelve inmateable." },
    ],
    hcTips: [
      { t: 't', l: 'T', txt: "Sacudida interruptora (HC): si el desplazamiento te aleja de tus gólems, vuelve a posición ANTES de atacar cualquier cosa. Un tanque que golpea el gólem equivocado tras la sacudida puede romper la secuencia." },
    ]
  },
  dps: {
    intro: "Orden de kills no negociable. La señal para cambiar de objetivo es del raid leader. Sin AoE bajo ninguna circunstancia durante todo el encuentro.",
    tips: [
      { t: 'd', l: 'D', txt: "Anillo de ánima (25p): si eres el objetivo aléjate del grupo inmediatamente. Las esferas dan +200% daño cuerpo a cuerpo durante 15s a quienes estén cerca — en HC también hacen 180.000 Fuego." },
      { t: 'd', l: 'D', txt: "Intercambio de materia: si el swap te lleva lejos, vuelve a tu posición asignada antes de atacar. Un DPS que golpea el gólem equivocado tras el swap rompe la secuencia de kills." },
      { t: 'w', l: '!', txt: "Sin AoE en ningún momento. Los Gólems Pequeños tienen Evasiva (−90% daño AoE) y el AoE puede matar otros gólems fuera de orden. Solo DPS single-target en el objetivo marcado." },
    ],
    hcTips: [
      { t: 'd', l: 'D', txt: "Sacudida interruptora (HC): espera un segundo para reorientarte tras el desplazamiento. Atacar al objetivo equivocado por la confusión del desplazamiento es el error más frecuente en HC." },
    ]
  },
  healer: {
    intro: "Presión irregular — momentos de calma y picos cuando el Intercambio desorganiza posiciones o la Sacudida interruptora cancela todos los heals.",
    tips: [
      { t: 'h', l: 'H', txt: "Sacudida interruptora (75p): interrumpe TODOS los hechizos del raid incluidos los tuyos. Ten un heal instantáneo disponible cuando el Animus se acerque al umbral de 75p de ánima." },
      { t: 'h', l: 'H', txt: "El Intercambio puede teletransportarte lejos de quien necesitas curar urgentemente. Cambia a heals de largo rango inmediatamente y vuelve a tu posición asignada." },
      { t: 'h', l: 'H', txt: "Toque del Animus: DoT acumulable (30.000 Fuego c/2s por stack) en objetivos aleatorios a lo largo de toda la pelea. Monitoriza los stacks en el raid — avisa cuándo algún jugador supera lo sostenible para que el tanque haga el swap." },
    ],
    hcTips: [
      { t: 'h', l: 'H', txt: "Sacudida interruptora (HC): también puede desplazarte lejos de quien necesitas curar. Siempre un heal instantáneo disponible alrededor del umbral de 75p del Animus." },
    ]
  },
  errores: [
    { title: "Atacar el objetivo incorrecto", desc: "Matar un gólem fuera de secuencia lo absorbe el Animus. El orden es inamovible." },
    { title: "Usar AoE", desc: "Los Gólems Pequeños tienen Evasiva (−90% daño AoE) y el AoE puede matar gólems en orden incorrecto. Solo DPS single-target." },
    { title: "No volver tras el Intercambio de materia", desc: "Los tanques que no regresan a sus gólems tras el Intercambio son la causa más común de fallo." },
  ]
},

// ─────────────────────────────────────────────
//  10. QON EL TENAZ
// ─────────────────────────────────────────────
hierroqon: {
  name: 'Qon el Tenaz',
  bossImg: 'img/hierroqon_model.png',
  type: 'Jefe 10 · Guerrero Mogu · Tres fases elementales + Fase Final',
  video: 'nVXutsH5zUw',
  general: {
    intro: "Qon combate con tres quilen elementales que mueren uno a uno dándole nuevas habilidades. En la Fase Final usa las tres a la vez — es el DPS check real del encuentro. En heroico los quilen reaparecen cuando Qon llega al 25% de vida.",
    mechanics: [
      { name: 'Lanzar lanza / Empalar', desc: "Lanzar lanza: 100.000 físico a un objetivo aleatorio. Empalar: tank-buster principal. Sangrado acumulable de 45.000 físico c/2s en el tanque activo. No puede esquivarse. Mitigación activa obligatoria en cada cast.", img: null },
      { name: "Fase 1 — Ro'shak (Fuego)", desc: "Infierno de arrabio: 100.000 Fuego AoE a todos, resta energía de arrabio. Sobrecarga de arrabio: al máximo de energía, Infiernos c/1s con +50% daño. Llama desatada: 700.000 Fuego dividido entre el grupo más numeroso (mínimo 3 objetivos). Encender lanza — Cenizas ardientes: zona de fuego acumulable en el suelo.", img: 'img/hierroqon_roshak.png' },
      { name: "Fase 2 — Quet'zal (Tormenta)", desc: "Arco de relámpagos: aturde a un jugador y salta a aliados cercanos. Tormenta de viento: atrae a todos al centro (65.000 Naturaleza c/2s, −80% efectos); al terminar quedan Vientos impetuosos que siguen atrayendo. Fulminar lanza — Nube tormentosa: electrifica jugadores (acumulable — a 3 stacks stuneados 20s).", img: 'img/hierroqon_quetzal.png' },
      { name: "Fase 3 — Dam'ren (Hielo)", desc: "Zona muerta: escudo direccional de Dam'ren — todos los ataques desde esa dirección fallan. Temple congelado: refleja el 10% del daño recibido al atacante. Congelar: hiela a un jugador aleatorio 1-5s y luego 130.000 Escarcha a todos. Congelar lanza — Sangre congelada: congela el suelo (200.000 Escarcha + −25% velocidades, acumulable al pisarlo). En heroico Dam'ren aparece junto a Quet'zal cuando Qon llega al 25% de vida.", img: 'img/hierroqon_damren.png' },
      { name: 'Fase Final — La última batalla de Qon el Tenaz', desc: "Embate con puño: 30.000 físico AoE c/0.8s durante 7.5s. Ira en aumento: +10% daño acumulable por cada Embate. Encender ciclón: prende fuego a un ciclón aleatorio (30.000 Fuego c/2s a todos). Congelar ciclón: congela un ciclón aleatorio — encierra a quienes entren en contacto causando daño igual al 5% de su salud máxima c/2s.", img: null },
      { name: 'Vientos arremolinados', desc: "Solo heroico. Quet'zal invoca un enorme remolino de viento que inflige 200.000 Naturaleza a todos los jugadores con quienes entre en contacto.", hc: true },
    ],
    positioning: "Qon en el lateral de la sala con el raid detrás. Movimiento constante para evitar acumular efectos de suelo — especialmente en la Fase Final donde todos los elementos están activos simultáneamente."
  },
  tanque: {
    intro: "Empalar es el tank-buster principal — sangrado acumulable que no puede esquivarse. Swap en cada transición de fase para limpiar el debuff elemental acumulado.",
    tips: [
      { t: 't', l: 'T', txt: "Empalar: sangrado acumulable de 45.000 físico c/2s. Mitigación activa en cada cast. El swap en la transición de fase (cuando el quilen muere) limpia los stacks automáticamente." },
      { t: 't', l: 'T', txt: "Fase Final: Embate con puño hace 30.000 AoE c/0.8s durante 7.5 segundos — cooldown de raid aquí. Con Ira en aumento activo cada Embate sucesivo hace más daño que el anterior sin límite." },
      { t: 'w', l: '!', txt: "Tormenta de viento atrae a todo el raid al centro. Sal rápidamente al terminar — los Vientos impetuosos que quedan siguen atrayendo y haciendo daño." },
    ],
    hcTips: [
      { t: 't', l: 'T', txt: "Dam'ren (HC, al 25%): su Zona muerta bloquea todos los ataques desde esa dirección. Reposiciona a Qon fuera de la Zona muerta para que el melee pueda seguir atacando." },
    ]
  },
  dps: {
    intro: "Bloodlust en la Fase Final. Mantener el mayor uptime posible pese al movimiento constante requerido.",
    tips: [
      { t: 'd', l: 'D', txt: "Ro'shak: agrúpate en grupos de mínimo 3 para dividir la Llama desatada. Si no encuentra 3 objetivos juntos la lanza sobre uno solo — el daño no dividido puede matar instantáneamente." },
      { t: 'd', l: 'D', txt: "Quet'zal: entra brevemente en la Tormenta de viento y sal de inmediato. Nube tormentosa es acumulable — a 3 stacks el jugador queda stuneado 20 segundos. No dejar que pase de 2 stacks." },
      { t: 'w', l: '!', txt: "No apiles efectos de suelo en el centro de la sala. Los Infiernos de arrabio y la Sangre congelada acumulados pueden cortar el acceso a zonas enteras en la Fase Final cuando todos los elementos están activos." },
    ],
    hcTips: [
      { t: 'd', l: 'D', txt: "Dam'ren (HC): Zona muerta bloquea ataques desde esa dirección — reposiciónate al lado contrario del boss para seguir haciendo DPS sin penalización." },
    ]
  },
  healer: {
    intro: "Presión escala por fases: Fase 1 suave, Fase 2 moderada, Fase Final muy alta. Guarda los cooldowns mayores para la Fase Final.",
    tips: [
      { t: 'h', l: 'H', txt: "Fase Final: Embate con puño hace 30.000 AoE c/0.8s durante 7.5 segundos. Asigna un cooldown de raid para cada Embate — con Ira en aumento cada Embate siguiente es más letal que el anterior." },
      { t: 'h', l: 'H', txt: "Congelar (Dam'ren): hiela a un jugador y luego 130.000 Escarcha a todo el raid. Pico de daño adicional e impredecible en el objetivo cada vez que Dam'ren está activo." },
      { t: 'w', l: '!', txt: "Permanece en movimiento constante para evitar los efectos de suelo acumulados. Un healer inmovilizado en Sangre congelada o Cenizas ardientes pierde segundos críticos de curación." },
    ],
    hcTips: [
      { t: 'h', l: 'H', txt: "Vientos arremolinados (HC): guarda el cooldown de raid mayor para el inicio de la Fase Final cuando coincidan todos los elementos elementales más los primeros Vientos." },
    ]
  },
  errores: [
    { title: "No agruparse para la Llama desatada de Ro'shak", desc: "Sin 3 objetivos juntos la lanza sobre un único objetivo. El daño no dividido puede matar al instante." },
    { title: "Acumular 3 stacks de Nube tormentosa", desc: "A 3 stacks el jugador queda stuneado 20 segundos. No dejar pasar de 2 en ningún caso." },
    { title: "Quedarse parado en efectos de suelo en la Fase Final", desc: "Con todos los elementos activos la sala se llena de efectos simultáneos. El movimiento constante es obligatorio." },
  ]
},

// ─────────────────────────────────────────────
//  11. LAS EMPÍREAS GEMELAS
// ─────────────────────────────────────────────
consortes: {
  name: 'Las Empíreas Gemelas',
  bossImg: null,
  bossImgs: ['img/consortes_suen.png', 'img/consortes_lulin.png'],
  type: "Jefe 11 · Suen y Lu'lin · Tres fases · Ayuda de Celestiales",
  video: 'CCwiGDfQdOc',
  general: {
    intro: "Lu'lin (luna/hielo) y Suen (sol/fuego). Fase 1 (3 min, noche): Lu'lin activa con Suen apareciendo brevemente. Fase 2 (3 min, día): Suen activa con Lu'lin lanzando Cometas de Hielo. Fase 3 (ocaso): ambas activas. Bloodlust al inicio de Fase 2. En las esquinas hay estatuas de Celestiales — trazando su constelación se invocan poderes especiales disponibles en cada fase.",
    mechanics: [
      { name: "Fase 1 · Lu'lin — Loto de luna / Tromba cósmica", desc: "Loto de luna: lanza Esporas somníferas en todas direcciones — el contacto duerme al jugador 5 segundos. Solo ocurre de noche. Tromba cósmica: lluvia de estrellas que ataca a jugadores aleatorios — 300.000 Arcano en radio 8m de cada impacto. Los ranged deben estar dispersos ≥8m entre sí para evitar recibir doble impacto.", img: null },
      { name: "Fase 1 · Suen — Apariciones (Lágrimas del sol / Luz del día)", desc: "Suen aparece brevemente 4 veces durante la Fase 1. Lágrimas del sol: canaliza daño (80.000 Arcano) a jugadores aleatorios. Luz del día: dispara un rayo de sol (150.000 Fuego en radio 8m) que derrite al instante cualquier Cometa de Hielo que toque. El daño que se le haga en estas apariciones persiste para la Fase 3.", img: null },
      { name: "Fase 1 · Bestia de Pesadillas", desc: "Lu'lin invoca una Bestia de las pesadillas sobre su objetivo. La bestia solo puede ser atacada por ese jugador. Sanar directamente al tanque del add aplica Sanación corrupta al healer (+25.000 Sombras c/1s acumulable). Solo curación de área cuando la Bestia esté activa.", img: null },
      { name: "Fase 2 · Suen — Abanico de llamas / Llamas de pasión", desc: "Abanico de llamas: cono de fuego que aumenta el daño de Fuego recibido un 25% (acumulable, 30s). Swap cada 2 stacks. Llamas de pasión: Suen se abalanza sobre un objetivo distante infligiendo 75.000 Fuego y repele a aliados cercanos. Al volver deja un rastro de llamas.", img: null },
      { name: "Fase 2 · Suen — Radiancia llameante", desc: "55.000 Fuego c/2s a todo el raid. Cada pulso acumula un stack que aumenta el daño de Fuego de Suen un 5%. Arrastra a Suen periódicamente cerca de los Cometas de Hielo para reducir sus stacks — un Cometa reducirá la Radiancia mientras Suen esté cerca.", img: null },
      { name: "Fase 2 · Lu'lin — Cometa de hielo / Sombras heladas", desc: "Cometa de hielo: 300.000 Escarcha en radio 6m al explotar + deja un cometa en el suelo. Sombras heladas (zona del cometa): −60% daño Fuego recibido y −10% velocidades. En HC el raid se refugia detrás del Cometa durante Infierno nuclear para reducir el daño un 60%.", img: null },
      { name: "Fase 3 · Al caer el sol — Ambas activas", desc: "Ambas gemelas están activas simultáneamente. Lu'lin usa Fuerza de la marea: aguas heladas que estallan hacia delante infligiendo 280.000 Escarcha con 100% desvío y esquiva activos. Si Lu'lin muere el ocaso termina y comienza el día potenciando a Suen. Si Suen muere comienza la noche potenciando a Lu'lin.", img: 'img/image292.jpeg' },
      { name: "Celestiales — Chi-Ji (Carrera de grullas)", desc: "Traza la constelación de Chi-Ji en las estatuas. Chi-Ji aparece y arrasa el campo con sus grullas — 1.6 millones de daño a los enemigos con los que entran en contacto. Ideal para acelerar kills.", img: 'img/celestial_chiji.png' },
      { name: "Celestiales — Niuzao (Entereza del buey)", desc: "Traza la constelación de Niuzao. Niuzao bendice a los jugadores con Entereza del buey: aumenta temporalmente la salud máxima de todos durante 30 segundos. Al expirar la salud añadida se pierde. Útil antes de golpes masivos de raid.", img: 'img/celestial_niuzao.png' },
      { name: "Celestiales — Yu'lon (Vitalidad del dragón)", desc: "Traza la constelación de Yu'lon. Yu'lon fortalece a los jugadores: regeneran 20.000 puntos de salud y 5.000 de maná c/1 segundo. Ideal en momentos de alta presión de curación.", img: 'img/celestial_yulon.png' },
      { name: "Celestiales — Xuen (Celeridad del tigre)", desc: "Traza la constelación de Xuen. Xuen aplica Celeridad del tigre: permite moverse tan rápido que ralentiza el movimiento, casteo y proyectiles de todos los enemigos. Permite esquivar Fuerza de Marea y otras mecánicas normalmente inevitables.", img: 'img/celestial_xuen.png' },
      { name: "Infierno nuclear", desc: "Solo heroico (Fase 2). Suen canaliza 135.000 Fuego c/1s a todo el raid. Mientras lo canaliza su desvío y esquiva son del 100%. El raid se refugia detrás de un Cometa de Hielo para reducir el daño un 60%.", hc: true },
      { name: "Rondadores de la noche", desc: "Solo heroico (Fase 1). Lu'lin invoca Rondadores de la noche invisibles que hacen 30.000 Sombras a objetivos aleatorios. Se revelan con Luz del día de Suen o naturalmente durante el ocaso y el día.", hc: true },
    ],
    positioning: "Fase 1: ranged disperso ≥8m. Fase 2: Suen en el centro, arrastrarla periódicamente a los Cometas. Fase 3: ambas gemelas en extremos opuestos de la sala. Prioridad de Celestiales en Fase 3: Xuen (Fuerza de Marea) > Niuzao (antes de golpes masivos) > Yu'lon (curación)."
  },
  tanque: {
    intro: "Dos tanques: uno en Suen, otro en Lu'lin. Suen siempre de espaldas al raid — su Abanico de llamas es un cono que puede matar a varios jugadores si apunta al grupo.",
    tips: [
      { t: 't', l: 'T', txt: "Abanico de llamas (Suen): cono de fuego que aumenta el daño de Fuego recibido un 25% acumulable. Swap cada 2 stacks — el debuff de +25% puede escalar rápidamente si se acumula. Siempre de espaldas al raid." },
      { t: 't', l: 'T', txt: "Mantén a Suen y Lu'lin en extremos opuestos de la sala. Sus efectos de área solapados (fuego + hielo) hacen el daño de raid completamente insostenible." },
      { t: 'w', l: '!', txt: "Fase 3: Fuerza de la marea de Lu'lin tiene 100% desvío y esquiva — el tanque de Lu'lin no puede mitigar nada durante el canal. Usa Xuen para que el raid pueda esquivar los proyectiles." },
    ],
    hcTips: [
      { t: 't', l: 'T', txt: "Infierno nuclear (HC): cuando Suen lo canaliza tiene 100% desvío y esquiva activos. El co-tanque cubre si hay swap durante el canal. El raid se agrupa detrás de un Cometa de Hielo." },
    ]
  },
  dps: {
    intro: "Bloodlust al inicio de Fase 2 (cuando Suen se activa). El daño hecho a Suen en sus apariciones de Fase 1 persiste para la Fase 3 — es DPS invertido que facilita el final.",
    tips: [
      { t: 'd', l: 'D', txt: "Fase 2: arrastra a Suen periódicamente cerca de los Cometas de Hielo. Cada pulso de Radiancia llameante sin reducción acumula +5% daño de Fuego — un daño que escala sin límite si no se gestiona." },
      { t: 'd', l: 'D', txt: "Fase 1 noche: dispersión ≥8m entre ranged para la Tromba cósmica. Movimiento continuo para esquivar las Esporas somníferas del Loto de luna. DPS a Suen en cada aparición." },
      { t: 'w', l: '!', txt: "Fase 3: matar a Suen primero para eliminar el Abanico de llamas y la Radiancia llameante. Reserva cooldowns ofensivos para este momento." },
    ],
    hcTips: [
      { t: 'd', l: 'D', txt: "Infierno nuclear (HC): en cuanto Suen empieza a canalizar, agrúpate detrás de un Cometa de Hielo. Xuen puede ralentizar el cast si el Cometa disponible está lejos." },
    ]
  },
  healer: {
    intro: "La presión escala hasta la Fase 3. Reserva cooldowns mayores exclusivamente para ese momento — especialmente para la Fuerza de Marea de Lu'lin.",
    tips: [
      { t: 'h', l: 'H', txt: "Bestia de Pesadillas (Fase 1): Sanación corrupta se acumula en el healer que sana directamente al tanque del add. Solo curación de área cuando la Bestia esté activa — nunca heals directos al tanque del add." },
      { t: 'h', l: 'H', txt: "Radiancia llameante (Fase 2): 55.000 Fuego c/2s a todos. Daño constante y predecible — pre-castea curación de área regularmente. Yu'lon es ideal aquí si la presión es alta." },
      { t: 'w', l: '!', txt: "Fase 3: Tranquilidad e Himno Divino reservados aquí. Fuerza de Marea de Lu'lin es el mayor pico de curación de todo el encuentro." },
    ],
    hcTips: [
      { t: 'h', l: 'H', txt: "Infierno nuclear (HC): 135.000 Fuego c/1s al raid mientras Suen canaliza. Pre-castea curación de área en la zona del Cometa antes de que empiece — el daño es inmediato y masivo." },
    ]
  },
  errores: [
    { title: "Sanar directamente al tanque con la Bestia de Pesadillas", desc: "Sanación corrupta se acumula en el healer — puede matarlo en pocos segundos. Solo curación de área cuando la Bestia esté activa." },
    { title: "Suen y Lu'lin superpuestas", desc: "Sus efectos de área combinados hacen el daño de raid completamente insostenible. Siempre en extremos opuestos de la sala." },
    { title: "No arrastrar a Suen a los Cometas (Fase 2)", desc: "Radiancia llameante acumula +5% daño de Fuego por pulso sin límite. Sin reducir los stacks el daño de la Fase 2 se vuelve inmanejable." },
    { title: "No guardar Xuen para la Fase 3", desc: "Xuen ralentiza los proyectiles de Fuerza de Marea haciéndolos esquivables. Sin Xuen disponible en Fase 3 la mecánica es prácticamente inevitable." },
  ]
},

// ─────────────────────────────────────────────
//  12. LEI SHEN
// ─────────────────────────────────────────────
leishen: {
  name: 'Lei Shen',
  bossImg: 'img/leishen_model.png',
  type: 'Jefe Final · El Rey del Trueno · Tres fases y dos intermisiones',
  video: 'UwvN5Gvmbps',
  general: {
    intro: "Tres fases de combate separadas por dos intermisiones donde el raid carga cuatro conductos de relámpagos. La energía acumulada en cada conducto determina qué habilidades usa Lei Shen en la fase siguiente — cargar mal los conductos hace el encuentro mucho más difícil. Si un conducto se sobrecarga daña con 40.000 Naturaleza c/1s en su cuadrante (en HC no se desactiva nunca).",
    mechanics: [
      { name: 'Los cuatro conductos', desc: "Norte — Choque estático: afecta al objetivo con 520.000 Naturaleza dividido entre jugadores en radio 8m (8s después del cast). Este — Cadena de difusión: rayo en cadena entre jugadores cercanos + genera un Relámpago difuminado por objetivo golpeado. Sur — Sobrecarga: marca al objetivo, tras 6s queda enraizado y crea una zona de seguridad que inflige 175.000 Naturaleza aturdiendo a los afectados. Oeste — Descarga frenética: 130.000 Naturaleza en puntos aleatorios del suelo (si no impacta a ningún enemigo se forma un Poder descontrolado). Sin conducto activo: Energía descargada (daño creciente al raid c/0.5s).", img: null },
      { name: 'Decapitar', desc: "4.5 millones de daño físico al tanque actual + +100% daño recibido durante 30 segundos. El daño decrece significativamente con la distancia — en cuanto empieza el cast, el co-tanque tauniea a Lei Shen y corre hacia otro pilar alejándolo del tanque original.", img: null },
      { name: 'Atronado', desc: "1.7 millones de Naturaleza en una ubicación objetivo. Marca a 3 jugadores que deben ir a sus esquinas asignadas sin cruzar el centro de la sala.", img: null },
      { name: 'Trueno aplastante', desc: "Colisión de relámpagos sobre los objetivos cada 1 segundo infligiendo 150.000 Naturaleza durante 45 segundos. Presión constante a todo el raid durante la Fase 1.", img: null },
      { name: 'Intermisión — Sobrecargar conductos', desc: "Al 65% y al 30%: Lei Shen invulnerable activa los cuatro conductos a la vez durante 45 segundos. El conducto con mayor carga al expirar se sobrecarga (40.000 Naturaleza c/1s en su cuadrante). En HC el conducto sobrecargado no se desactiva — sigue otorgando su facultad a Lei Shen durante el resto del combate. Yelmo de mando: expulsa al objetivo de la plataforma infligiendo 75.000 Naturaleza c/1s durante 8 segundos.", img: null },
      { name: 'Fase 2 — Relámpago (arma de asta)', desc: "Tajo de fusión: 750.000 Naturaleza + repele al objetivo + +100% daño de Tajo durante 1 minuto (swap inmediato tras cada Tajo). Bola de relámpagos: elementales que infligen 250.000 Naturaleza c/carga (HC: daño en radio 3m). Látigo de relámpagos: 800.000 Naturaleza al frente + deja un relámpago en el suelo. Descarga de relámpagos: 40.000 Naturaleza c/0.3s desde el relámpago del suelo — se puede evitar saltando por encima.", img: null },
      { name: 'Fase 3 — Amo del Trueno y el Relámpago', desc: "Poder sobrecogedor: sus ataques cuerpo a cuerpo infligen 8.000 Naturaleza adicionales c/1s durante 8 segundos. Vendavales violentos: empuja al raid en una dirección con 15.000 Naturaleza c/1s y aplica Quemadura de viento (+5% daño de Vendavales, acumulable). En Fase 3 también usa Atronado y las Bolas de relámpagos de Fase 2.", img: null },
      { name: 'Tempestad del Trueno', desc: "Solo heroico (Fase 3). Rayo continuo que cubre grandes áreas de la sala. Los jugadores deben identificar y mantenerse en la zona segura mientras gestionan Atronado y Vendavales simultáneamente.", hc: true },
    ],
    positioning: "Lei Shen en el centro con el tanque al frente. Los marcados por Atronado van a sus esquinas asignadas sin cruzar el centro. En las intermisiones el raid se divide entre los cuatro conductos según la distribución acordada."
  },
  tanque: {
    intro: "El Decapitar define el swap — el co-tanque tauniea y corre al boss lejos del tanque original en cuanto empieza el cast. Sin distancia suficiente el daño puede matar aunque haya cooldown activo.",
    tips: [
      { t: 't', l: 'T', txt: "Decapitar: 4.5M físico que decrece con la distancia. El co-tanque tauniea Y corre lejos en cuanto empieza el cast. Si el boss sigue pegado al tanque original al impactar puede matarlo aunque use un cooldown defensivo." },
      { t: 't', l: 'T', txt: "Fase 2 — Tajo de fusión: +100% daño por Tajo durante 1 minuto. Swap inmediato tras cada Tajo. El tanque relevado NO vuelve hasta que expire el debuff — si vuelve antes el siguiente Tajo puede matarlo." },
      { t: 'w', l: '!', txt: "Fase 3 — Vendavales violentos: empujan lejos del boss. La Quemadura de viento se acumula rápidamente — minimiza el tiempo en los Vendavales usando boosts de velocidad para volver al boss." },
    ],
    hcTips: [
      { t: 't', l: 'T', txt: "Conductos sobrecargados (HC): el conducto sobrecargado en la intermisión no se desactiva — Lei Shen usa esa facultad para el resto del combate. Planifica defensivos según qué conducto sobrecargó." },
    ]
  },
  dps: {
    intro: "La distribución de energía en los conductos durante la intermisión determina qué habilidades tiene Lei Shen en la siguiente fase. La estrategia estándar es distribuir la carga equitativamente entre los 4 para evitar sobrecargas.",
    tips: [
      { t: 'd', l: 'D', txt: "Atronado: en cuanto te marquen ve a tu esquina asignada sin cruzar el centro. El daño decrece con la distancia al punto de impacto — cuanto más lejos estés del impacto, menos daño recibes." },
      { t: 'd', l: 'D', txt: "Cadena de difusión (conducto Este): dispersarse para minimizar los rebotes. Cada rebote añade más daño y genera un Relámpago difuminado adicional — matar estos adds inmediatamente antes de que creen más cadenas." },
      { t: 'w', l: '!', txt: "Descarga de relámpagos (Fase 2): 40.000 Naturaleza c/0.3s desde el relámpago del suelo. Se puede esquivar saltando — no te quedes parado encima mientras haces DPS." },
    ],
    hcTips: [
      { t: 'd', l: 'D', txt: "Tempestad del Trueno (HC): en Fase 3 el espacio disponible se reduce significativamente. Identifica la zona segura antes de moverte por el Atronado — los Vendavales siguen empujando y el espacio es limitado." },
    ]
  },
  healer: {
    intro: "Fase 3 es la más intensa del encuentro. No llegar a ella sin cooldowns de raid disponibles. Distribuye la asignación de cooldowns por fase antes del pull.",
    tips: [
      { t: 'h', l: 'H', txt: "Fase 1: Trueno aplastante es presión moderada y constante. Fase 2: Bolas de relámpagos más Tajo de fusión. Fase 3: Vendavales + Quemadura de viento + Atronado simultáneos — reserva los cooldowns mayores aquí." },
      { t: 'h', l: 'H', txt: "Atronado dispersa al raid a las esquinas. Usa curación de largo rango para cubrir a los marcados mientras están en sus posiciones — son los más vulnerables en ese momento." },
      { t: 'w', l: '!', txt: "Nunca delante de Lei Shen. El Decapitar y el Látigo de relámpagos tienen un cono enorme hacia delante que es letal para los no-tanques." },
    ],
    hcTips: [
      { t: 'h', l: 'H', txt: "Tempestad del Trueno (HC): rayo continuo en grandes áreas de la sala. Cooldown de raid exclusivamente para el inicio de la Tempestad — coincide con el mayor pico de daño del encuentro." },
    ]
  },
  errores: [
    { title: "No correr el boss en el Decapitar", desc: "El co-tanque debe tauniear Y correr lejos en cuanto empieza el cast. Sin distancia el Decapitar puede matar aunque el tanque use un cooldown." },
    { title: "Sobrecargar un conducto en la intermisión", desc: "El conducto sobrecargado daña con 40.000 c/1s en su cuadrante (en HC es permanente y añade esa facultad a Lei Shen)." },
    { title: "Superponer marcas de Atronado", desc: "Dos marcados juntos hacen que las explosiones se solapen. Cada marcado a su esquina asignada sin excepción." },
  ]
},

// ─────────────────────────────────────────────
//  13. RA-DEN (Solo Heroico)
// ─────────────────────────────────────────────
raden: {
  name: 'Ra-den',
  bossImg: 'img/raden_model.png',
  type: 'Jefe 13 · Solo Heroico · El Vigilante Celestial Caído',
  video: '1AZEZVMEacI',
  general: {
    intro: "Solo disponible en Heroico tras derrotar a Lei Shen HC en la misma semana. El encuentro gira en torno a la rotación de soaking de Vita Inestable — recibir el debuff dos veces es muerte instantánea. Todo el raid (excepto el tanque) debe recibirlo una vez cada uno en rotación fija.",
    mechanics: [
      { name: 'Orbes de Vita y Anima', desc: "Orbes de Vita Corrupta (rojo): si llegan a Ra-den le dan un buff de daño. Orbes de Anima Corrupta (azul): si llegan le curan el 10% de vida restante. Matar un orbe de Anima hace daño AoE dividido entre los jugadores cercanos — nunca matarlo solo.", img: null },
      { name: 'Vita Inestable', desc: "Ra-den aplica Vita Inestable a un jugador. El debuff salta al jugador más lejano dañando a todos en la trayectoria. Si un jugador recibe Vita dos veces, muere instantáneamente. Todo el raid rota en posiciones fijas: Vita mark (cerca) recibe el debuff, Soak mark (lejos) lo absorbe cuando salta.", img: null },
      { name: 'Absorción de Vita', desc: "Cuando Ra-den absorbe un orbe de Vita, golpea a todo el raid con daño masivo dos veces. Habrá dos Absorciones a lo largo de la pelea — asigna un cooldown de raid mayor a cada una.", img: null },
      { name: 'Add — Cadena de Rayo', desc: "Ra-den invoca un add que castea Cadena de Rayo constantemente y explota en AoE al morir. El off-tanque lo kitea lejos del raid — nunca matarlo cerca del grupo.", img: null },
    ],
    positioning: "Ra-den en el centro de la sala. Vita mark a la derecha del raid (cerca), Soak mark más lejos en la misma línea. Anima Corrupta se mata en grupo para dividir el AoE de su muerte."
  },
  tanque: {
    intro: "Puede hacerse con un solo tanque si el DPS es suficiente. El segundo tanque kitea el add de Cadena de Rayo lejos del raid.",
    tips: [
      { t: 't', l: 'T', txt: "Mantén a Ra-den en el centro de la sala en todo momento. El daño melee es constante y alto desde el primer segundo — cooldowns defensivos rotativos desde el inicio, no guardes nada." },
      { t: 't', l: 'T', txt: "Add de Cadena de Rayo: kítalo siempre lejos del raid. Explota en AoE al morir — matarlo cerca del grupo puede hacer daño masivo a varios jugadores a la vez." },
      { t: 'w', l: '!', txt: "No pierdas el agro de Ra-den durante la rotación de Vita. El raid está en posiciones fijas y un movimiento del boss desordena todo el sistema de soaking." },
    ]
  },
  dps: {
    intro: "DPS check estricto. Ignora los orbes durante la fase de Vita Inestable y mantén el máximo uptime posible en el boss.",
    tips: [
      { t: 'd', l: 'D', txt: "Vita Inestable: aprende tu posición en la rotación ANTES del pull. Cuando sea tu turno muévete a la Soak mark antes de que el debuff salte — la reacción debe ser automática, no improvisada." },
      { t: 'd', l: 'D', txt: "Anima Corrupta: si hay que matarlo agrúpate con el raid para dividir el daño de la explosión. Matarlo solo puede dejarte a 0 de vida." },
      { t: 'w', l: '!', txt: "Vita dos veces = muerte instantánea sin excepción. Si ya tienes el debuff y por algún motivo está a punto de saltar hacia ti de nuevo, aléjate lo máximo posible del raid para minimizar el daño en la trayectoria." },
    ]
  },
  healer: {
    intro: "Dos picos previsibles (Absorción de Vita) y daño moderado constante. Los cooldowns de raid se reservan específicamente para esas dos Absorciones.",
    tips: [
      { t: 'h', l: 'H', txt: "Absorción de Vita: daño masivo a todo el raid. Habrá exactamente dos — asigna un cooldown de raid mayor a cada una. Es el momento de mayor presión de curación del encuentro." },
      { t: 'h', l: 'H', txt: "El tanque principal recibe daño melee constante y alto. HoTs activos en todo momento y curación directa preparada entre Absorciones." },
      { t: 'h', l: 'H', txt: "Durante la rotación de Vita el raid está en posiciones fijas y disperso. Usa heals de largo rango para cubrir a los soakers mientras están en la Soak mark lejos del grupo." },
    ]
  },
  errores: [
    { title: "Recibir Vita Inestable dos veces", desc: "Muerte instantánea. La rotación de soaking debe estar memorizada antes del pull sin excepción." },
    { title: "Matar el add de Anima Corrupta solo", desc: "El AoE al morir puede matar a un jugador. Siempre en grupo para dividir el daño." },
    { title: "Matar el add de Cadena de Rayo cerca del raid", desc: "El add explota en AoE al morir. El kiter debe llevarlo al extremo opuesto de la sala antes de matarlo." },
  ]
},

}; // fin TOT_GUIDES
