
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

import { BankManagerMainPage } from '../../../src/pages/manager/BankManagerMainPage.js';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage.js';

test('Assert manager can add new customer', async ({ page }) => {
  const managerPage = new BankManagerMainPage(page);
  const addCustomerPage = new AddCustomerPage(page);

  // Dados de um cliente fictício
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const postCode = faker.location.zipCode();

  // Abrir a página de cadastro
  await managerPage.open();
  await managerPage.clickAddCustomerButton();

  // Preencher e cadastrar o cliente
  await addCustomerPage.fillFirstName(firstName);
  await addCustomerPage.fillLastName(lastName);
  await addCustomerPage.fillPostCode(postCode);
  await addCustomerPage.clickAddCustomerButton();

  // Atualizar a página e abrir a lista de clientes
  await page.reload();
  await managerPage.open();
  await managerPage.clickCustomersButton();

  // Conferir o cliente cadastrado na última linha
  const lastRow = page.getByRole('row').last();
  const cells = lastRow.locator('td');

  await expect(cells.nth(0)).toHaveText(firstName);
  await expect(cells.nth(1)).toHaveText(lastName);
  await expect(cells.nth(2)).toHaveText(postCode);
  await expect(cells.nth(3)).toHaveText('');
});