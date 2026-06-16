# Contributing to Doctor Appointment Booking System

First off, thank you for considering contributing to the Doctor Appointment Booking System! 🎉

It's people like you that make this project better for everyone. We welcome contributions from developers of all skill levels.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Documentation](#documentation)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

- **Be Respectful**: Treat everyone with respect and kindness
- **Be Collaborative**: Work together and help each other
- **Be Professional**: Keep discussions focused and constructive
- **Be Inclusive**: Welcome newcomers and diverse perspectives

## 🤝 How Can I Contribute?

There are many ways to contribute to this project:

### 1. Report Bugs 🐛
Found a bug? Please create an issue with detailed information.

### 2. Suggest Features 💡
Have an idea? Open an issue to discuss it with the community.

### 3. Improve Documentation 📚
Help make our docs better, clearer, and more comprehensive.

### 4. Write Code 💻
Fix bugs, add features, or improve existing functionality.

### 5. Review Pull Requests 👀
Help review and test pull requests from other contributors.

### 6. Improve Design 🎨
Enhance the UI/UX with better designs and interactions.

## 🚀 Getting Started

### Prerequisites

- Git installed on your machine
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Fork and Clone

1. **Fork the repository** on GitHub
   - Click the "Fork" button at the top right of the repository page

2. **Clone your fork** to your local machine
   ```bash
   git clone https://github.com/YOUR_USERNAME/doctor-appointment-booking.git
   cd doctor-appointment-booking
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/echompz/doctor-appointment-booking.git
   ```

4. **Verify remotes**
   ```bash
   git remote -v
   # origin    https://github.com/YOUR_USERNAME/doctor-appointment-booking.git (fetch)
   # origin    https://github.com/YOUR_USERNAME/doctor-appointment-booking.git (push)
   # upstream  https://github.com/echompz/doctor-appointment-booking.git (fetch)
   # upstream  https://github.com/echompz/doctor-appointment-booking.git (push)
   ```

### Running Locally

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## 🔄 Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a new branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/add-dark-mode`)
- `fix/` - Bug fixes (e.g., `fix/validation-error`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/improve-validation`)
- `style/` - UI/CSS changes (e.g., `style/improve-mobile-layout`)
- `test/` - Adding tests (e.g., `test/add-form-validation-tests`)

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Test your changes thoroughly
- Update documentation if needed

### 3. Test Your Changes

Before submitting, ensure:

- ✅ The application runs without errors
- ✅ All existing features still work
- ✅ Your new feature/fix works as expected
- ✅ The UI is responsive on different screen sizes
- ✅ Form validation works correctly
- ✅ LocalStorage operations work properly

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add dark mode toggle"
```

See [Commit Guidelines](#commit-guidelines) for commit message format.

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill in the PR template with details
5. Submit the pull request

## 📝 Coding Standards

### HTML

- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Add meaningful `id` and `class` names
- Include appropriate ARIA labels for accessibility
- Keep markup clean and organized

```html
<!-- Good -->
<section class="appointments-container">
  <h2>Your Appointments</h2>
  <div id="appointmentsList"></div>
</section>

<!-- Avoid -->
<div class="container1">
  <div class="title">Your Appointments</div>
  <div id="list"></div>
</div>
```

### CSS

- Use meaningful class names (BEM methodology preferred)
- Group related styles together
- Add comments for complex styles
- Maintain consistent spacing (2 spaces)
- Use CSS variables for repeated values
- Mobile-first responsive design

```css
/* Good */
.appointment-card {
  background: #f8f9fa;
  border-left: 4px solid #667eea;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
}

.appointment-card:hover {
  transform: translateX(5px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}
```

### JavaScript

- Use ES6+ features (const/let, arrow functions, template literals)
- Write descriptive variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Handle errors gracefully
- Use consistent formatting (2 spaces)

```javascript
// Good
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return 'Email is required';
  }
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
}

// Avoid
function validate(e) {
  if(!e) return 'required';
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return 'invalid';
  return '';
}
```

## 📋 Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
# Feature
git commit -m "feat: add appointment cancellation feature"

# Bug fix
git commit -m "fix: resolve phone number validation issue"

# Documentation
git commit -m "docs: update installation instructions"

# Style
git commit -m "style: improve mobile responsiveness"

# Refactor
git commit -m "refactor: simplify validation logic"
```

### Detailed Commit Message

```
feat(appointments): add ability to edit appointments

- Add edit button to appointment cards
- Create edit form modal
- Update localStorage on edit
- Add validation for edited data

Closes #123
```

## 🔍 Pull Request Process

### Before Submitting

- [ ] Code follows the project's coding standards
- [ ] All tests pass (if applicable)
- [ ] Documentation is updated
- [ ] Commit messages follow guidelines
- [ ] Branch is up to date with main

### PR Title Format

Use the same format as commit messages:

```
feat: add dark mode toggle
fix: resolve date picker issue on mobile
docs: improve contributing guidelines
```

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement

## Changes Made
- List of changes
- Another change
- One more change

## Screenshots (if applicable)
Add screenshots for UI changes

## Testing
Describe how you tested your changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tested on multiple browsers
```

### Review Process

1. **Automated Checks**: Ensure all checks pass
2. **Code Review**: Wait for maintainer review
3. **Address Feedback**: Make requested changes
4. **Approval**: Get approval from maintainers
5. **Merge**: Maintainer will merge your PR

## 🐛 Reporting Bugs

### Before Submitting a Bug Report

- Check existing issues to avoid duplicates
- Test with the latest version
- Collect relevant information

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Device: [e.g., Desktop, iPhone 12]

**Additional context**
Any other relevant information.
```

## 💡 Suggesting Enhancements

### Enhancement Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Any other relevant information, mockups, or examples.
```

## 📚 Documentation

### Improving Documentation

Documentation improvements are always welcome:

- Fix typos and grammatical errors
- Clarify confusing sections
- Add examples and use cases
- Improve code comments
- Update outdated information
- Add missing documentation

### Documentation Style

- Use clear, concise language
- Include code examples where helpful
- Add screenshots for visual features
- Keep formatting consistent
- Use proper markdown syntax

## 🎯 Areas for Contribution

Looking for where to start? Here are some areas that need help:

### High Priority
- [ ] Backend integration
- [ ] Email notification system
- [ ] Appointment cancellation feature
- [ ] User authentication

### Medium Priority
- [ ] Dark mode implementation
- [ ] Calendar integration
- [ ] Export to PDF/CSV
- [ ] Multi-language support

### Low Priority
- [ ] Additional doctor specialties
- [ ] Custom time slot configuration
- [ ] Appointment reminders
- [ ] Advanced search/filter

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## 📞 Getting Help

Need help? Here's how to reach us:

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Email**: For private concerns

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to the Doctor Appointment Booking System! 🙏

**Happy Coding! 💻✨**