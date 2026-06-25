// cypress/e2e/myTestRestfulBooker.cy.js

import { getDateWithOffset, formatURLDate } from '../support/formatDates'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Modulo Contact', () => {

    beforeEach(() => {
        cy.index()
    })

    it('CP01: Envío exitoso (Campos Nominales) (Happy Path)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP01')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosExito(cp.data.name, cp.data.subject)
        })
    })

    it('CP02: Envío exitoso (Límites Inferiores)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP02')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosExito(cp.data.name, cp.data.subject)
        })
    })

    it('CP03: Envío exitoso (Límites Superiores)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP03')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosExito(cp.data.name, cp.data.subject)
        })
    })

    it('CP04: Envío fallido (Todos los campos vacíos) (Negative Test)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP04')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP05: Envío fallido (Name vacío)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP05')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP06: Envío fallido (Email vacío)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP06')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP07: Envío fallido (Phone vacío)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP07')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP08: Envío fallido (Subject vacío)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP08')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP09: Envío fallido (Message vacío)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP09')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP10: Envío fallido (Phone - Fuera de límite inferior)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP10')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP11: Envío fallido (Phone - Fuera de límite superior)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP11')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP12: Envío fallido (Subject - Fuera de límite inferior)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP12')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP13: Envío fallido (Subject - Fuera de límite superior)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP13')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP14: Envío fallido (Message - Fuera de límite inferior)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP14')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP15: Envío fallido (Message - Fuera de límite superior)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP15')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })

    it('CP16: Envío fallido (Formato Email Inválido)', () => {
        cy.fixture('contactDatos.json').then((data) => {
            const cp = data.contactFormCases.find(test => test.id === 'CP16')
            cy.contact(cp.data.name, cp.data.email, cp.data.phone, cp.data.subject, cp.data.message)
            cy.verificarDatosError(cp.expectedAlerts)
        })
    })
})

describe('Módulo de Admin', () => {

    beforeEach(() => {
        cy.index()
    })

    it('CP23: Login exitoso con credenciales correctas', () => {
        cy.fixture('adminDatos.json').then((data) => {
            const cp = data.loginCases.find(test => test.id === 'CP01')
            // Ingresar usuario correcto y clave correcta
            cy.loginAdmin(cp.user, cp.pass)
            cy.verificarLoginExito()
        })
    })

    it('CP24: Login fallido con Username incorrecto', () => {
        cy.fixture('adminDatos.json').then((data) => {
            const cp = data.loginCases.find(test => test.id === 'CP02')
            // Ingresar usuario incorrecto y clave correcta
            cy.loginAdmin(cp.user, cp.pass)
            cy.verificarLoginFallido()
        })
    })

    it('CP25: Login fallido con password incorrecto', () => {
        cy.fixture('adminDatos.json').then((data) => {
            const cp = data.loginCases.find(test => test.id === 'CP03')
            // Ingresar usuario correcto y clave incorrecta
            cy.loginAdmin(cp.user, cp.pass)
            cy.verificarLoginFallido()
        })
    })

    it('CP26: Login fallido con campos vacíos', () => {
        cy.fixture('adminDatos.json').then((data) => {
            const cp = data.loginCases.find(test => test.id === 'CP04')
            // Dejar campos vacíos al intentar iniciar sesión
            cy.loginAdmin(cp.user, cp.pass)
            cy.verificarLoginFallido()
        })
    })

    it('CP27: Creación exitosa de habitación (Happy Path)', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()

            const cp = data.roomCases.find(test => test.id === 'CP05')
            // Rellenar formulario y crear la habitación
            cy.crearHabitacion(cp.data.roomName, cp.data.type, cp.data.accessible, cp.data.roomPrice, cp.data.features)

            // Verificar que la habitación recién creada sea visible en la lista
            cy.contains('.row', cp.data.roomName).should('be.visible')
        })
    })

    it('CP28: Creación fallida de habitación con campos vacíos', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()

            const cp = data.roomCases.find(test => test.id === 'CP06')
            // Intentar crear la habitación sin rellenar campos
            cy.crearHabitacion(cp.data.roomName, cp.data.type, cp.data.accessible, cp.data.roomPrice, cp.data.features)

            // Verificar que el mensaje de alerta sobre la creación fallida sea visible
            cy.contains(cp.expectedAlert).should('be.visible')
        })
    })

    it('CP30: Visualizar detalles y reservas de habitación', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()

            const cp = data.roomDetailCases.find(test => test.id === 'CP08')
            // Visualizar detalles de la habitación
            cy.verificarDetallesHabitacion(cp.roomName)
        })
    })

    it('CP31: Editar detalles de habitación exitosamente', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()

            const cp = data.roomDetailCases.find(test => test.id === 'CP09')
            // Navegar a detalles de la habitación
            cy.verificarDetallesHabitacion(cp.roomName)
            // Cambiar precio de la habitación
            cy.editarHabitacionPrecio(cp.newPrice)

            // Verificar que el nuevo precio actualizado se visualice
            cy.contains(cp.newPrice).should('be.visible')
        })
    })

    it('CP33: Visualizar reporte de reservas en calendario', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            // Verificar visualización del calendario
            cy.verificarReporteCalendario()
        })
    })

    it('CP34: Navegación del calendario (Today/Back/Next)', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            // Navegar a la pestaña de reportes
            cy.verificarReporteCalendario()
            // Probar navegación temporal del calendario
            cy.navegarCalendario()
        })
    })

    it('CP35: Actualizar información de branding exitosamente', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()

            const cp = data.brandingCases.find(test => test.id === 'CP13')
            // Actualizar branding del hotel
            cy.actualizarBranding(cp.name, cp.contactPhone)
        })
    })

    it('CP36: Visualizar lista de mensajes y abrir detalle', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            // Abrir el detalle del primer mensaje disponible
            cy.verificarDetalleMensaje()
        })
    })

    it('CP37: Cerrar detalle de mensaje', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            // Abrir detalle del mensaje
            cy.verificarDetalleMensaje()
            // Cerrar el modal de detalles
            cy.cerrarDetalleMensaje()
        })
    })

    it('CP38: Cierre de sesión exitoso', () => {
        cy.fixture('adminDatos.json').then((data) => {
            // Primero iniciar sesión como administrador
            cy.loginAdmin(data.credenciales.user, data.credenciales.pass)
            cy.verificarLoginExito()
            // Cerrar la sesión
            cy.logoutAdmin()
        })
    })
})

describe('Modulo Check Availability', () => {

    beforeEach(() => {
        cy.index()
    })

    it('CP39: confirmar valores predeterminados (Happy Path)', () => {
        cy.log(getDateWithOffset(0))
        cy.log(getDateWithOffset(1))
        cy.get('#booking input').eq(0).should('have.value', getDateWithOffset(0))
        cy.get('#booking input').eq(1).should('have.value', getDateWithOffset(1))
    })

    it('CP40: ingresar fechas válidas (Happy Path)', () => {
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

    it('CP41: funciona botón "Check Availability" (Happy Path)', () => {
        cy.get('#booking .btn').click()
    })

})

describe('Modulo Our Rooms', () => {

    beforeEach(() => {
        cy.index()
        cy.validRange()
    })

    it('CP47: cada tarjeta tiene un título (Happy Path)', () => {
        cy.get('.card > .room-image').each(($room, index) => {
            cy.get(`.row > :nth-child(${index + 1}) > .card > .card-body > .card-title`)
                .should('be.visible')
                .and('not.be.empty')
        })
    })

    it('CP48: cada tarjeta tiene un precio (Happy Path)', () => {

        cy.get('.card > .room-image').each(($room, index) => {
            cy.get(`.row > :nth-child(${index + 1}) > .card > .card-footer > .fw-bold`)
                .should('be.visible')
                .and('not.be.empty')
        })
    })

    it('CP50: cada tarjeta tiene una imagen (Happy Path)', () => {

        cy.get('.card > .room-image').each(($room, index) => {
            cy.get(`.row > :nth-child(${index + 1}) > .card > .room-image > .card-img-top`)
                .should('be.visible')
        })
    })

    it('CP51: cada tarjeta tiene etiquetas de características visibles (Happy Path)', () => {

        cy.get('.card > .room-image').each(($room, index) => {
            cy.get(`.row > :nth-child(${index + 1}) > .card > .card-body > div.card-text > .d-flex > :nth-child(1) > .bi`)
                .should('be.visible')
        })
    })

    it('CP52: botón "Book Now" lleva a la url de reserva (Happy Path)', () => {
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

