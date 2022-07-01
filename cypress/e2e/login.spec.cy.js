/* eslint-disable no-undef */
/// <reference types = "cypress"/>

describe('login scenario', () => {
  beforeEach(()=>{
    cy.fixture('validUser').as('user');
  })
  it('enter valid data', () => {
    cy.visit('http://localhost:3000');
    cy.get('@user').then(user=>{
      cy.get('[type="email"]').type(user.email);
      cy.get('[type="password"]').type(user.password);
    });
  
    cy.get('span').contains('Login').click();
    cy.url().should('contain','/todo');


  })
})