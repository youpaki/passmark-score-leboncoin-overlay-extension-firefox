# PassMark Score Display Extension for Leboncoin

A Firefox extension that automatically displays PassMark benchmark scores for CPUs and GPUs in leboncoin listings.

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

Free to use and modify for personal use.

## Credits

PassMark scores are from PassMark Software's CPU and GPU benchmarks:
- https://www.cpubenchmark.net/
- https://www.videocardbenchmark.net/

## Version History

### 1.0 (November 2025)
- Initial release
- Support for AMD Ryzen CPUs
- Support for Intel Core CPUs
- Support for NVIDIA GPUs
- Support for AMD Radeon GPUs
- Real-time detection on leboncoin.fr
