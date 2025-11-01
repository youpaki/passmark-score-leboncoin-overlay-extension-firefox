# 🔥 PassMark Score Display for Leboncoin

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Firefox](https://img.shields.io/badge/Firefox-Extension-orange.svg)](https://www.mozilla.org/firefox/)
[![Version](https://img.shields.io/badge/version-1.1-blue.svg)](https://github.com/youpaki/passmark-score-leboncoin-overlay-extension-firefox/releases)

A Firefox extension that automatically displays **PassMark benchmark scores** for CPUs and GPUs directly on leboncoin.fr listings. Make informed decisions when buying used hardware!

---

## ✨ Features

- 🎯 **Automatic Detection** - Recognizes 60+ CPU and GPU models
- ⚡ **CPU Scores** - Shows both single-core and multi-core performance
- 🎮 **GPU Scores** - Displays graphics card benchmark scores
- 🎨 **Beautiful Badges** - Color-coded, gradient-styled score indicators
- 🔒 **Privacy First** - No tracking, no external API calls
- ⚙️ **Zero Configuration** - Works instantly after installation

---

## 🚀 Quick Start

### Installation (2 minutes)

1. **Download Firefox Developer Edition** (recommended for permanent install)
   - 📥 [Download here](https://www.mozilla.org/firefox/developer/)

2. **Load the Extension**
   - Open Firefox and go to `about:debugging`
   - Click "This Firefox" → "Load Temporary Add-on"
   - Select `manifest.json` from this repository

3. **Browse leboncoin.fr** and see scores appear automatically!

📖 **Detailed instructions:** [docs/QUICKSTART.md](docs/QUICKSTART.md)

---

## 🖥️ Supported Hardware

### CPUs (40+ models)
- **AMD Ryzen** - 7000, 5000, 3000, 2000, 1000 series
- **Intel Core** - 13th, 12th, 11th, 10th, 9th gen

### GPUs (20+ models)
- **NVIDIA** - RTX 4090/4080/4070, RTX 3090/3080/3070/3060, RTX 2080/2070/2060, GTX 1660/1650/1080/1070/1060
- **AMD Radeon** - RX 7900/7800/7700/7600, RX 6900/6800/6700/6600, RX 5700/5600/5500

---

## 📸 Screenshots

### CPU Detection
```
AMD Ryzen 9 5900X - 150€
┌─────────────────────────────┐
│ 📊 PassMark: 39,489         │
│ Single: 3,605 | Multi: 39,489│
└─────────────────────────────┘
```

### GPU Detection
```
NVIDIA RTX 3080 - 400€
┌─────────────────────────────┐
│ 🎮 PassMark: 25,251         │
└─────────────────────────────┘
```

---

## 📁 Project Structure

```
passmark-score-leboncoin-overlay-extension-firefox/
├── manifest.json          # Extension configuration
├── content.js            # Main detection & display logic
├── styles.css            # Badge styling
├── icons/                # Extension icons
│   ├── icon48.png
│   ├── icon96.png
│   ├── icon48.svg
│   └── icon96.svg
├── docs/                 # Documentation
│   ├── QUICKSTART.md     # Fast installation guide
│   ├── DEPLOYMENT.md     # Distribution guide
│   ├── PUBLISHING.md     # GitHub & Mozilla submission
│   └── CONTRIBUTING.md   # Contribution guidelines
├── tools/                # Development tools
│   ├── test-page.html    # Local testing page
│   ├── setup.bat         # Windows automation
│   └── check-installation.html
├── LICENSE               # MIT License
└── README.md            # This file
```

---

## 🛠️ Development

### Prerequisites
- Firefox Developer Edition
- Basic knowledge of JavaScript
- Git (for contributing)

### Testing Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/youpaki/passmark-score-leboncoin-overlay-extension-firefox.git
   cd passmark-score-leboncoin-overlay-extension-firefox
   ```

2. **Test without leboncoin**
   - Open `tools/test-page.html` in Firefox
   - See scores appear on sample listings

3. **Test on leboncoin**
   - Load extension via `about:debugging`
   - Browse https://www.leboncoin.fr/recherche?category=15&text=ryzen
   - Scores should appear automatically

### Adding New Hardware

Edit `content.js` and add entries to `HARDWARE_DATABASE`:

```javascript
const HARDWARE_DATABASE = {
  // Add your hardware here
  'ryzen 9 7950x': { 
    type: 'cpu', 
    singleCore: 4500, 
    multiCore: 68000 
  },
  // ...
};
```

Then submit a pull request! See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/new-cpu`)
3. ✏️ Make your changes
4. ✅ Test thoroughly
5. 📤 Submit a pull request

**Popular contributions:**
- Adding new CPU/GPU models
- Improving detection accuracy
- Translating to other languages
- Enhancing UI/UX

📖 **Full guidelines:** [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)

---

## 📋 Roadmap

- [ ] Support for more hardware (Intel 14th gen, AMD 8000 series)
- [ ] Price-to-performance ratio indicator
- [ ] Comparison with similar models
- [ ] Support for other marketplaces (eBay, Amazon)
- [ ] Dark mode support
- [ ] Multilingual support (English, Spanish)

---

## 🐛 Known Issues

- Some listing titles may not be detected if format is unusual
- Scores are cached locally (no real-time updates from PassMark)
- Only works on leboncoin.fr domain

**Report issues:** [GitHub Issues](https://github.com/youpaki/passmark-score-leboncoin-overlay-extension-firefox/issues)

---

## 📜 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) for details.

**Disclaimer:** This extension is not affiliated with leboncoin or PassMark Software. All trademarks belong to their respective owners.

---

## 🙏 Acknowledgments

- **PassMark Software** - For benchmark data
- **leboncoin** - For the marketplace platform
- **Firefox** - For the excellent extension API
- **You** - For using and contributing!

---

## 📞 Support

- 🐛 **Bug reports:** [GitHub Issues](https://github.com/youpaki/passmark-score-leboncoin-overlay-extension-firefox/issues)
- 💡 **Feature requests:** [GitHub Discussions](https://github.com/youpaki/passmark-score-leboncoin-overlay-extension-firefox/discussions)
- 📧 **Contact:** Open an issue on GitHub

---

## ⭐ Star This Project

If you find this extension useful, please give it a star! ⭐

It helps others discover the project and motivates continued development.

---

**Made with ❤️ for the hardware enthusiast community**
