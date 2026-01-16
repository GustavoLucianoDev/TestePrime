console.log('[Inject] iniciado');

// rota alvo
const TARGET_ROUTE = '#/home/profile/vouchers';

// =============================
// OBSERVA MUDANÇA DE ROTA
// =============================
let lastHash = location.hash;

const div = document.createElement('div');
  div.id = 'historico';
  div.innerHTML = `
    <div class="historico">
      <h1>Teste</h1>
    </div>
  `;

  document.body.appendChild(div);

setInterval(() => {
  if (location.hash !== lastHash) {
    lastHash = location.hash;
    onRouteChange(location.hash);
  }
}, 200);

// =============================
// QUANDO MUDA A ROTA
// =============================
function onRouteChange(hash) {
  console.log('[Inject] rota:', hash);

  if (hash.startsWith(TARGET_ROUTE)) {
    ativarUIVouchers();
  } else {
    desativarUIVouchers();
  }
}

// =============================
// ATIVA UI CUSTOM
// =============================
function ativarUIVouchers() {
  if (document.getElementById('ui-vouchers')) return;

  console.log('[Inject] ativando UI vouchers');

  // esconde flutter
  const flutter = document.querySelector('flutter-view');
  if (flutter) flutter.style.display = 'none';

  const div = document.createElement('div');
  div.id = 'ui-vouchers';
  div.innerHTML = `
    <div class="ui-container">
      <h1>🎟️ Vouchers Custom</h1>
      <p>UI 100% HTML / JS</p>
      <button id="btn-voltar">⬅ Voltar</button>
    </div>
  `;

  document.body.appendChild(div);

  document
    .getElementById('btn-voltar')
    .addEventListener('click', voltarParaFlutter);
}

// =============================
// DESATIVA UI CUSTOM
// =============================
function desativarUIVouchers() {
  const ui = document.getElementById('ui-vouchers');
  if (ui) ui.remove();

  const flutter = document.querySelector('flutter-view');
  if (flutter) flutter.style.display = '';
}

// =============================
// VOLTAR PARA FLUTTER
// =============================
function voltarParaFlutter() {
  console.log('[Inject] voltando para Flutter');
  history.back();
}
