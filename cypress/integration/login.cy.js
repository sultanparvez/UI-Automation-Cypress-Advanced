/// <reference types="cypress"/>

import HomePage from "../support/pageObjects/HomePage"
import { ProductPage } from "../support/pageObjects/ProductPage"

const homePage= new HomePage()
const productPage = new ProductPage()
describe("E-Shopping",()=>{
    before(() => {
        cy.fixture("person").then (function(person){
            cy.log(person)
            this.person = person
        })
    })

    it("login Validation",function(){  
        cy.visit("/")
        //Cypress.env('key) // to use env variable
        homePage.getNameBox().type(this.person.name)
        homePage.getGenderBox().select(this.person.gender)
        homePage.getTwoWayDataBindings().should('have.value',this.person.name)
        //Attribute Validation
        homePage.getNameBox().should('have.attr','minlength','2')
        homePage.getEntrepenurRadioButton().should('be.disabled')
        homePage.getEmployeeRadioButton().should('be.enabled')
        homePage.getShopButton().click()
        //iterate based on data
        this.person.productName.forEach(function(product){
            cy.selectProduct(product)
            })
        productPage.getCheckoutButton().click()
        var sum = 0
        productPage.getPriceOfAllProduct().each(($el,index,$list)=>{
           const amounts= $el.text()
            const prices = amounts.split(" ")
            sum = sum+Number(prices[1])
        })
        productPage.getTotals().then((element)=>{
            const TotalAmount= element.text()
            const Total = TotalAmount.split(" ")
            expect(sum).to.equal(Number(Total[1]))
        })
        productPage.getSecondCheckout().click()
        productPage.geDeliveryLocationBox().type(this.person.address)
        productPage.getCountry().click()
        // Cypress.config('defaultCommandTimeout',2000) //overwrting for specfic test
        productPage.getTermsAgreementCheckbox().click({force:true})
        productPage.getPurchaseButton().click()
        productPage.getSuccessMsg().then((element)=>{
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })       
        })
})
