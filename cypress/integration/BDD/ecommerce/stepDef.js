/// <reference types="cypress"/>
import {Before, Given, When , And,  Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage"
import { ProductPage } from "../../../support/pageObjects/ProductPage"

const homePage= new HomePage()
const productPage = new ProductPage()
let name,gender
Before({ tags: "@ProductSelect" },() =>{
    cy.fixture("person").then (function(person){
        cy.log(person)
        this.person = person
    })
  });

Given('I open E-coommerce Page',()=>{
    cy.visit("/")
})
When('I add items to cart',function(){
    homePage.getShopButton().click()
        //iterate based on data
        this.person.productName.forEach(function(product){
            cy.selectProduct(product)
            })
        productPage.getCheckoutButton().click()
})
And('I validate the total prices',()=>{
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
})
Then('select the country and verify success message',function(){
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

When('I fill the form details',function(personTwo){
    name = personTwo.rawTable[1][0]
    gender = personTwo.rawTable[1][1]
    homePage.getNameBox().type(name)
    homePage.getGenderBox().select(gender)
    
})

Then('validate the name',function(){
    homePage.getTwoWayDataBindings().should('have.value',name)
    homePage.getNameBox().should('have.attr','minlength','2')
    homePage.getEntrepenurRadioButton().should('be.disabled')
    homePage.getEmployeeRadioButton().should('be.enabled')
})