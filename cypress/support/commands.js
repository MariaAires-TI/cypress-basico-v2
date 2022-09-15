/*Criando comando que preenche os campos obrigatórios e submete = fillMandatoryFieldsAndSubmit*/
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get("#firstName").type('Maria').should('have.value', 'Maria')
    cy.get("#lastName").type('Aires').should('have.value', 'Aires')
    cy.get("#email").type('cidinhalima12@gmail.com')
    .should('have.value', 'cidinhalima12@gmail.com')
    cy.get("#open-text-area").type('teste')
    .should('have.value', 'teste')
    cy.contains('button','Enviar').should('be.visible').click()
});