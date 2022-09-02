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

  it("Links", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    cy.get('[href="#"]').click();
    cy.get("#resultado").should("have.text", "Voltou!");

    cy.reload();
    cy.get("#resultado").should("have.not.text", "Voltou!");
    cy.contains("Voltar").click();
    cy.get("#resultado").should("have.text", "Voltou!");
  });

  it.only("TextFields", () => {
    cy.get("#formNome").type("Cypress Test");
    cy.get("#formNome").should("have.value", "Cypress Test");

    //Para entender os dois pontos ":", usamos duas barras "\\"
    cy.get("#elementosForm\\:sugestoes")
      .type("textarea")
      .should("have.value", "textarea");

    cy.get(
      "#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input"
    ).type("???");

    //{backspace} deleta um caractere anterior
    cy.get("[data-cy=dataSobrenome]")
      .type("Teste123{backspace}")
      .should("have.value", "Teste12");

    //clear() limpa todo o conteudo presente no campo
    //delay trava o processo conforme o tempo passado
    //{selectall} apaga tudo anterior a ele, no caso "Erro"
    cy.get("#elementosForm\\:sugestoes")
      .clear()
      .type("Erro{selectall}acerto", { delay: 100 })
      .should("have.value", "acerto");
  });
});
