class HomePage{

    getNameBox(){

        return cy.get('form .form-group input[name="name"]')
    }
    getGenderBox(){
        return cy.get('#exampleFormControlSelect1')
    }
   getTwoWayDataBindings(){
        return cy.get(' div > h4 > input[name="name"]')
    }
    getEntrepenurRadioButton(){
        return cy.get('#inlineRadio3')
    }
    getEmployeeRadioButton(){
        return cy.get('#inlineRadio2')
    }
    getShopButton(){
        return cy.get(' a[href="/angularpractice/shop"]')
    }

}
export default HomePage;