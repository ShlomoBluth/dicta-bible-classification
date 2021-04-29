// /// <reference types="cypress"/>

// //run tests on requests from bible classification run

// describe('DevelopmentVersionRequestsTests',()=>{

    
//     beforeEach(() => {
//       cy.visit('https://use-dicta-components-2--tender-hamilton-5d028e.netlify.app/')
//     })
  
    
  
  
//     // it('Error message for GetTextLargeAndSmall response with a delay of 5 minutes when clicking the run button'+
//     // ' of tiberias page',()=>{
//     //   cy.bibleClassificationRequest({
//     //     url:'GetTextLargeAndSmall',
//     //     message:' Server took too long to respond.',
//     //     delaySeconds:65*5
//     //   })
//     // })
  
    
//     // it('Error message for GetTextLargeAndSmall response with status code 500 when clicking the run button of tiberias page'
//     // ,()=>{
//     //   cy.bibleClassificationRequest({
//     //     url:'GetTextLargeAndSmall',
//     //     status:500,
//     //     message:' Server failed to respond.'
//     //   })
//     // })
  
    
      
  
//     // it('Error message for statistics response with a delay of 2 minutes when clicking the run button'+
//     // ' of tiberias page',()=>{
//     //   cy.bibleClassificationRequest({
//     //     url:'statistics',
//     //     message:' Server took too long to respond.',
//     //     delaySeconds:65*2
//     //   })
//     // })
  
    
//     // it('Error message for statistics response with status code 500 when clicking the run button of tiberias page'
//     // ,()=>{
//     //   cy.bibleClassificationRequest({
//     //     url:'statistics',
//     //     status:500,
//     //     message:' Server failed to respond.'
//     //   })
//     // })
  
//     // it('Error message for crossvalidate response with a delay of 2 minutes when clicking the run button'+
//     // ' of tiberias page',()=>{
//     //   cy.bibleClassificationRequest({
//     //     url:'crossvalidate',
//     //     message:'Cross-validation: Server took too long to respond.',
//     //     delaySeconds:65*2
//     //   })
//     // })
  
    
//     it('Error message for crossvalidate response with status code 500 when clicking the run button of tiberias page'
//     ,()=>{
//       cy.bibleClassificationRequest({
//         url:'crossvalidate',
//         status:500,
//         message:'Cross-validation: Server failed to respond.'
//       })
//     })
      
//   })