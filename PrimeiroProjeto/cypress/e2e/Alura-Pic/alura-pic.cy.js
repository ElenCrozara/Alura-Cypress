describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })

    it('deve validar mensagens para campos obrigatórios', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('Deve validar mensagem de email inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[placeholder="email"]').type('elen');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('Deve validar mensagem de erro para o campo full name', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[placeholder="full name"]').type(']');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('Deve validar mensagem de erro para o campo user name', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[placeholder="user name"]').type('A');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');

    })

    it('Deve validar mensagem de erro para o campo password', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[placeholder="password"]').type('p');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('deve validar novo usuário com comando personalizado', () => {
        cy.contains('a', 'Register now').click();
        cy.login('elen.@teste.com.br', 'Elen', 'crozzara', 'pdw123456')
        cy.contains('button', 'Register').click();
        cy.contains('a', 'Sign In!').click();
    })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        it(`deve validar novo usuário com massa de dados ${usuario.userName} `, () => {
            cy.contains('a', 'Register now').click();
            cy.get('input[placeholder="email"]').type(usuario.email);
            cy.get('input[placeholder="full name"]').type(usuario.fullName);
            cy.get('input[placeholder="user name"]').type(usuario.userName);
            cy.get('input[placeholder="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
            cy.contains('a', 'Sign In!').click();
        })
    })

})