/// <reference types="cypress"/>

//run basic tests on bible classification

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
//urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
//sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

    sizes.forEach((sizeValue,sizeKey) => {


        describe('basicTests '+urlKey+' '+sizeKey,()=>{

    
            beforeEach(() => {
                cy.screenSize({size:sizeValue})
                cy.visitpage({url:urlValue})
            })

            it('Run bible classification',()=>{
                cy.get('button').contains('Start Experiment').click({force:true})
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
})

