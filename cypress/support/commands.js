

Cypress.Commands.add('selectingClasses',(url,message,delaySeconds)=>{
    cy.get('div[class="txt-frame"]').first().within(()=>{
        cy.get('button').click({force: true})
    })
    cy.get('ul[id="genesis"]').children().first().within(()=>{
        cy.get('input').click({force: true})
    })
    if(url=='GetTextLargeAndSmall'){
        if(delaySeconds>0){
            cy.get('[class*="spinner"]',{timeout:delaySeconds*1000}).should('not.be.visible')
        }else{
            cy.get('[class*="spinner"]').should('not.be.visible')
        }
        if(message.length>0){
            cy.contains(message).should('be.visible') 
        }
    }  
    cy.get('button').contains('Select Text').click({force: true}).then(()=>{
        cy.get('div[class="txt-frame"]').next().within(()=>{
            cy.get('button').click({force: true})
        })
        cy.get('ul[id="genesis"]').children().first().next().within(()=>{
            cy.get('input').click({force: true})
        })
        cy.get('button').contains('Select Text').click({force: true})
    }).then(()=>{
        cy.get('button').contains('Analyze Classes').click({force: true})
    })
})




Cypress.Commands.add('bibleClassificationRequest',({url,status=200,message='',delaySeconds=0})=>{
    cy.intercept('POST','**'+url, {
        delayMs:1000*delaySeconds,
        statusCode: status
    })
    
    cy.intercept('POST','**', {
        statusCode: 200
    })
    
    cy.get('button').contains('Start Experiment').click()
    cy.selectingClasses(url,message,delaySeconds)
    if(delaySeconds>0){
        cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.be.visible')
    }
    if(message.length>0){
        cy.contains(message).should('be.visible')
    }

})