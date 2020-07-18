describe('Bundle Test', () => {
    it('Should Upload and Verify', () => {
      
        cy.visit('https://csvdemomockappp.bundlewallet.com/')
        cy.contains('CSV Invoice Parser')
        .should('be.visible')

        const fileName = 'test.csv'

        cy.readFile('/Users/user/Downloads/test.csv').then(function(fileContent){
        cy.get('#statement-file').attachFile({fileContent,fileName,mimeType:'text/csv'})
        cy.get('.btn').click()
        cy.get('.alert-success')
        cy.contains('CSV File has been parsed successfully, see summary below')
        cy.should('be.visible')

        })
    })
        
    });