// ═══════════════════════════════════════════════
//  app.js
//  Lógica de navegación y renderizado de PandaGuide.
// ═══════════════════════════════════════════════

const ALL_GUIDES = Object.assign({}, TOT_GUIDES, SOO_GUIDES);

const S = {
  sec:    'raids',
  raid:   'tot',
  boss:   null,
  tab:    'general',
  showHC: false
};

const TABS = [
  { id: 'general', label: 'General'           },
  { id: 'tanque',  label: 'Tanque'            },
  { id: 'dps',     label: 'DPS'               },
  { id: 'healer',  label: 'Healer'            },
  { id: 'errores', label: 'Errores frecuentes' },
];

function dot(t, l) {
  const cls = { t: 'dt', d: 'dd', h: 'dh', w: 'dw' }[t] || 'dh';
  return `<div class="c-dot ${cls}">${l}</div>`;
}

function renderTipList(tips, isHC) {
  if (!tips || !tips.length) return '';
  return tips.map(t =>
    `<div class="c-tip${isHC ? ' hc-tip' : ''}">
      ${dot(t.t, t.l)}
      <div class="c-tip-body">
        <p class="c-tip-txt">${t.txt}</p>
        ${t.img ? `<div style="text-align:center"><img class="c-tip-img" src="${t.img}" alt=""></div>` : ''}
      </div>
    </div>`
  ).join('');
}

function renderSb() {
  let h = `
    <div class="sb-logo">
      <div class="sb-logo-name">Panda<span class="sb-logo-accent">Guide</span></div>
      <div class="sb-logo-tag">WoW MoP Classic &middot; Guías de Raid</div>
    </div>
    <div class="sb-sec">Raids</div>`;

  RAIDS.forEach(r => {
    const open = S.sec === 'raids' && S.raid === r.id;
    h += `
      <div class="sb-item${open ? ' on' : ''}" onclick="doRaid('${r.id}')">
        <span style="font-size:12px;color:var(--txt3)">${open ? '&#9660;' : '&#9658;'}</span>
        <span style="flex:1">${r.name}</span>
        <span class="sb-badge patch">P${r.patch}</span>
      </div>`;
    if (open) {
      r.bosses.forEach(b => {
        h += `
          <div class="sb-boss${S.boss === b.id ? ' on' : ''}" onclick="doBoss('${b.id}')">
            <span class="sb-num">${b.n}</span>
            <span style="flex:1">${b.name}</span>
            ${b.hc ? '<span class="sb-badge hc">HC</span>' : ''}
          </div>`;
      });
    }
  });

  h += `
    <div class="sb-sec" style="margin-top:4px">Equipamiento</div>
    <div class="sb-item${S.sec === 'bis'  ? ' on' : ''}" onclick="doSec('bis')">&#9670;&nbsp; BiS por Clase</div>
    <div class="sb-sec">Profesiones</div>
    <div class="sb-item${S.sec === 'prof' ? ' on' : ''}" onclick="doSec('prof')">&#9670;&nbsp; Guía de Profesiones</div>`;

  document.getElementById('sb').innerHTML = h;
}

function renderTabs() {
  const el = document.getElementById('tabs');
  if (!S.boss || S.sec !== 'raids') { el.innerHTML = ''; return; }
  el.innerHTML = TABS.map(t =>
    `<div class="tab${S.tab === t.id ? ' on' : ''}" data-t="${t.id}" onclick="doTab('${t.id}')">${t.label}</div>`
  ).join('');
}

function renderContent() {
  const el = document.getElementById('content');

  if (S.sec === 'bis') {
    el.innerHTML = `<div class="c-wlc"><h3>BiS por Clase</h3><p>Las listas de Best in Slot para cada clase y especialización de MoP Classic están siendo preparadas.<br><br>Próximamente disponibles para Trono del Trueno, Asedio de Orgrimmar y todas las raids de la expansión.</p></div>`;
    return;
  }
  if (S.sec === 'prof') {
    el.innerHTML = `<div class="c-wlc"><h3>Guía de Profesiones</h3><p>Descubre qué crafteos, encantamientos y consumibles puedes obtener a través de las profesiones en Mists of Pandaria Classic.<br><br>Próximamente.</p></div>`;
    return;
  }
  if (!S.boss) {
    el.innerHTML = `<div class="c-empty">Selecciona un jefe de la lista para ver su guía.</div>`;
    return;
  }

  const g = ALL_GUIDES[S.boss];
  if (!g) return;

  let h = `<p class="c-boss-h">${g.name}</p><p class="c-boss-sub">${g.type}</p>`;

  // ── General ──
  if (S.tab === 'general') {
    h += `<p class="c-intro">${g.general.intro}</p>`;
    if (g.bossImgs && g.bossImgs.length) {
      h += `<div class="c-boss-model-wrap c-boss-model-duo">${g.bossImgs.map(src => `<img class="c-boss-model" src="${src}" alt="${g.name}">`).join('')}</div>`;
    } else if (g.bossImg) {
      h += `<div class="c-boss-model-wrap"><img class="c-boss-model" src="${g.bossImg}" alt="${g.name}"></div>`;
    }

    if (g.general.mechanics.length) {
      h += `<p class="c-st">Mecánicas clave</p>`;
      h += g.general.mechanics.map(m => `
        <div class="c-mech${m.hc ? ' hc-mech' : ''}">
          <p class="c-mech-n">${m.name}${m.hc ? '<span class="hc-tag">Solo Heroico</span>' : ''}</p>
          <p class="c-mech-d">${m.desc}</p>
          ${m.img ? `<img class="c-mech-img" src="${m.img}" alt="${m.name}">` : ''}
        </div>`).join('');
    }

    if (g.general.positioning) {
      h += `<p class="c-st section-gap">Posicionamiento general</p>
            <div class="c-pos-box"><p>${g.general.positioning}</p></div>`;
    }

    // Video al final
    if (g.video) {
      h += `<p class="c-st section-gap">Video de referencia</p>
            <div class="c-video">
              <a class="c-video-thumb" href="https://www.youtube.com/watch?v=${g.video}" target="_blank" rel="noopener">
                <img src="https://img.youtube.com/vi/${g.video}/hqdefault.jpg" alt="Ver video en YouTube">
                <div class="c-video-thumb-play">&#9654; Ver en YouTube</div>
              </a>
            </div>`;
    } else {
      h += `<p class="c-st section-gap">Video de referencia</p>
            <div class="c-video">
              <div class="c-video-placeholder">
                <p>&#9654; Próximamente</p>
                <small>Añade el ID de YouTube en el campo <code>video</code> del jefe</small>
              </div>
            </div>`;
    }
  }

  // ── Pestañas de rol ──
  const ROL_TABS = ['tanque', 'dps', 'healer'];
  const ROL_LABELS = { tanque: 'Guía de rol', dps: 'Prioridades y consejos', healer: 'Prioridades de curación' };

  if (ROL_TABS.includes(S.tab)) {
    const rolTab = g[S.tab];
    const hasHC  = rolTab.hcTips && rolTab.hcTips.length > 0;

    h += `<p class="c-intro">${rolTab.intro}</p>`;

    if (hasHC) {
      h += `<div class="hc-toggle-wrap">
        <button class="hc-toggle-btn${S.showHC ? ' active' : ''}" onclick="toggleHC()">
          <span class="hc-toggle-dot"></span>
          ${S.showHC ? 'Ocultar consejos Heroico' : 'Ver consejos Heroico'}
        </button>
      </div>`;
    }

    if (rolTab.tips.length) {
      h += `<p class="c-st">${ROL_LABELS[S.tab]}</p>
            <div>${renderTipList(rolTab.tips, false)}</div>`;
    }

    if (hasHC && S.showHC) {
      h += `<p class="hc-section-label">&#9670; Consejos adicionales — Heroico</p>
            <div>${renderTipList(rolTab.hcTips, true)}</div>`;
    }
  }

  // ── Errores ──
  if (S.tab === 'errores') {
    if (!g.errores.length) {
      h += `<p class="c-intro">Contenido próximamente.</p>`;
    } else {
      h += `<p class="c-st">Qué no hacer</p>`;
      h += g.errores.map(e =>
        `<div class="c-err"><p class="c-err-t">&#x2715; ${e.title}</p><p class="c-err-d">${e.desc}</p></div>`
      ).join('');
    }
  }

  el.innerHTML = h;
  el.scrollTop = 0;
}

function render()    { renderSb(); renderTabs(); renderContent(); }
function doRaid(id)  { if (S.sec==='raids'&&S.raid===id){S.raid=null;}else{S.sec='raids';S.raid=id;S.boss=null;} render(); }
function doBoss(id)  { S.boss=id; S.tab='general'; S.showHC=false; render(); }
function doTab(t)    { S.tab=t; S.showHC=false; renderTabs(); renderContent(); }
function doSec(s)    { S.sec=s; S.boss=null; S.raid=null; S.showHC=false; render(); }
function toggleHC()  { S.showHC=!S.showHC; renderContent(); }

render();
