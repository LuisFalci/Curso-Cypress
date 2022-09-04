/// <reference types="cypress" />

describe("Cypress basics", () => {
  it.only("Should visit a page and assert title", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    //Pausa a execução nesta linha.
    cy.pause();

    //.should tenta repetidas vezes com o parametro passado até passar, ou cair no timeout
    cy.title().should("be.equal", "Campo de Treinamento");

    // debug exibe no console informações
    cy.title().should("contain", "Campo").debug();

    cy.title()
      .should("be.equal", "Campo de Treinamento")
      .and("contain", "Campo");

    let syncTitle;

    //imprimir o log no console
    cy.title().should((title) => {
      console.log(title);
    });
    //ou
    cy.title().then((title) => {
      console.log(title);
      cy.get("#formNome").type(title);
      syncTitle = title;
    });

    cy.get("[data-cy=dataSobrenome]").then($el => {
      $el.val(syncTitle);
    });
    cy.get('#elementosForm\\:sugestoes').then($el => {
      cy.wrap($el).type(syncTitle);
    });

  });

  it("Should find and interact with an element", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    cy.get("#buttonSimple").click().should("have.value", "Obrigado!");
  });
});
