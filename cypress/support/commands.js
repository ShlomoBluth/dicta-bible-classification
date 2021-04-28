Cypress.Commands.add('selectText',({collection,book='',popupInner='',delaySeconds=0, message=''})=>{
    cy.get('p').contains('Click Select to choose text(s).')
    .first().parent().siblings('button').click()
    //If seledted the all collection
    if(book==''){
        cy.get('div[class="scrollable25"]').within(()=>{
            cy.contains(collection).click({force: true})
        })
    }else{
        cy.get('div[class*="scrollable25"]').within(()=>{
            cy.contains(collection).siblings('div[class="after"]').click({force: true})
        })
        if(popupInner=='true'){
            cy.get('.popup-inner > .text-selection-popup').within(()=>{
                cy.get('label[id="showtxt"]').contains(book).should('exist')
                cy.contains(book).click({force: true})
                cy.tastMessage({
                    HtmlElement:'[class*="spinner"]',
                    delaySeconds:delaySeconds,
                    message:message,
                    spinnerShould:'not.exist'
                })
                cy.get('button').contains('Select Text').click({force: true})
            })
        }else{
            cy.get('div[class*="scrollable25"]').within(()=>{
                cy.get('label[id="showtxt"]').contains(book).should('exist')
                cy.contains(book).click({force: true})
            })
            cy.tastMessage({
                HtmlElement:'span > .v-spinner > .v-clip',
                delaySeconds:delaySeconds,
                message:message,
                spinnerShould:'not.exist'
            })
            cy.get('button').contains('Select Text').click({force: true})
        }
    }
})


Cypress.Commands.add('tastMessage',({HtmlElement,delaySeconds=0,message='',spinnerShould})=>{
    if(delaySeconds>0){
        cy.get(HtmlElement,{timeout:1000*delaySeconds}).should(spinnerShould)
    }else{
        cy.get(HtmlElement,{timeout:1000*60}).should(spinnerShould)
    }
    if(message.length>0){
        cy.contains(message).should('be.visible')
    }
})






Cypress.Commands.add('bibleClassificationRequest',({url,status=200,message='',delaySeconds=0})=>{
    cy.intercept('POST','**'+url, {
        delayMs:1000*delaySeconds,
        statusCode: status
    })
    
    // cy.intercept('POST','**', {
    //     statusCode: 200
    // })
    
    cy.get('button').contains('Start Experiment').click()
    if(url=='GetTextLargeAndSmall'){
        cy.selectText({
            collection:'Torah',
            book:'Genesis',
            delaySeconds:delaySeconds,
            message:message
        })
    }else{
        cy.selectText({
            collection:'Torah',
            book:'Genesis'
        })
    }

    cy.selectText({
        collection:'Torah',
        book:'Exodus'
    })
    .then(()=>{
        cy.get('button').contains('Analyze Classes').click({force: true})
    })
    if(url!='classify'){
        cy.tastMessage({
            HtmlElement:':nth-child(1) > .v-spinner > .v-clip',
            delaySeconds:delaySeconds,
            message:message,
            spinnerShould:'not.exist'
        })
    }else{
        cy.get(':nth-child(1) > .v-spinner > .v-clip',{timeout:1000*60}).should('not.exist')
        cy.get('button[data-target="#text_for_classification_popup"]').click({force: true})
        cy.selectText({
            collection:'Torah',
            book:'Numbers',
            popupInner:'true'
        })
        cy.get('button').contains('Classify Text').click({force: true})
        cy.tastMessage({
            HtmlElement:'[class*="spinner"]',
            delaySeconds:delaySeconds,
            message:message,
            spinnerShould:'not.be.visible'
        })
    }

})