# 🛡️ AIAmigo™ Lite – Chrome Extension (Learning Project)

> ⚠️ Dette er et personligt læringsprojekt, ikke et kommercielt produkt. Det er udviklet for at lære udvikling af browser-extensions, promptanalyse og AI-risikohåndtering.

## 🔍 Formål
AIAmigo™ Lite er en eksperimentel Chrome Extension, som analyserer tekstinput i realtid – fx i AI-værktøjer som ChatGPT, Copilot eller DeepSeek – og giver visuel feedback om risikoniveau.

## 🧩 Funktioner
- ✅ Klassificering af tekst som grøn, gul eller rød (baseret på mønstre og ordvalg)
- ⚠️ Popup-advarsel ved potentielt følsomt indhold (fx CPR, sygdom, løn mv.)
- 🛡️ Skjold med status, som vises i nederste højre hjørne
- ❌ Ingen tracking, ingen lagring, ingen bagvedliggende server

## 💻 Teknologi
- JavaScript (Vanilla)
- Regex og MutationObserver
- Chrome Extension Manifest v3

## 📁 Projektstruktur

📁 AIAmigoLite
├── content.js # Detektionslogik og UI
├── manifest.json # Chrome manifestfil
├── icons/ # (valgfrit) egne ikoner
└── README.md # Denne beskrivelse