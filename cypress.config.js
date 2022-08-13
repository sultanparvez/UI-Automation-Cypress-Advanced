const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://rahulshettyacademy.com/angularpractice/",
    defaultCommandTimeout : 8000,
    pageLoadTimeout : 10000
  },
  env :{
    //Custom enviromnet variable here
  }
});
