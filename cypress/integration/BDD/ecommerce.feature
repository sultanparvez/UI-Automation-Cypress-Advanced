Feature: end to end E-commerce validation

    Regression test

    Scenario: Filling the from to shop

    Given I open E-coommerce Page
    When I fill the form details
    |namme | gender |
    | Levi | Male |
    Then validate the name

    @ProductSelect
    Scenario: Ecommerce products delivery
    Given I open E-coommerce Page
    When I add items to cart
    And I validate the total prices
    Then select the country and verify success message

