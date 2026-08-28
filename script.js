// Before/after slider
(function () {
  const slider = document.getElementById('baSlider');
  const after = document.getElementById('baAfter');
  const handle = document.getElementById('baHandle');
  const range = document.getElementById('baRange');
  if (!slider || !after || !handle || !range) return;

  function setPosition(pct) {
    pct = Math.min(100, Math.max(0, pct));
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
    handle.style.left = `${pct}%`;
    range.value = pct;
  }

  range.addEventListener('input', (e) => setPosition(Number(e.target.value)));

  let dragging = false;
  function pctFromClientX(clientX) {
    const rect = slider.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }
  slider.addEventListener('pointerdown', (e) => {
    dragging = true;
    setPosition(pctFromClientX(e.clientX));
  });
  window.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    setPosition(pctFromClientX(e.clientX));
  });
  window.addEventListener('pointerup', () => { dragging = false; });

  setPosition(68);
})();

// Mobile nav toggle
(function () {
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '76px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = '#F7F9F8';
    links.style.padding = '24px';
    links.style.borderBottom = '1px solid #D9E2DD';
  });
})();

// Quote form (no backend wired up yet)
(function () {
  const form = document.getElementById('quoteForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('This form is a placeholder — hook it up to an email service or backend before launch.');
  });
})();
