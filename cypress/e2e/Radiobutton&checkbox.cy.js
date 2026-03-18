describe('Verfiy radio buttons',()=>{
    it('Test 1',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        //cy.get(':nth-child(3) > [name="gender"]').eq(0).uncheck()
        cy.get('input#female').check()
        

    })
})