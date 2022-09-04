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

  it("Uso do timeout", () => {
    //o wait trava o processo e espera o tempo que definimos nele
    cy.wait(5000)
    cy.get("#buttonListDOM").click();
    //o timeout aumenta o limite de tempo que um processo pode gastar
    //Passado o tempo, se a assertiva não for cumprida, é dado como erro
    cy.get("#lista li span", { timeout: 30000 }).should("contain", "Item 2");
  });

  it.only("Should vs Then", () => {
    //o then espera quem o chamou ser resilvido antes de rodar o seu conteúdo
    //o should tenta rodar inúmeras vezes até atender seu teste ou cair no timeout (erro)
    cy.get("#buttonListDOM").then($el => {
      expect($el).to.have.length(1)
      cy.get("#buttonList")
    })
  });
});
