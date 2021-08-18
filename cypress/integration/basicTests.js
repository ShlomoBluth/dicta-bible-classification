/// <reference types="cypress"/>

//run basic tests on bible classification

let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {

    describe('basicTests',()=>{

        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
        })
    
        it('Run bible classification',()=>{
            cy.get('button').contains('Start Experiment').click()
            cy.selectText({
                collection:'Torah',
                book:'Genesis'
            })
            cy.selectText({
                collection:'Torah',
                book:'Exodus'
            })
            cy.get('button').contains('Analyze Classes').click({force: true})
            cy.get(':nth-child(1) > .v-spinner > .v-clip',{timeout:1000*60}).should('not.exist')
            cy.get('button[data-target="#text_for_classification_popup"]').click({force: true})
            cy.selectText({
                collection:'Torah',
                book:'Numbers',
                popupInner:'true'
            })
            cy.get('button').contains('Classify Text').click({force: true})
            cy.get(':nth-child(13) > .bar').should('have.css','background-color','rgb(204, 0, 193)')
        })
    
    })

})

