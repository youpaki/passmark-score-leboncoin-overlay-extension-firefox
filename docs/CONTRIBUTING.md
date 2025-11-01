# Contributing to PassMark Score Leboncoin Overlay Extension

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## 🎯 How Can You Contribute?

### 1. Report Bugs 🐛
Found a bug? Please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Firefox version
- Extension version
- Console errors (if any)

### 2. Suggest Features 💡
Have an idea? Create an issue with:
- Feature description
- Use case/benefit
- Potential implementation approach

### 3. Add Hardware Models 🖥️
The easiest way to contribute! Add more CPUs and GPUs:

**Steps:**
1. Fork the repository
2. Edit `content.js`
3. Add entries to `HARDWARE_DATABASE`:

```javascript
// For CPUs:
'cpu model name': { type: 'cpu', single: XXXX, multi: YYYY },

// For GPUs:
'gpu model name': { type: 'gpu', score: XXXX },
```

4. Find scores at:
   - CPUs: https://www.cpubenchmark.net/
   - GPUs: https://www.videocardbenchmark.net/

5. Test on leboncoin.fr
6. Submit a Pull Request

### 4. Improve Code 🔧
Want to improve the code? Great!

**Code Style:**
- Use clear, descriptive variable names
- Add comments for complex logic
- Keep functions small and focused
- Follow existing code patterns

**Testing:**
- Test on `test-page.html` first
- Verify on actual leboncoin.fr listings
- Check browser console for errors
- Ensure no performance issues

### 5. Improve Documentation 📚
Documentation improvements are always welcome:
- Fix typos
- Add examples
- Clarify instructions
- Translate to other languages

## 🔄 Pull Request Process

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/yourusername/passmark-score-leboncoin-overlay-extension-firefox.git
   ```
3. **Create** a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make** your changes
5. **Test** thoroughly
6. **Commit** with clear messages:
   ```bash
   git commit -m "Add support for RTX 4070 Super"
   ```
7. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Create** a Pull Request on GitHub

## ✅ Pull Request Checklist

Before submitting, ensure:
- [ ] Code follows existing style
- [ ] Extension loads without errors
- [ ] Tested on leboncoin.fr
- [ ] No console errors
- [ ] Documentation updated (if needed)
- [ ] Commit messages are clear
- [ ] No unrelated changes included

## 🎨 Adding New Features

For new features:

1. **Discuss First**: Open an issue to discuss your idea
2. **Plan**: Outline your approach
3. **Implement**: Write clean, tested code
4. **Document**: Update relevant documentation
5. **Test**: Ensure everything works
6. **Submit**: Create a Pull Request

## 📝 Commit Message Guidelines

Good commit messages help everyone understand changes:

**Format:**
```
<type>: <description>

[optional body]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting)
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

**Examples:**
```
feat: Add support for Intel 14th gen CPUs

fix: Badge positioning on mobile view

docs: Update installation instructions for Firefox 120+
```

## 🧪 Testing Guidelines

### Local Testing

1. **Load extension:**
   ```
   about:debugging → Load manifest.json
   ```

2. **Test on test page:**
   ```
   Open test-page.html in Firefox
   Verify badges appear correctly
   ```

3. **Test on leboncoin:**
   ```
   Visit leboncoin.fr
   Search for hardware
   Verify scores display properly
   ```

4. **Check console:**
   ```
   F12 → Console
   Look for errors or warnings
   ```

### What to Test

- ✅ Hardware detection works
- ✅ Badges display correctly
- ✅ Scores are accurate
- ✅ No JavaScript errors
- ✅ Page layout unaffected
- ✅ Works with dynamic content
- ✅ No performance issues

## 🚫 What NOT to Do

- ❌ Don't commit test data files
- ❌ Don't include personal information
- ❌ Don't add tracking/analytics code
- ❌ Don't modify license terms
- ❌ Don't add external dependencies without discussion
- ❌ Don't submit unrelated changes in same PR

## 📊 Hardware Data Guidelines

When adding hardware:

### Accuracy
- Use official PassMark scores
- Verify model names match leboncoin listings
- Include common variations (e.g., "RTX 3080" vs "3080")

### Normalization
- Use lowercase
- Remove manufacturer names (AMD, Intel, NVIDIA)
- Remove redundant words (GeForce, Radeon)
- Example: "NVIDIA GeForce RTX 3080" → "rtx 3080"

### Sources
Only use scores from:
- https://www.cpubenchmark.net/
- https://www.videocardbenchmark.net/

## 🌍 Internationalization

Currently supports French (leboncoin.fr). To add other languages/sites:

1. Discuss in an issue first
2. Add new content script patterns in manifest.json
3. Update selectors for target site
4. Test thoroughly
5. Update documentation

## 💬 Communication

- **Issues**: For bugs, features, questions
- **Pull Requests**: For code contributions
- **Discussions**: For general chat (if enabled)

Be respectful, constructive, and helpful!

## 🏆 Recognition

Contributors will be:
- Listed in release notes
- Mentioned in README (if significant contribution)
- Forever appreciated! 🙏

## 📜 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Accept constructive criticism
- Focus on what's best for the project
- Show empathy toward others

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Personal attacks
- Publishing others' private information

## ❓ Questions?

Not sure about something? Just ask!

- Open an issue with your question
- We're here to help
- No question is too small

## 🙏 Thank You!

Every contribution helps make this extension better for everyone. Whether it's:
- A typo fix
- A new feature
- A bug report
- A hardware model

**Your contribution matters!** Thank you for being part of this project! 🎉

---

**Happy Contributing!** 🚀
