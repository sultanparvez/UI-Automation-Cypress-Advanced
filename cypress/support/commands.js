
Cypress.Commands.add('selectProduct', (ProductName) => {  
cy.get('h4.card-title').each(($el,index,$list)=>{
    if( $el.text().includes(ProductName)){
     cy.get('button.btn.btn-info').eq(index).click()
    }
 })
})
