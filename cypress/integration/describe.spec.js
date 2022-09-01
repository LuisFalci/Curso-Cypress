/// <reference types="cypress" />

it("A external test...", () => {});

//describe serve para colocarmos um grupo de testes

describe("Should group tests...", () => {
  describe("Should group more specific tests...", () => {
    it("A specific test...", () => {});
  });
  //.only irá mostrar apenas este teste
  describe.only("Should group more specific tests2...", () => {
    it("A specific test2...", () => {});
  });

  //.skip pula o teste
  it.skip("A external test...", () => {});
});
