/// <reference types="cypress" />

describe("Work with basic elements", () => {
  it("Text", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    //Pesquisa por texto utilizando o elemento html ou css
    cy.get("body").should("contain", "Cuidado");
    cy.get("body").should("contain", "Cuidado");
    cy.get("span").should("contain", "Cuidado");
    cy.get(".facilAchar").should("contain", "Cuidado");
    cy.get(".facilAchar").should(
      "have.text",
      "Cuidado onde clica, muitas armadilhas..."
    );
  });
});
