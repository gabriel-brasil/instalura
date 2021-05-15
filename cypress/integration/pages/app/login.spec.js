/// <reference types="cypress" />

describe('/pages/app/login/', () => {
  // it === test que estamos fazendo
  it('preencha os campos e vá para a página /app/profile', () => {
    // acessar página de login
    cy.visit('/app/login/');

    // preencher o input usuario
    cy.get('#formCadastro input[name="usuario"]').type('gabe21');

    // preencher o input senha
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');

    // clicar no botão de submit!
    cy.get('#formCadastro button[type="submit"]').click();

    // o que esperamos? ir para "/app/profile/"
    cy.url().should('include', '/app/profile');
  });
});
