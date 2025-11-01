# 📤 Publishing to GitHub

This guide will help you publish this extension to GitHub.

## 🎯 Prerequisites

1. **GitHub Account**: Create one at https://github.com/join
2. **Git Installed**: Already done! ✅
3. **Repository Ready**: All commits are done! ✅

## 🚀 Publishing Steps

### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Fill in the details:
   - **Repository name**: `passmark-score-leboncoin-overlay-extension-firefox`
   - **Description**: `Firefox extension that displays PassMark benchmark scores on leboncoin listings`
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (we already have one)
   - **DO NOT** add .gitignore (we already have one)
   - **DO NOT** add license (we already have one)

3. Click "Create repository"

### Step 2: Connect Local Repository to GitHub

Copy the commands from GitHub's "…or push an existing repository" section, or use these:

```bash
# Navigate to your project folder
cd "c:\Users\youpa\Documents\dev\test extension passmark"

# Add GitHub as remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/passmark-score-leboncoin-overlay-extension-firefox.git

# Rename branch to main (optional, GitHub default)
git branch -M main

# Push all commits to GitHub
git push -u origin main
```

### Step 3: Verify Upload

1. Refresh your GitHub repository page
2. You should see all files and commits
3. README.md will display automatically

## 🎨 Enhance Your Repository

### Add Topics

On your GitHub repo page:
1. Click "⚙️ Settings"
2. Scroll to "Topics"
3. Add: `firefox-extension`, `passmark`, `leboncoin`, `benchmark`, `hardware`, `cpu`, `gpu`, `webextension`

### Add Description

On your GitHub repo page:
1. Click "⚙️" next to "About"
2. Add description: "Firefox extension that displays PassMark benchmark scores on leboncoin listings"
3. Add website (if you have one)
4. Check "Releases" and "Packages"
5. Save

### Add a Banner Image

Create a nice banner for your README:
1. Design a 1200x600px image with your extension logo
2. Upload to GitHub repository as `banner.png`
3. Update README.md:
   ```markdown
   ![Extension Banner](banner.png)
   ```

## 🏷️ Create Your First Release

### Step 1: Tag the Release

```bash
cd "c:\Users\youpa\Documents\dev\test extension passmark"

# Create a tag for version 1.0
git tag -a v1.0 -m "Version 1.0 - Initial release"

# Push the tag to GitHub
git push origin v1.0
```

### Step 2: Create Release on GitHub

1. Go to your repository on GitHub
2. Click "Releases" (right sidebar)
3. Click "Draft a new release"
4. Fill in:
   - **Tag**: v1.0
   - **Title**: Version 1.0 - Initial Release
   - **Description**:
     ```markdown
     ## 🎉 First Release!

     ### Features
     - ⚡ Single-core and multi-core CPU scores
     - 🎮 GPU graphics scores
     - 🔍 Automatic hardware detection
     - 🎨 Clean, colorful badges
     - 🔒 Privacy-focused (no tracking)
     - 🖥️ 60+ hardware models supported

     ### Supported Hardware
     - AMD Ryzen CPUs (7000, 5000, 3000, 2000, 1000 series)
     - Intel Core CPUs (13th, 12th, 11th, 10th gen)
     - NVIDIA GPUs (RTX 40/30/20, GTX 16/10)
     - AMD Radeon GPUs (RX 7000, 6000, 5000)

     ### Installation
     1. Download Firefox Developer Edition
     2. Load extension via about:debugging
     3. See [PERMANENT-INSTALL.md](PERMANENT-INSTALL.md) for details

     ### Files
     - Download the repository ZIP or clone it
     - Follow [QUICKSTART.md](QUICKSTART.md) for installation
     ```

5. Attach files (optional):
   - You can create a ZIP of the extension files
   - `manifest.json`, `content.js`, `styles.css`, `icon48.png`, `icon96.png`

6. Click "Publish release"

## 📦 Create Distribution Package

Create a clean ZIP for users to download:

```powershell
# In PowerShell, from project folder:
Compress-Archive -Path manifest.json,content.js,styles.css,icon48.png,icon96.png,README.md,LICENSE -DestinationPath passmark-extension-v1.0.zip -Force
```

Upload this ZIP to your GitHub release.

## 🌐 Submit to Mozilla Add-ons (Optional)

For official distribution:

1. **Create Account**: https://addons.mozilla.org/developers/
2. **Submit Add-on**:
   - Go to https://addons.mozilla.org/developers/addon/submit/
   - Upload your ZIP file
   - Fill in listing information
   - Submit for review

3. **Review Process**:
   - Takes 3-7 days
   - Mozilla checks for security issues
   - You'll get approval or feedback

4. **After Approval**:
   - Users can install from official store
   - Automatic updates work
   - Better visibility

## 📊 Track Your Repository

### Enable GitHub Features

1. **Discussions**: For community chat
2. **Wiki**: For extended documentation
3. **Projects**: For roadmap tracking
4. **Insights**: To see contributor activity

### Add Shields/Badges

Already added to README:
- License badge
- Firefox badge
- Version badge

Consider adding:
- Download count (after Mozilla submission)
- Build status (if you add CI/CD)
- Coverage (if you add tests)

## 🤝 Promote Your Extension

### Share On:
- Reddit: r/firefox, r/webextensions
- Twitter/X: #Firefox #WebExtension
- Dev.to: Write a blog post
- Hacker News: Show HN
- ProductHunt: Launch your product

### Write About It:
- Blog post: "How I Built a Firefox Extension"
- Tutorial: "Building Your First Firefox Extension"
- Case study: "Improving Hardware Shopping with Web Extensions"

## 📈 Maintain Your Repository

### Regular Updates:
```bash
# Make changes
git add .
git commit -m "feat: Add Intel 14th gen CPUs"
git push

# Create new release
git tag -a v1.1 -m "Version 1.1 - More CPUs"
git push origin v1.1
```

### Respond to Issues:
- Check GitHub issues regularly
- Be helpful and responsive
- Thank contributors

### Accept Pull Requests:
- Review code carefully
- Test changes
- Merge and thank contributor
- Add to release notes

## ✅ Checklist Before Publishing

- [x] All code committed
- [x] README.md is complete
- [x] LICENSE added
- [x] CONTRIBUTING.md added
- [x] .gitignore configured
- [x] Documentation is clear
- [x] Test page included
- [x] Icons are included
- [ ] GitHub repository created
- [ ] Remote origin configured
- [ ] Code pushed to GitHub
- [ ] First release published
- [ ] Topics added
- [ ] Description added

## 🎉 You're Ready!

Your extension is:
- ✅ Fully functional
- ✅ Well documented
- ✅ Ready for GitHub
- ✅ Ready for users
- ✅ Ready for contributors

**Time to share it with the world!** 🌍

---

## 🔗 Quick Commands Reference

```bash
# Push to GitHub (first time)
git remote add origin https://github.com/YOUR_USERNAME/passmark-score-leboncoin-overlay-extension-firefox.git
git branch -M main
git push -u origin main

# Create release
git tag -a v1.0 -m "Version 1.0"
git push origin v1.0

# Update repository
git add .
git commit -m "Your commit message"
git push

# Create distribution ZIP
Compress-Archive -Path manifest.json,content.js,styles.css,icon48.png,icon96.png,README.md,LICENSE -DestinationPath passmark-extension-v1.0.zip -Force
```

---

**Good luck with your launch! 🚀**
