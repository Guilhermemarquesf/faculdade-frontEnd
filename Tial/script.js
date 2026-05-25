/* ═══════════════════════════════════════
   TEMA DARK / LIGHT
═══════════════════════════════════════ */
const rootEl = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
let isDark = true;

themeBtn.addEventListener('click', () => {
  isDark = !isDark;
  rootEl.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeBtn.textContent = isDark ? '🌙' : '☀️';
});

/* ═══════════════════════════════════════
   UI / ESTADOS
═══════════════════════════════════════ */
const btnConfirm = document.getElementById('btnConfirm');
const feedbackEl = document.getElementById('feedback');
const secBtns = document.querySelectorAll('.btn-secondary');

const feedbackMessages = {
  maybe: '🤞 Tudo bem! Você pode confirmar depois.',
  no: '😢 Que pena! Esperamos te ver na próxima.'
};

const setSecondarySelected = (activeEl) => {
  secBtns.forEach(b => b.classList.toggle('selected-sec', b === activeEl));
};

/* ═══════════════════════════════════════
   HELPER — FEEDBACK
═══════════════════════════════════════ */
function showFeedback(msg) {
  feedbackEl.classList.remove('show');
  feedbackEl.textContent = msg;
  // Duplo rAF garante que a transição CSS seja re-disparada
  requestAnimationFrame(() => {
    requestAnimationFrame(() => feedbackEl.classList.add('show'));
  });
}

/* ═══════════════════════════════════════
   HELPER — CONFETTI
═══════════════════════════════════════ */
function launchConfetti(origin) {
  const { left, top, width, height } = origin.getBoundingClientRect();
  const cx = left + width / 2;
  const cy = top + height / 2;

  const palette = ['#a78bfa', '#7c3aed', '#c4b5fd', '#ddd6fe', '#ffffff', '#8b5cf6'];
  const total = 40;

  for (let i = 0; i < total; i++) {
    const piece = document.createElement('div');
    piece.className = 'cp';

    const angle = (Math.PI * 2 / total) * i;
    const dist = Math.random() * 140 + 60;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist - 60;

    const color = palette[i % palette.length];
    const isCircle = Math.random() > 0.5;

    piece.style.cssText = `left: ${cx}px; top: ${cy}px; background: ${color}; border-radius: ${isCircle ? '50%' : '2px'}`;

    piece.animate(
      [
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
        {
          transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) rotate(${Math.random() * 720}deg) scale(0.2)`,
          opacity: 0
        }
      ],
      {
        duration: 800 + Math.random() * 400,
        easing: 'cubic-bezier(0, 0.9, 0.57, 1)',
        fill: 'forwards',
        delay: Math.random() * 100
      }
    );

    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 1400);
  }
}

/* ═══════════════════════════════════════
   HANDLERS
═══════════════════════════════════════ */
const setConfirmState = (isConfirmed) => {
  btnConfirm.classList.toggle('confirmed', isConfirmed);
  if (isConfirmed) setSecondarySelected(null);
};

btnConfirm.addEventListener('click', () => {
  if (btnConfirm.classList.contains('confirmed')) return;

  setConfirmState(true);
  showFeedback('🎉 Presença confirmada! Te vemos lá.');
  launchConfetti(btnConfirm);
});

secBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    setConfirmState(false);
    setSecondarySelected(btn);
    showFeedback(feedbackMessages[btn.dataset.val]);
  });
});


