/// <reference types="cypress" />

describe("Work with basic elements", () => {
  //before roda antes dos testes uma única vez
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  //beforeEach oda antes dos testes, uma vez para cada teste
  beforeEach(() => {
    cy.reload();
  });

  it("Deve aguardar elemento estar disponivel", () => {
    cy.get("#novoCampo").should("not.exist");
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist");
    cy.get("#novoCampo").should("exist");
    cy.get("#novoCampo").type("Funciona");
  });

  it("Uso do find", () => {
    cy.get("#buttonList").click();
    cy.get("#lista li").find("span").should("contain", "Item 1");

    cy.get("#lista li span").should("contain", "Item 2");
  });
});
