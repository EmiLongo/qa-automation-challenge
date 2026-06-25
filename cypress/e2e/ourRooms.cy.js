// cypress/e2e/ourRooms.cy.js

import { formatURLDate } from "../support/formatDates"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Modulo Our Rooms', () => {

    beforeEach(() => {
      cy.index()
      cy.validRange()
    })

    it('CP25: cada tarjeta tiene un título (Happy Path)', () => {
      cy.get('.card > .room-image').each(($room, index) => {
        cy.get(`.row > :nth-child(${index + 1}) > .card > .card-body > .card-title`)
          .should('be.visible')
          .and('not.be.empty')
        })
    })

    it('CP26: cada tarjeta tiene un precio (Happy Path)', () => {

      cy.get('.card > .room-image').each(($room, index) => {
        cy.get(`.row > :nth-child(${index + 1}) > .card > .card-footer > .fw-bold`)
          .should('be.visible')
          .and('not.be.empty')
        })
    })

    it('CP28: cada tarjeta tiene una imagen (Happy Path)', () => {

      cy.get('.card > .room-image').each(($room, index) => {
        cy.get(`.row > :nth-child(${index + 1}) > .card > .room-image > .card-img-top`)
          .should('be.visible')
        })
    })

    it('CP29: cada tarjeta tiene etiquetas de características visibles (Happy Path)', () => {

      cy.get('.card > .room-image').each(($room, index) => {
        cy.get(`.row > :nth-child(${index + 1}) > .card > .card-body > div.card-text > .d-flex > :nth-child(1) > .bi`)
          .should('be.visible')
        })
    })

    it('CP30: botón "Book Now" lleva a la url de reserva (Happy Path)', () => {
      cy.get('#booking input').eq(0).invoke('val').then((checkin) => {
        cy.get('#booking input').eq(1).invoke('val').then((checkout) => {
          cy.get(':nth-child(1) > .card > .card-footer > .btn').click()

          cy.url()
            .should('include', '/reservation/')
            .should(
              'include',
              `?checkin=${formatURLDate(checkin)}&checkout=${formatURLDate(checkout)}`
            )
        })
      })
    })

})