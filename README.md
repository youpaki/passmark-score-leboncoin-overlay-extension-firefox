# 🚀 PassMark Score Leboncoin Overlay Extension for Firefox

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Firefox](https://img.shields.io/badge/Firefox-Extension-orange.svg)](https://www.mozilla.org/firefox/)
[![Version](https://img.shields.io/badge/version-1.0-blue.svg)](https://github.com/yourusername/passmark-score-leboncoin-overlay-extension-firefox)

A Firefox extension that automatically displays PassMark benchmark scores for CPUs and GPUs in leboncoin listings.

![Extension Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=PassMark+Score+Display+Preview)

## 🌟 Quick Overview

Never miss a great hardware deal again! This extension automatically detects CPUs and GPUs on leboncoin.fr and displays their PassMark benchmark scores right below the listing titles - helping you make informed purchasing decisions instantly.

## Features

- 🔍 **Automatic Detection**: Scans leboncoin listings for CPU and GPU names
- ⚡ **CPU Scores**: Shows both single-core and multi-core PassMark scores
- 🎮 **GPU Scores**: Displays GPU PassMark scores
- 🎨 **Clean Design**: Compact badges that integrate seamlessly with leboncoin's interface
- 🚀 **Real-time Updates**: Works with dynamically loaded content

## Supported Hardware

### CPUs
- AMD Ryzen 5000, 3000, 2000, 1000 series
- AMD Ryzen 7000 series
- Intel Core 9th, 10th, 11th, 12th, 13th gen

### GPUs
- NVIDIA RTX 40, 30, 20 series
- NVIDIA GTX 16, 10 series
- AMD Radeon RX 7000, 6000, 5000 series

## Installation

### Method 1: Firefox Developer Edition (Recommended - Permanent)

**Best option for permanent installation without signing:**

1. Download and install [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/)
2. Open Firefox Developer Edition
3. Type `about:debugging` in the address bar
4. Click "This Firefox" on the left
5. Click "Load Temporary Add-on"
6. Navigate to the extension folder and select `manifest.json`
7. ✅ The extension will persist across browser restarts!

**Note:** Despite the name "temporary", extensions in Developer Edition persist until manually removed.

### Method 2: Self-Signing (Permanent Installation)

For permanent installation in regular Firefox, you need to package and self-distribute:

1. **Create a ZIP package:**
   ```powershell
   # In PowerShell, navigate to extension folder:
   Compress-Archive -Path manifest.json,content.js,styles.css,icon48.png,icon96.png -DestinationPath passmark-extension.zip -Force
   ```

2. **Get an Add-on ID:**
   - Go to https://addons.mozilla.org/developers/
   - Create an account if needed
   - Submit the ZIP for review (takes a few days)
   - Mozilla will sign it and assign an ID

3. **Install the signed extension:**
   - Download the signed `.xpi` file from Mozilla
   - Open Firefox → `about:addons`
   - Drag and drop the `.xpi` file
   - ✅ Permanent installation!

### Method 3: Disable Signature Verification (Not Recommended)

**⚠️ Warning: This reduces security. Only use for personal testing.**

1. Open Firefox
2. Type `about:config` in the address bar
3. Accept the warning
4. Search for `xpinstall.signatures.required`
5. Double-click to set it to `false`
6. Go to `about:addons`
7. Click the gear icon → "Install Add-on From File"
8. Create a ZIP file of the extension
9. Select the ZIP file
10. ✅ Extension installed permanently (but unsigned)

## Usage

1. Go to https://www.leboncoin.fr
2. Search for computer hardware (e.g., "RTX 3080", "Ryzen 5 5600X")
3. The extension will automatically detect compatible hardware
4. PassMark scores will appear below the listing titles

### What You'll See

**For CPUs:**
- Single-core score (⚡) - Important for gaming and single-threaded tasks
- Multi-core score (🔥) - Important for rendering, video editing, multitasking

**For GPUs:**
- Overall graphics score (🎮) - Gaming and 3D performance

## Testing

Open the example HTML file `« 9 5900x » Toute la France - leboncoin.htm` in Firefox with the extension installed to test it locally.

## How It Works

1. The extension monitors leboncoin pages for product listings
2. It extracts the title from each listing
3. It matches the title against a database of CPU and GPU models
4. If a match is found, it displays the corresponding PassMark scores
5. Badges are inserted directly into the page DOM

## Development

### File Structure

```
├── manifest.json       # Extension configuration
├── content.js          # Main script that runs on leboncoin pages
├── styles.css          # Styling for the score badges
├── icon48.png          # 48x48 icon
├── icon96.png          # 96x96 icon
└── README.md           # This file
```

### Adding More Hardware

Edit `content.js` and add entries to the `HARDWARE_DATABASE` object:

```javascript
'hardware name': { type: 'cpu', single: 1234, multi: 5678 },
// or
'hardware name': { type: 'gpu', score: 12345 },
```

Hardware names should be lowercase and normalized (without manufacturer prefixes).

## Troubleshooting

**Extension not working?**
- Open the browser console (F12) and check for errors
- Make sure you're on leboncoin.fr
- Try refreshing the page

**Scores not showing?**
- The hardware might not be in the database yet
- Check the console logs to see what's being detected
- The title text might not match the database format exactly

**Icons not displaying?**
- Make sure you converted the SVG files to PNG
- The PNG files must be named `icon48.png` and `icon96.png`

## Privacy

This extension:
- ✅ Only runs on leboncoin.fr
- ✅ Does not collect any personal data
- ✅ Does not send any data to external servers
- ✅ Does not track your browsing
- ✅ All data is hardcoded in the extension

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Important:** This extension is not affiliated with, endorsed by, or sponsored by PassMark Software Pty Ltd or leboncoin. PassMark® is a registered trademark of PassMark Software Pty Ltd. All trademarks belong to their respective owners.

## Credits

PassMark scores are from PassMark Software's CPU and GPU benchmarks:
- https://www.cpubenchmark.net/
- https://www.videocardbenchmark.net/

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Adding Hardware

To add more hardware models, edit `content.js` and add entries to the `HARDWARE_DATABASE` object with their PassMark scores.

## Roadmap

- [ ] Add more hardware models (laptops, mobile CPUs)
- [ ] Price-to-performance ratio calculator
- [ ] Historical price tracking
- [ ] Support for other French marketplaces
- [ ] Live API integration (optional)

## Support

If you find this extension useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs via Issues
- 💡 Suggesting new features
- 🔧 Contributing code improvements

## Version History

### 1.0 (November 2025)
- Initial release
- Support for 60+ AMD Ryzen and Intel Core CPUs
- Support for NVIDIA RTX/GTX and AMD Radeon GPUs
- Single-core and multi-core CPU scores
- Graphics scores for GPUs
- Automatic detection on leboncoin.fr
- Privacy-focused design (no tracking)

---

**Made with ❤️ for hardware enthusiasts** | **Star ⭐ if you find it useful!**
