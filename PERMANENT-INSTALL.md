# 🚀 PERMANENT INSTALLATION GUIDE

## ✨ Best Solution: Firefox Developer Edition

**This is the easiest way to make your extension permanent!**

### Why Firefox Developer Edition?
- ✅ **Truly Permanent** - Extensions persist across browser restarts
- ✅ **No Signing Required** - Load unsigned extensions easily
- ✅ **Free** - Same as regular Firefox, just for developers
- ✅ **Better Tools** - Enhanced developer console and debugging
- ✅ **Side-by-side** - Can run alongside regular Firefox

---

## 📥 Step-by-Step Installation

### Step 1: Download Firefox Developer Edition

1. Visit: https://www.mozilla.org/firefox/developer/
2. Click **"Download Firefox Developer Edition"**
3. Install (it won't replace your regular Firefox)
4. Launch Firefox Developer Edition

### Step 2: Load Your Extension

1. In Firefox Developer Edition, type in the address bar:
   ```
   about:debugging#/runtime/this-firefox
   ```

2. Click the **"Load Temporary Add-on..."** button

3. Navigate to your extension folder:
   ```
   c:\Users\youpa\Documents\dev\test extension passmark\
   ```

4. Select the file: **`manifest.json`**

5. Click **"Open"**

### Step 3: Verify It's Working

1. You should see your extension listed with:
   - Name: "PassMark Score Display for Leboncoin"
   - Version: 1.0
   - Status: Enabled

2. Check the browser console (F12) - you may see initialization messages

3. Visit: https://www.leboncoin.fr

4. Search for: "ryzen 5900x" or "rtx 3080"

5. **Scores should appear below hardware titles!** 🎉

### Step 4: Enjoy!

✅ **Your extension is now permanently installed!**
- It will stay active when you close and reopen Firefox Developer Edition
- It won't disappear like in regular Firefox
- You can use it every day

---

## 🔄 Updating the Extension

When you make changes to the code:

1. Go back to `about:debugging#/runtime/this-firefox`
2. Find your extension
3. Click the **"Reload"** button
4. Changes take effect immediately!

---

## 🆚 Comparison: Regular Firefox vs Developer Edition

| Feature | Regular Firefox | Firefox Developer Edition |
|---------|----------------|--------------------------|
| Extension Persistence | ❌ Removed on close | ✅ Stays permanently |
| Signature Required | ✅ Yes (for permanent) | ❌ No |
| Developer Tools | Good | Excellent |
| Can Install Both | ✅ Yes | ✅ Yes |
| Free | ✅ Yes | ✅ Yes |
| Best For | Daily browsing | Extension development |

---

## 🎯 Alternative Methods (If You Must Use Regular Firefox)

### Method A: Get Mozilla to Sign Your Extension

**For public distribution or regular Firefox:**

1. **Create a ZIP package:**
   ```powershell
   # Open PowerShell in your extension folder
   Compress-Archive -Path manifest.json,content.js,styles.css,icon48.png,icon96.png -DestinationPath passmark-extension.zip -Force
   ```

2. **Submit to Mozilla Add-ons:**
   - Go to: https://addons.mozilla.org/developers/
   - Create an account
   - Click "Submit a New Add-on"
   - Upload your ZIP file
   - Fill in required information
   - Submit for review

3. **Wait for approval:**
   - Usually takes 3-7 days
   - Mozilla reviews code for security
   - You'll receive a signed `.xpi` file

4. **Install the signed extension:**
   - Download the signed `.xpi` file
   - Drag and drop into Firefox
   - ✅ Permanently installed!

**Pros:**
- Works in any Firefox
- Can share with others
- Official and secure
- Automatic updates

**Cons:**
- Takes several days
- Must follow Mozilla guidelines
- Review process can reject changes

### Method B: Disable Signature Verification (⚠️ Not Recommended)

**Use only for personal testing - reduces security:**

1. Open regular Firefox
2. Type in address bar: `about:config`
3. Accept the warning
4. Search for: `xpinstall.signatures.required`
5. Double-click to change value to: `false`
6. Create ZIP of extension files:
   ```powershell
   Compress-Archive -Path manifest.json,content.js,styles.css,icon48.png,icon96.png -DestinationPath passmark-extension.zip -Force
   ```
7. Go to: `about:addons`
8. Click gear icon (⚙️)
9. Select "Install Add-on From File"
10. Choose your ZIP file

**⚠️ Warning:**
- Reduces browser security
- Makes you vulnerable to malicious extensions
- Only recommended for personal development
- Not suitable for production use

---

## 📦 Quick Reference Card

### Recommended: Firefox Developer Edition
```
1. Download: https://www.mozilla.org/firefox/developer/
2. Load: about:debugging → Load Temporary Add-on → manifest.json
3. Done: Extension stays forever! ✅
```

### For Sharing: Mozilla Add-ons
```
1. ZIP: Compress all extension files
2. Submit: https://addons.mozilla.org/developers/
3. Wait: 3-7 days for review
4. Install: Drag signed .xpi to Firefox
```

### For Testing Only: Disable Signatures
```
1. Config: about:config → xpinstall.signatures.required → false
2. ZIP: Create extension package
3. Install: about:addons → Install Add-on From File
⚠️ Security risk - not recommended
```

---

## 🎓 Recommended Workflow

**For Personal Use:**
1. ✅ Use Firefox Developer Edition
2. ✅ Load extension via about:debugging
3. ✅ Enjoy permanent installation
4. ✅ Easy to update and test

**For Sharing with Friends:**
1. ✅ Get it signed by Mozilla
2. ✅ Share the signed .xpi file
3. ✅ They drag-and-drop to install
4. ✅ Everyone gets automatic updates

**For Production/Public:**
1. ✅ Submit to Mozilla Add-ons
2. ✅ List on official store
3. ✅ Users can discover and install
4. ✅ Full Firefox integration

---

## ❓ FAQ

**Q: Will Developer Edition replace my regular Firefox?**
A: No! They install side-by-side. You can use both.

**Q: Can I use my regular Firefox profile?**
A: Yes, but they have separate profiles by default. You can sync via Firefox Account.

**Q: Does Developer Edition get the same updates?**
A: Yes! It's just Firefox with extra developer tools.

**Q: Is this legal?**
A: Absolutely! Mozilla provides Developer Edition specifically for this purpose.

**Q: Will my extension work in regular Firefox too?**
A: Yes, but you'll need to get it signed by Mozilla for permanent installation.

**Q: Can I develop extensions for Chrome with this?**
A: No, Chrome uses Manifest V3. This is Firefox (Manifest V2) only.

---

## 🚀 Ready to Install?

### Quick Start:
1. Download Firefox Developer Edition: https://www.mozilla.org/firefox/developer/
2. Launch it
3. Go to: `about:debugging#/runtime/this-firefox`
4. Click: "Load Temporary Add-on..."
5. Select: `manifest.json`
6. Test on: https://www.leboncoin.fr

**That's it! Your extension is now permanent! 🎉**

---

## 📞 Need Help?

If you encounter issues:
1. Check if you're using Firefox Developer Edition (not regular Firefox)
2. Verify all files are present in the extension folder
3. Check browser console (F12) for errors
4. Try reloading the extension
5. Restart Firefox Developer Edition

**Still stuck?** Check the other documentation files:
- `README.md` - Full documentation
- `QUICKSTART.md` - Quick installation guide
- `BUILD-COMPLETE.md` - Complete build overview

---

**Enjoy your permanent PassMark extension! 🎊**
