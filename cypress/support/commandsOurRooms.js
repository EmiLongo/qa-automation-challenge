// cypress/support/commandsOurRooms.js
import { getDateWithOffset } from '../support/formatDates'

Cypress.Commands.add("validRange", () => {
  cy.get('#booking input')
    .eq(0)
    .type('{selectall}')
    .type(getDateWithOffset(3))
    .should('have.value', getDateWithOffset(3))
  cy.get('#booking input')
    .eq(1)
    .type('{selectall}')
    .type(getDateWithOffset(4))
    .should('have.value', getDateWithOffset(4))
  cy.get('#booking .btn').click()
});