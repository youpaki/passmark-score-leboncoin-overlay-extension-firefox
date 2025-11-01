# PassMark Extension - Package for Firefox

This guide explains how to package and deploy your extension.

## Package Structure

Your extension should have these files:
```
passmark-extension/
├── manifest.json       # Required - Extension config
├── content.js          # Required - Main script
├── styles.css          # Required - Styles
├── icon48.png          # Recommended - Small icon
├── icon96.png          # Recommended - Large icon
├── README.md           # Optional - Documentation
└── QUICKSTART.md       # Optional - Quick guide
```

## Creating a Deployable Package

### Step 1: Prepare Icons
1. Open `icon-converter.html` in a browser
2. Download both PNG icons
3. Place them in the extension folder

### Step 2: Test Locally
```bash
# Open test page
firefox test-page.html

# Or test on actual site
firefox https://www.leboncoin.fr/recherche?text=ryzen%205900x
```

### Step 3: Create ZIP Package

#### Windows (PowerShell)
```powershell
# Create a ZIP file with all required files
Compress-Archive -Path manifest.json,content.js,styles.css,icon48.png,icon96.png -DestinationPath passmark-extension.zip -Force
```

#### Windows (Command Prompt)
```cmd
# Using 7-Zip (if installed)
7z a passmark-extension.zip manifest.json content.js styles.css icon48.png icon96.png

# Or manually: Select files > Right-click > Send to > Compressed folder
```

#### Linux/Mac
```bash
zip passmark-extension.zip manifest.json content.js styles.css icon48.png icon96.png
```

## Installation Methods

### Method 1: Temporary (Development)
**Best for:** Testing and development

1. Open Firefox
2. Go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on..."
4. Select `manifest.json`
5. ✅ Extension loads (until Firefox closes)

**Pros:**
- Instant installation
- Easy to update
- No signing required

**Cons:**
- Removed when Firefox closes
- Must reload each time

### Method 2: Developer Edition
**Best for:** Long-term development

1. Install [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/)
2. Same process as Method 1
3. Extensions persist across sessions

**Pros:**
- Extensions persist
- Better dev tools
- No signing needed

**Cons:**
- Requires separate Firefox installation

### Method 3: Self-Distribution (Unsigned)
**Best for:** Personal use on your own computer

1. Type `about:config` in Firefox
2. Search for `xpinstall.signatures.required`
3. Set to `false`
4. Go to `about:addons`
5. Click gear icon > "Install Add-on From File"
6. Select your ZIP file

**⚠️ Warning:** This reduces security. Only recommended for personal use.

### Method 4: Official Distribution (Signed)
**Best for:** Public distribution

1. Create account at https://addons.mozilla.org
2. Go to https://addons.mozilla.org/developers/
3. Click "Submit a New Add-on"
4. Upload your ZIP file
5. Fill out listing information
6. Submit for review

**Review Process:**
- Can take a few days to several weeks
- Mozilla reviewers check code for security
- Once approved, anyone can install it
- Automatic updates supported

## Testing Checklist

Before deploying, test these scenarios:

### ✅ Basic Functionality
- [ ] Extension loads without errors
- [ ] Console shows "PassMark Score Display Extension loaded"
- [ ] Badges appear on test-page.html
- [ ] Badges appear on leboncoin.fr search results

### ✅ CPU Detection
- [ ] AMD Ryzen CPUs detected (5900X, 5600, etc.)
- [ ] Intel CPUs detected (i9-12900K, i7-11700K, etc.)
- [ ] Single-core scores display
- [ ] Multi-core scores display
- [ ] Scores are formatted correctly (with spaces)

### ✅ GPU Detection
- [ ] NVIDIA GPUs detected (RTX 3080, GTX 1080, etc.)
- [ ] AMD GPUs detected (RX 6800 XT, RX 580, etc.)
- [ ] GPU scores display
- [ ] Scores are formatted correctly

### ✅ Edge Cases
- [ ] No badges on non-hardware items
- [ ] Works with dynamic content loading
- [ ] Works when scrolling through many listings
- [ ] Doesn't break page layout
- [ ] Doesn't conflict with leboncoin's scripts

### ✅ Performance
- [ ] Page loads quickly
- [ ] No noticeable lag
- [ ] Console has no errors
- [ ] Memory usage is reasonable

## Updating the Extension

### For Development (Temporary Install)
1. Make your changes
2. Go to `about:debugging`
3. Click "Reload" button next to your extension
4. Changes take effect immediately

### For Signed Extension
1. Update version in `manifest.json`
2. Create new ZIP file
3. Upload to addons.mozilla.org
4. Users get automatic update

## Distribution Options

### Option A: Direct Download
- Host ZIP file on your website
- Users download and install manually
- Requires unsigned installation or signing

### Option B: Mozilla Add-ons (AMO)
- Official Firefox add-on store
- Automatic updates
- Discoverable by users
- Requires review process

### Option C: GitHub Releases
- Host on GitHub
- Version control
- Easy for developers
- Can use GitHub Actions for automation

## Version Management

Update version numbers in `manifest.json`:

```json
{
  "version": "1.0",    // Current: 1.0
  "version": "1.1",    // Bug fixes
  "version": "1.2",    // Minor features
  "version": "2.0"     // Major changes
}
```

## Troubleshooting Deployment

### "Could not load manifest"
- Check JSON syntax in manifest.json
- Ensure all required fields are present
- Validate JSON at https://jsonlint.com

### "Extension could not be installed"
- Check file permissions
- Ensure all referenced files exist
- Try creating ZIP from scratch

### "Signature verification failed"
- Use temporary install for testing
- Or disable signature requirement
- Or get extension signed by Mozilla

## Resources

- **Firefox Extension Workshop:** https://extensionworkshop.com/
- **WebExtensions API:** https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions
- **Submit Add-on:** https://addons.mozilla.org/developers/
- **Manifest.json Reference:** https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json

## Support

Need help? Check:
1. Browser console (F12) for errors
2. Firefox extension documentation
3. Mozilla developer forums
4. Stack Overflow (tag: firefox-addon)

---

**Good luck with your deployment! 🚀**
