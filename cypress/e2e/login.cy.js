/// <reference types="cypress"/>

describe("E-Shopping",()=>{
    before(() => {
        cy.fixture("person").then (function(person){
            cy.log(person)
            this.person = person
        })
    })

    it("login Validation",function(){
        cy.visit("/")
        cy.get('form .form-group input[name="name"]').type(this.person.name)
        cy.get('#exampleFormControlSelect1').select(this.person.gender)
        cy.get(' div > h4 > input[name="name"]').should('have.value',this.person.name)
        //Attribute Validation
        cy.get('form .form-group input[name="name"]').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get('#inlineRadio2').should('be.enabled')
        cy.get(' a[href="/angularpractice/shop"]').click()
        cy.selectProduct("Blackberry")
  })
   
})
