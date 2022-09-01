/// <reference types="cypress" />

describe("Cypress basics", () => {
  it.only("Should visit a page and assert title", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    //Pausa a execução nesta linha. 
    cy.pause()

    //.should tenta repetidas vezes com o parametro passado até passar, ou cair no timeout
    cy.title().should("be.equal", "Campo de Treinamento");

    // debug exibe no console informações
    cy.title().should("contain", "Campo").debug();

    cy.title()
      .should("be.equal", "Campo de Treinamento")
      .and("contain", "Campo");
  });

  it("Should find and interact with an element", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    
    cy.get("#buttonSimple")
    .click()
    .should('have.value', 'Obrigado!');
  });
});
