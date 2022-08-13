const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mj5izw',
  reporter:"cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts:false,
  },
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
