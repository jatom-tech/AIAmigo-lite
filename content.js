// === RISIKODETEKTION ===
const riskyWords = ['cpr', 'afskedigelse', 'sygdom', 'løn', 'diskrimination'];
const cprPattern = /\b\d{6}-?\d{4}\b/;

// === KLASSIFIKATION ===
function classify(text) {
  if (cprPattern.test(text)) return 'red';
  const lower = text.toLowerCase();
  if (riskyWords.some(w => lower.includes(w))) return 'yellow';
  return 'green';
}

// === SKJOLD ===
function createShield() {
  const shield = document.createElement('div');
  shield.id = 'aiamigo-shield';
  shield.style.cssText = `
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 9999;
    width: 48px;
    height: 48px;
    background: url('https://i.imgur.com/WoJXh7E.png') no-repeat center;
    background-size: contain;
    cursor: pointer;
  `;
  document.body.appendChild(shield);
  return shield;
}

// === POPUP ===
function showPopup(type) {
  const popup = document.createElement('div');
  popup.textContent = {
    red: '🚨 Høj risiko: Undgå følsomme data!',
    yellow: '⚠️ Vær opmærksom på indholdet.',
    green: '✅ Ingen problemer registreret.'
  }[type];
  popup.style.cssText = `
    position: fixed;
    bottom: 70px;
    right: 16px;
    background: white;
    color: black;
    border: 2px solid ${type === 'red' ? 'red' : type === 'yellow' ? 'orange' : 'green'};
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 9999;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  `;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 4000);
}

// === OBSERVER FOR PROMPTS ===
function observeInputs() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const active = document.activeElement;
      if (active && (active.tagName === 'TEXTAREA' || active.tagName === 'INPUT')) {
        const val = active.value.trim();
        const risk = classify(val);
        showPopup(risk);
      }
    }
  });
}

// === INIT ===
(function () {
  'use strict';
  if (!document.getElementById('aiamigo-shield')) createShield();
  observeInputs();
})();
