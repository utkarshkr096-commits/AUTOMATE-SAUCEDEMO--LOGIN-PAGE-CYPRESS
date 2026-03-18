This project contains end-to-end automation tests for the SauceDemo Login Page using Cypress. It validates different login scenarios including positive and negative test cases.

📌 Project Overview

🔍 Automates login functionality of SauceDemo

✅ Covers valid and invalid login scenarios

⚡ Built using Cypress (JavaScript-based testing framework)

🛠️ Tech Stack

Automation Tool: Cypress

Language: JavaScript

Test Framework: Mocha (built-in with Cypress)

Assertion Library: Chai

📂 Project Structure
CYPRESSPROJECT/
│
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js
│   ├── fixtures/
│   ├── support/
│
├── cypress.config.js
├── package.json
└── README.md
▶️ How to Run the Project
1️⃣ Clone the Repository
git clone https://github.com/utkarshkr096-commits/AUTOMATE-SAUCEDEMO--LOGIN-PAGE-CYPRESS.git
cd your-repo-name
2️⃣ Install Dependencies
npm install
3️⃣ Open Cypress Test Runner
npx cypress open
4️⃣ Run Tests in Headless Mode
npx cypress run
🧪 Test Scenarios Covered
✅ Positive Test Case

Login with valid credentials

Username: standard_user

Password: secret_sauce

❌ Negative Test Cases

Invalid username

Invalid password

Empty fields validation

Locked user login

📸 Sample Test Code
describe('SauceDemo Login Test', () => {
  it('Valid Login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory')
  })
})
📊 Key Features

✔️ Easy-to-understand test cases

✔️ Clean folder structure

✔️ Reusable Cypress commands

✔️ Assertion-based validation

📢 Author

Utkarsh Sharma
QA Tester | Automation Enthusiast

🔗 Connect with Me

LinkedIn: (Add your profile link here)

GitHub: (Add your GitHub link here)

⭐ Acknowledgment

This project uses the demo site:
👉 https://www.saucedemo.com/

If you want, I can also:

✅ 
Customize this README with your actual GitHub repo link

✅ 
Add badges (build, Cypress, npm)

✅ 
Make it ATS/portfolio optimized for recruiters

give me readme.md for gitghub

Here’s a clean, professional, and GitHub-ready README.md you can directly copy and paste 👇

🚀 SauceDemo Login Automation using Cypress

This project demonstrates End-to-End Automation Testing of the SauceDemo login page using Cypress. It covers multiple test scenarios including both positive and negative test cases.

📌 Project Description

The goal of this project is to automate and validate the login functionality of the SauceDemo application.

🔗 Application Under Test: https://www.saucedemo.com/

🛠️ Tech Stack

Tool: Cypress

Language: JavaScript

Framework: Mocha

Assertions: Chai

📂 Folder Structure
CYPRESSPROJECT/
│
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js
│   ├── fixtures/
│   ├── support/
│
├── cypress.config.js
├── package.json
└── README.md
▶️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Install Dependencies
npm install
3️⃣ Run Cypress Test Runner
npx cypress open
4️⃣ Run in Headless Mode
npx cypress run
🧪 Test Scenarios
✅ Positive Scenario

Login with valid credentials

Username: standard_user

Password: secret_sauce

❌ Negative Scenarios

Invalid username

Invalid password

Empty fields

Locked user login

📸 Sample Test Script
describe('SauceDemo Login Test', () => {

  it('Valid Login Test', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory')
  })

})
📊 Features

✔️ Automated login validation

✔️ Covers real-world test scenarios

✔️ Clean and maintainable code

✔️ Beginner-friendly Cypress project

👨‍💻 Author

Utkarsh Sharma
QA Tester | Automation Enthusiast

🔗 Connect

GitHub: https://github.com/utkarshkr096-commits

LinkedIn: https://www.linkedin.com/in/utkarsh-sharma12/
