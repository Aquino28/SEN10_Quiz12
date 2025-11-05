# 🧩 Software Configuration Management — Static Site CI/CD Demo

This project demonstrates **Software Configuration Management (SCM)** concepts using a static HTML/CSS/JS website integrated with **GitHub Actions**, **ESLint**, and **Jest** for automated quality checks and deployment to **GitHub Pages**.

---

## 🚀 Project Overview

The static site analyzes an example of an **"ugly UI"** (from [couponssandiego.com](https://couponssandiego.com/)) and provides recommendations for improving it.  
Before accessing the site, users encounter a **fun interactive “Runaway Button”** that moves around the screen before revealing the main content — a simple JavaScript animation demonstrating event handling and DOM manipulation.

---

## 🧠 Features

- **Static Website (HTML/CSS/JS)**
  - Screenshot of the selected bad UI
  - Analysis and suggested improvements
  - Smooth animated JavaScript “Runaway Button” before content reveal

- **Automated Linting**
  - Uses **ESLint v9** to ensure consistent JavaScript syntax and best practices
  - Fails the build when a lint rule (e.g., missing semicolon) is violated

- **Automated Testing**
  - Uses **Jest** to test a simple `sum()` function
  - Demonstrates both a **failing** and **passing** test scenario

- **CI/CD Pipeline**
  - Managed via **GitHub Actions**
  - Automatically runs:
    1. ESLint check  
    2. Jest tests  
    3. Builds and deploys the site to GitHub Pages (only if both checks pass)

---

## ⚙️ Continuous Integration Workflow

**File:** `.github/workflows/deploy.yml`

### Jobs:
| Job | Description |
|------|-------------|
| 🧹 `lint` | Runs ESLint across all `.js` files |
| 🧪 `test` | Executes Jest unit tests |
| 🏗️ `build` | Prepares the static site as an artifact |
| 🚀 `deploy` | Publishes the site to GitHub Pages (only if all previous jobs pass) |

### Deployment Flow:
main branch push
↓
ESLint check
↓
Jest test
↓
Build + Upload artifact
↓
Deploy to GitHub Pages

---

## 🧪 Testing Summary

| Case | Code | Expected Result |
|------|------|-----------------|
| **Failing Test** | `expect(sum(2, 2)).toBe(5)` | Lint ✅ → Test ❌ → Deploy ⏭️ |
| **Passing Test** | `expect(sum(2, 2)).toBe(4)` | Lint ✅ → Test ✅ → Deploy ✅ |

---

## 📁 Project Structure

SEN10_Quiz12/
│
├── assets/
│ └── ugly-screenshot.png
│
├── index.html
├── styles.css
├── script.js
│
├── sum.js
├── sum.test.js
│
├── package.json
├── eslint.config.js
├── jest.config.js
│
└── .github/
└── workflows/
└── deploy.yml

---

## 🧰 Technologies Used

- **HTML5 / CSS3 / JavaScript (ES6 Modules)**
- **ESLint v9** — for static code analysis
- **Jest** — for automated testing
- **GitHub Actions** — for CI/CD pipeline automation
- **GitHub Pages** — for static hosting

---

## 🪄 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/Aquino28/SEN10_Quiz12.git
   cd SEN10_Quiz12
2. Install dependencies:
npm install

3. Run ESLint:
npm run lint

4. Run Jest tests:
npm test

Open index.html in your browser to preview the static site.

## 🌐 Live Demo

Once deployed successfully, the static site is available at:

👉 https://aquino28.github.io/SEN10_Quiz12/
