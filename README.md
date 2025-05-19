# 🛡️ AIAmigo™ Lite – Privacy-Aware Prompt Monitoring Extension

> A hobby project developed to explore AI risk management, privacy, and Chrome extension development.

## 🔍 Purpose
AIAmigo™ Lite is a minimalist Chrome extension that **analyzes text inputs** (prompts) typed into AI chatbots like ChatGPT, Microsoft Copilot, and DeepSeek. It provides **real-time visual feedback** to help users avoid risky or sensitive information.

## 🧩 Key Features
- ✅ Simple green/yellow/red classification (privacy & ethical risk indicators)
- ⚠️ Real-time popup warnings (e.g. CPR, salary, sensitive words)
- 🛡️ Always-visible status shield with instant prompt counter
- ❌ No data collection, tracking or backend – full user-side anonymity
- 🌙 Auto-adjusts to dark/light mode
- 💡 Fully self-contained `content.js` file – no installation needed

## 📦 Technology Stack
- JavaScript (Vanilla)
- Chrome Extension API
- MutationObserver & Regex-based text parsing
- Tailwind-inspired popup styling

## 👨‍💻 Background
This project was created as part of a personal learning journey into:
- Full Stack Development (Frontend, Backend, Extension APIs)
- GDPR & AI Act compliance frameworks
- Risk classification & ethical AI usage

> 🎓 I now consider myself an autodidact full stack developer and use this project as part of my portfolio.

## 📂 Project Structure
```
📁 amigo-lite
 └── content.js            # Main logic for detection, popup and shield
 └── manifest.json         # Minimal Chrome extension manifest
 └── icons/                # Optional icons
```

## ⚠️ Disclaimer
This tool is not affiliated with or endorsed by OpenAI, Microsoft, DeepSeek, or any AI provider. It is a **personal educational tool**, shared for transparency and inspiration only. **No data is stored or transmitted.**

## 📜 License
MIT – Free to use, modify and share with proper credit.

---

🧠 *Built with care, caution and curiosity – not for profit.*
