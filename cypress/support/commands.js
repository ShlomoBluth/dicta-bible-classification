

Cypress.Commands.add('selectingClasses',()=>{
    cy.get('div[class="txt-frame"]').first().within(()=>{
        cy.get('button').click({force: true})
    })
    cy.get('ul[id="genesis"]').children().first().within(()=>{
        cy.get('input').click({force: true})
    })
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

Cypress.Commands.add('newIntercept',(url,delaySeconds,status,name)=>{
    cy.intercept('POST', url, {
        delayMs:1000*delaySeconds,
        statusCode: status
    }).as(name)
})

Cypress.Commands.add('checkMessage',(title,id,delaySeconds,message)=>{
    //cy.wait('@'+name,{responseTimeout:1000*delaySeconds+30000}).then(()=>{
        cy.contains(title+message,{timeout:delaySeconds}).should('be.visible')
        cy.get('div[id*="'+id+'"]').within(()=>{
            cy.get('button').click({force: true})
        })
        cy.contains(title+message).should('not.be.visible')    
    //})
})

Cypress.Commands.add('bibleClassificationRequest',({status=200,message='',delaySeconds=0})=>{
    cy.newIntercept('/server/classifier/statistics',delaySeconds,status,'statistics')
    cy.newIntercept('/server/classifier/crossvalidate',delaySeconds,status,'crossvalidate')
    cy.newIntercept('/server/DictaDatabaseServer/api/TextFeatures/GetTextLargeAndSmall',
    delaySeconds,status,'api')
    cy.get('button').contains('Start Experiment').click()
    cy.selectingClasses()
    if(message.length>0){
        cy.checkMessage('Feature Extraction:','ef_',delaySeconds,message)
        cy.checkMessage('Cross-validation:','cv_',delaySeconds,message)
    }

})