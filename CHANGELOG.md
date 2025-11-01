# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-11-01

### Changed
- **Project Structure**: Reorganized files into logical directories
  - `docs/` - All documentation files
  - `tools/` - Development and testing tools
  - `icons/` - Extension icons (PNG and SVG)
- **README.md**: Completely rewritten with cleaner structure and better navigation
- **manifest.json**: Updated icon paths to reference new `icons/` directory

### Removed
- Redundant `index.html` landing page
- Test data files (leboncoin HTML snapshots)

### Improved
- Documentation accessibility and organization
- Project navigation for contributors
- File structure follows best practices

## [1.0.0] - 2025-11-01

### Added
- Initial release of PassMark Score Display for Leboncoin
- Automatic hardware detection for 60+ CPU and GPU models
- CPU performance scores (single-core and multi-core)
- GPU benchmark scores
- Support for AMD Ryzen CPUs (7000, 5000, 3000, 2000, 1000 series)
- Support for Intel Core CPUs (13th, 12th, 11th, 10th, 9th gen)
- Support for NVIDIA GPUs (RTX 40/30/20, GTX 16/10)
- Support for AMD Radeon GPUs (RX 7000, 6000, 5000)
- Beautiful gradient-styled score badges
- Privacy-focused design (no tracking, no external API calls)
- Zero configuration required
- Comprehensive documentation
  - QUICKSTART.md - Fast installation guide
  - PERMANENT-INSTALL.md - Firefox Developer Edition guide
  - DEPLOYMENT.md - Distribution guide
  - PUBLISHING.md - GitHub & Mozilla submission
  - CONTRIBUTING.md - Contribution guidelines
- Development tools
  - test-page.html - Local testing page
  - check-installation.html - Installation validator
  - icon-converter.html - PNG icon generator
  - setup.bat - Windows automation script
- MIT License
- Full GitHub repository with 22+ commits

### Technical Details
- Manifest V2 for Firefox compatibility
- MutationObserver for dynamic content detection
- Hardcoded PassMark scores for privacy
- CSS3 gradients and animations
- Runs only on leboncoin.fr domain

---

## How to Update

### For Users
1. Download the latest release from GitHub
2. Load via `about:debugging` in Firefox Developer Edition
3. Extension will update automatically

### For Developers
```bash
git pull origin master
# Load updated manifest.json in about:debugging
```

---

## Version History Summary

- **v1.1.0** - Project cleanup and reorganization
- **v1.0.0** - Initial release with core features

---

## Future Plans

See [README.md](README.md#-roadmap) for upcoming features and improvements.
