# 🚀 Quick Start Guide - PassMark Extension

## Step 1: Generate PNG Icons

You have two options:

### Option A: Use the Icon Converter (Recommended)
1. Open `icon-converter.html` in your browser
2. Click the "Download" buttons to save both icons
3. Done! The icons are ready

### Option B: Use Online Converter
1. Go to https://cloudconvert.com/svg-to-png
2. Upload `icon48.svg` and convert to PNG
3. Upload `icon96.svg` and convert to PNG
4. Download and save them in the extension folder

### Option C: Skip Icons (Temporary)
Firefox will use default icons if PNGs are missing. The extension will still work!

## Step 2: Install in Firefox

### Option A: Firefox Developer Edition (RECOMMENDED - Permanent)
1. Download [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/)
2. Install and open it
3. Type `about:debugging#/runtime/this-firefox` in the address bar
4. Click "Load Temporary Add-on..."
5. Navigate to the extension folder
6. Select `manifest.json`
7. ✅ Extension stays active permanently!

**Best choice:** Developer Edition keeps extensions across restarts.

### Option B: Regular Firefox (Temporary - Resets on Close)
1. Open regular Firefox
2. Type `about:debugging#/runtime/this-firefox` in the address bar
3. Click "Load Temporary Add-on..."
4. Navigate to the extension folder
5. Select `manifest.json`
6. ⚠️ Extension removed when Firefox closes

## Step 3: Test the Extension

### Test Locally
1. Open `test-page.html` in Firefox
2. You should see PassMark scores appear below hardware titles
3. Check the browser console (F12) for debug messages

### Test on Leboncoin
1. Go to https://www.leboncoin.fr
2. Search for: `ryzen 5900x` or `rtx 3080`
3. Scroll through the results
4. PassMark scores should appear on compatible listings

## What to Expect

### For CPUs (like Ryzen 9 5900X)
```
Ryzen 9 5900x
⚡ Single: 3,449   🔥 Multi: 39,482
150 €
```

### For GPUs (like RTX 3080)
```
RTX 3080
🎮 GPU Score: 22,701
500 €
```

## Troubleshooting

### Icons Not Showing in Browser?
- Don't worry! The extension works without custom icons
- Firefox will use default extension icons

### Scores Not Appearing?
1. Open browser console (F12)
2. Look for "PassMark Score Display Extension loaded"
3. Look for "Found hardware: ..." messages
4. If you see these, the extension is working!

### Still Not Working?
1. Make sure you're on leboncoin.fr (or test-page.html)
2. Refresh the page
3. Check if extension is enabled in `about:addons`
4. Try removing and reinstalling the extension

## Making It Permanent

### 🌟 Best Option: Firefox Developer Edition (Recommended)
**Extensions persist across restarts automatically!**

1. Download: [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/)
2. Install and launch it
3. Load extension via `about:debugging` (as shown above)
4. ✅ Extension remains active permanently
5. No signing required!
6. Better developer tools included

**This is the easiest way for permanent installation.**

### Option 2: Get Mozilla to Sign It (For Public Distribution)
1. Create account at https://addons.mozilla.org
2. Submit your extension for review
3. Mozilla will sign it (takes a few days)
4. Install the signed `.xpi` file
5. ✅ Works in regular Firefox permanently

### Option 3: Disable Signature Check (Not Recommended - Security Risk)
1. Type `about:config` in address bar
2. Search `xpinstall.signatures.required`
3. Set to `false`
4. Create ZIP of extension files
5. Install via `about:addons` → gear icon → "Install Add-on From File"
6. ⚠️ This reduces browser security - only for testing!

## Quick Commands

**Load Extension:**
```
about:debugging#/runtime/this-firefox
```

**View Extensions:**
```
about:addons
```

**Browser Console:**
Press `F12` or `Ctrl+Shift+J`

## File Checklist

Before installing, make sure you have:
- ✅ `manifest.json` - Extension config
- ✅ `content.js` - Main script
- ✅ `styles.css` - Badge styles
- ⚠️ `icon48.png` - Small icon (optional but recommended)
- ⚠️ `icon96.png` - Large icon (optional but recommended)

## Support

If you encounter issues:
1. Check the browser console for errors
2. Read the README.md for more details
3. Verify you're using Firefox (not Chrome/Edge)
4. Make sure you're on a leboncoin.fr page

## Next Steps

Once installed and tested:
1. ⭐ Star the project if you find it useful
2. 🐛 Report bugs or issues
3. 💡 Suggest new hardware to add
4. 🔧 Contribute improvements

---

**Enjoy faster hardware research on leboncoin! 🎉**
