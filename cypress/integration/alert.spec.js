/// <reference types="cypress" />

describe('Work with alerts', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    // it.only('Alert', () => {
    //      cy.get('#alert').click()

    //      //on pega eventos que ocorrem na tela. Passamos qual o evento e o parametro que ele retorna 
    //      cy.on('window:alert', msg => {
    //          expect(msg).to.be.equal('Alert Simples')
    //      })
       
    // })

    it('Alert com mock', () => {
        //criamos um mock e o nomeamos de "alerta"
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        //temos um array de stub, assim, no getCall passamos a posição do stub que queremos  
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })

    it('Confirm', () => {
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Confirmado')
        })
        cy.get('#confirm').click()
    })
    //usamos o return false pois este cancela a box do alert 
    it('Deny', () => {
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Negado')
        })
        cy.get('#confirm').click()
    })

    it('Prompt', () => {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D')
        })
        cy.get('#prompt').click()
    })

    it.only('Validando mensagens', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Wagner')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy=dataSobrenome]').type('Aquino')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })

    
})
