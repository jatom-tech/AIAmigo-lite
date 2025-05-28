# AIAmigo Lite – Chrome Extension 🛡️

AIAmigo Lite er en gratis browserbeskytter, som giver dig feedback på dine AI-prompts i realtid – helt anonymt.

## 🔧 Sådan installerer du

1. Gå til [AIAmigo-lite](https://github.com/jatom-tech/AIAmigo-lite)
2. Klik på den grønne knap **"Code" → "Download ZIP"**
3. Udpak ZIP-filen på din computer
4. Åbn `chrome://extensions/` i Chrome
5. Aktivér **Developer mode**
6. Klik på **"Load unpacked"** og vælg den udpakkede mappe

✅ Nu er AIAmigo Lite aktiv! Skjoldet vises nederst til højre.

---



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
