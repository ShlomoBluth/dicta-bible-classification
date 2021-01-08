/// <reference types="cypress"/>

//run tests on requests from bible classification run

describe('requestsTests',()=>{

    
  beforeEach(() => {
    cy.visit('https://tiberias.dicta.org.il/#/')
  })

  


  it('Error message for response with a delay of 4 minutes when clicking the run button'+
  ' of tiberias page',()=>{
    cy.bibleClassificationRequest({
      message:' Server took too long to respond.',
      delaySeconds:60*4
    })
  })

  
  it('Error message for response with status code 500 when clicking the run button of tiberias page'
  ,()=>{
    cy.bibleClassificationRequest({
      status:500,
      message:' Server failed to respond.'
    })
  })
    
})