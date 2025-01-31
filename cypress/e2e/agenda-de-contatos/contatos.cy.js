/// <reference types="cypress" />

describe('Testes utilizando o Cypress', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    });

    it("Deve incluir informações no formulário", () => {
        cy.get('input[type="text"]').type("Teste");
        cy.get('input[type="email"]').type("teste@gmail.com");
        cy.get('input[type="tel"]').type("1234567890");
        cy.contains("Adicionar").click();
    });

    it("Deve alterar a informação da lista", () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
        cy.get('input[type="text"]').clear().type("Teste2");
        cy.get('input[type="email"]').clear().type("teste2@gmail.com");
        cy.get('input[type="tel"]').clear().type("1234567892");
        cy.get(".alterar").click();
    });

    it("Deve remover um contato da lista", () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .delete").click();
    });
});
