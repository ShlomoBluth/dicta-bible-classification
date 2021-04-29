/// <reference types="cypress"/>

//run tests on requests from bible classification run

let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {

  describe('requestsTests',()=>{

    
    beforeEach(() => {
      if (Cypress._.isArray(size)) {
        Cypress.config({
          viewportWidth: size[0],
          viewportHeight: size[1]
        })
        cy.viewport(size[0], size[1])
      } else {
        Cypress.config({
          viewportWidth: 375,
          viewportHeight: 812
        })
        cy.viewport(size)
      }
      cy.visit('/')
    })
  
  
    
  
  
    // it('Error message for GetTextLargeAndSmall response with a delay of 5 minutes when clicking the run button'+
    // ' of tiberias page',()=>{
    //   cy.bibleClassificationRequest({
    //     url:'GetTextLargeAndSmall',
    //     message:' Server took too long to respond.',
    //     delaySeconds:65*5
    //   })
    // })
  
    
    // it('Error message for GetTextLargeAndSmall response with status code 500 when clicking the run button of tiberias page'
    // ,()=>{
    //   cy.bibleClassificationRequest({
    //     url:'GetTextLargeAndSmall',
    //     status:500,
    //     message:' Server failed to respond.'
    //   })
    // })
  
    
      
  
    it('Error message for statistics response with a delay of 2 minutes when clicking the run button'+
    ' of tiberias page',()=>{
      cy.bibleClassificationRequest({
        url:'statistics',
        message:'Feature Extraction: Server took too long to respond.',
        delaySeconds:65*2
      })
    })
  
    
    it('Error message for statistics response with status code 500 when clicking the run button of tiberias page'
    ,()=>{
      cy.bibleClassificationRequest({
        url:'statistics',
        status:500,
        message:'Feature Extraction: Server failed to respond.'
      })
    })
  
    it('Error message for crossvalidate response with a delay of 1 minutes when clicking the run button'+
    ' of tiberias page',()=>{
      cy.bibleClassificationRequest({
        url:'crossvalidate',
        message:'Cross-validation: Server took too long to respond.',
        delaySeconds:65*2
      })
    })
  
    
    it('Error message for crossvalidate response with status code 500 when clicking the run button of tiberias page'
    ,()=>{
      cy.bibleClassificationRequest({
        url:'crossvalidate',
        status:500,
        message:'Cross-validation: Server failed to respond.'
      })
    })
  
    
  
    it('Error message for classify response with a delay of 5 minutes when clicking the run button'+
    ' of tiberias page',()=>{
      cy.bibleClassificationRequest({
        url:'classify',
        message:'Server took too long to respond.',
        delaySeconds:65*5
      })
    })
  
    
    it('Error message for classify response with status code 500 when clicking the run button of tiberias page'
    ,()=>{
      cy.bibleClassificationRequest({
        url:'classify',
        status:500,
        message:'Server failed to respond.'
      })
    })
      
  })
})
