
Cypress.Commands.add('login',(email,nome, username,senha) => {
    cy.get('input[placeholder="email"]').type(email);
    cy.get('input[placeholder="full name"]').type(nome);
    cy.get('input[placeholder="user name"]').type(username);
    cy.get('input[placeholder="password"]').type(senha);
} )