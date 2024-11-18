# Calculator Web App

This repository contains a calculator web application with automated tests and continuous integration.

## Testing Framework

I use Playwright and Node.js as the testing framework.

## Local Test Setup

To run the tests locally:

1. Install Node.JS Prebuilt Installer
2. Clone the repository
2. Open the file with Visual Studio Code
3. Install Playwright by iputting with terminal:
`npm init -y`
`npm install playwright`
`npx playwright install`
`npm install @playwright/test`
4. Run the tests with `npx playwright test`

Expected Result:
4 passed 

## Additional Configuration Requirements

None



# GitHub Automation Testing Challenge

## Overview
This repository contains a calculator web application, and your task is to create automated tests and set up continuous integration. The challenge focuses on your ability to implement test automation and configure GitHub Actions.

## The Calculator
The `index.html` file contains a calculator implementation with these features:
- Basic arithmetic operations (+, -, ×, ÷)
- Parentheses support
- Decimal numbers
- Calculation history
- Error handling

## Challenge Requirements

### 1. Test Implementation
Choose a JavaScript testing framework (e.g., Jest, Cypress, Playwright) and create test cases for:
- Basic arithmetic operations
- Complex calculations with parentheses
- Error scenarios (invalid expressions, division by zero)
- UI interactions and history functionality

### 2. GitHub Actions Setup
Configure GitHub Actions to:
- Install necessary dependencies
- Run the test suite
- Report test results

### 3. Continuous Integration
Implement automated testing that:
- Runs on every push to any branch
- Runs on pull requests to the main branch
- Ensures all tests pass successfully

## Getting Started

1. Fork this repository
2. Clone your forked repository locally
3. Create a new branch for your implementation
4. Choose and set up your testing framework
5. Write your test cases
6. Configure GitHub Actions
7. Create a pull request with your solution

## Submission Requirements

1. Test Files
   - Organized test structure
   - Clear test descriptions
   - Comprehensive test coverage

2. GitHub Actions Configuration
   - Workflow file(s) in `.github/workflows`
   - Proper CI pipeline setup

3. Documentation
   - Update README with:
     - Chosen testing framework and rationale
     - Local test setup instructions
     - Any additional configuration requirements

4. Pull Request
   - Create a PR to the main branch
   - Include detailed description of your implementation
   - Leave the PR open for review

## Evaluation Criteria

1. Test Quality (50%)
   - Test coverage completeness
   - Edge case handling
   - Clear test organization

2. CI/CD Implementation (30%)
   - GitHub Actions configuration
   - Automation setup

3. Code Quality (20%)
   - Clean, documented code
   - Clear pull request documentation
   - Quality of README updates

## Optional Enhancements
If time permits, consider implementing:
- Cross-browser testing
- Performance testing
- Mobile responsiveness testing

## Submission

Please submit your GitHub repository link to the word document.
Additionally, please keep your repository private and invite `Tom-Dynamsoft` and `felixindynamsoft` as a collaborator!

## Questions?

For any questions about the challenge requirements, please create an issue in this repository.

Good luck!