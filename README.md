# Playwright: Wizard Bank test project

This project implements test coverage for the [Wizard Bank](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login) functionality. 

## Task description
Please read the [instructions](TaskDescription.md) in order to complete this task.

# Test coverage

- Customer:
  - Account Operations
  - Logout
  - Transactions
- Manager:
  - Bank manager login
  - Adding new customer
  - Adding new account for the customer
  - Deleting a customer
  - Searching a customer

# How to run the tests

## Install project
```bash
npm i
npx playwright install
```
 ## Run tests in UI mode
```bash
npx playwright test --ui
```
 ## Run tests in debug mode
```bash
npx playwright test --debug
```
 ## Run tests in headless mode
```bash
npx playwright test
```
 ## Generate report for headless run
```bash
npx playwright show-report
```

---

## Minha implementação — Renata Meirelles da Silva

Este projeto foi desenvolvido como atividade prática durante meus estudos de QA Engineering na Mate Academy, utilizando Playwright, JavaScript e o padrão Page Object Model (POM).

### Teste implementado

Automação do cenário de cadastro de um novo cliente pelo gerente do banco.

- Implementação de locators e métodos nas classes de páginas.
- Preenchimento dos dados do cliente utilizando Faker.
- Execução das ações de cadastro e consulta de clientes.
- Validação dos dados cadastrados por meio de assertions do Playwright.

### Arquivos trabalhados

- `src/pages/manager/AddCustomerPage.js`
- `src/pages/manager/BankManagerMainPage.js`
- `tests/manager/addCustomer/managerCanAddNewCustomer.spec.js`

### Resultado da execução

O teste de cadastro de cliente foi executado com sucesso nos navegadores Chromium e Firefox.

Os resultados apresentados se referem a esse cenário específico, não à execução completa de todos os testes do projeto.

### Créditos

Projeto-base disponibilizado pela Mate Academy:

https://github.com/mate-academy/qa_pw_wizard_bank_pom

Implementação e documentação das alterações descritas acima: Renata Meirelles da Silva.