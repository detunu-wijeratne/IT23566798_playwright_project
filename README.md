# Playwright Test Automation - SwiftTranslator

## Student Information
**Name:** Wijeratne W.M.D.N          
**Registration Number:** IT23566798  
**Assignment:** IT3040 - ITPM Assignment 1  

---

## Project Description
This project contains automated test cases developed using **Playwright** to test the **Singlish to Sinhala translation functionality** of the SwiftTranslator web application:

👉 https://www.swifttranslator.com/

The automation suite validates system behavior through positive, negative, and UI test scenarios to ensure reliability, accuracy, and proper user interface functionality.

---

## Prerequisites
Ensure the following are installed before running the project:

- **Node.js** (version 16 or higher)  
- **npm** (Node Package Manager)  

---

## Installation Steps

1. Clone or download the project folder.
2. Open a terminal or command prompt inside the project directory.
3. Install project dependencies:

```bash
npm install
```


## Install Playwright browsers:

```bash
npx playwright install

```

## Running Tests
## Run all tests
```bash
npx playwright test
```

## Run tests and view the HTML report
```bash
npx playwright test
npx playwright show-report
```

## Run a specific test file
```bash
npx playwright test tests/translator.spec.js
```

## Run tests in headed mode (visible browser)
```bash
npx playwright test tests/translator.spec.js --headed
```
## Project Structure
```bash
ITPM ASSIGNMENT
├── .github/                 # GitHub workflow configurations (if available)
├── node_modules/           # Installed dependencies
├── playwright-report/      # Auto-generated HTML test reports
├── scenarios/              # Test scenario documentation
├── screenshots/           # Failure screenshots captured during tests
├── test-results/          # Raw test execution results
├── tests/                 
│   └── translator.spec.js # Main Playwright test file
├── .gitignore             # Git ignored files
├── package-lock.json      # Dependency lock file
├── package.json           # Project metadata and dependencies
└── playwright.config.ts   # Playwright configuration
```

## Test Categories

✅ Positive Functional Tests: 24 test cases

❌ Negative Functional Tests: 10 test cases

🎨 UI Test: 1 test case

✅ Total: 35 automated test cases

## Notes

: Tests execute on the Chromium browser by default.
: An HTML test report is automatically generated after execution.
: Screenshots are captured on test failures to assist with debugging.
: The framework is designed to be scalable for future test enhancements.



