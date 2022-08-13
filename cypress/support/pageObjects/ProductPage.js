export class ProductPage {
    getCheckoutButton(){
        return cy.get('#navbarResponsive .navbar-nav .nav-item .nav-link')
    }
    getSecondCheckout(){
        return cy.get('.btn.btn-success')
    }
    geDeliveryLocationBox(){
        return cy.get('input[id="country"]')
    }
    getCountry(){
        return cy.get('.suggestions > ul > li > a')
    }
    getTermsAgreementCheckbox(){
        return cy.get('div div #checkbox2')
    }
    getPurchaseButton(){
        return cy.get('.ng-untouched > .btn')
    }
    getSuccessMsg(){
        return cy.get('.alert')
    }
    getPriceOfAllProduct(){
        return cy.get( 'tr > td:nth-child(4) > strong')
    }
    getTotals(){
        return cy.get(' tr > td > h3 > strong')
    }

}