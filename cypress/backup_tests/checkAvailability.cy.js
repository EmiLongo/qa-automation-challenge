// cypress/e2e/checkAvailability.cy.js
import { getDateWithOffset } from '../support/formatDates'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Modulo Check Availability', () => {

    beforeEach(() => {
        cy.index()
    })

    it('CP17: confirmar valores predeterminados (Happy Path)', () => {
      cy.log(getDateWithOffset(0))
      cy.log(getDateWithOffset(1))
      cy.get('#booking input').eq(0).should('have.value', getDateWithOffset(0))
      cy.get('#booking input').eq(1).should('have.value', getDateWithOffset(1))
    })

    it('CP18: ingresar fechas válidas (Happy Path)', () => {
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
    })

    it('CP19: funciona botón "Check Availability" (Happy Path)', () => {
      cy.get('#booking .btn').click()
    })

})