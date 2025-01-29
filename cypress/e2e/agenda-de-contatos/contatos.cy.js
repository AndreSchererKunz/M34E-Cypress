/// <reference types="cypress" />

describe('Testes utilizando o Cypress', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    });

    const preencherFormulario = (nome, email, telefone) => {
        cy.get('input[type="text"]').clear().type(nome);
        cy.get('input[type="email"]').clear().type(email);
        cy.get('input[type="tel"]').clear().type(telefone);
    };

    it("Deve adicionar um novo contato", () => {
        preencherFormulario("Teste", "teste@gmail.com", "1234567890");
        cy.contains("Adicionar").click();
    });

    it("Deve alterar um contato existente", () => {
        cy.get(':nth-child(2) .edit').click();
        preencherFormulario("Teste2", "teste2@gmail.com", "1234567892");
        cy.contains("Editar").click();
    });

    it("Deve remover um contato", () => {
        cy.get(':nth-child(2) .delete').click();
    });
});
