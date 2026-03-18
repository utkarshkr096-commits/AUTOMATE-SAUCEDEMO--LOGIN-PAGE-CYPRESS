

describe('Dropdown Test',()=>{
    it('Dropdown list',()=>{
         cy.visit('https://testautomationpractice.blogspot.com/')
         cy.get('#country').select(1)
    })
})