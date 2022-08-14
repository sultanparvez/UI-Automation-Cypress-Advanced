const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mj5izw',
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    hml: true,
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
  },
  retries:{
    //tries agian on failure while run
    runMode:1,
    //tries again in gui 
    openMode:1
    
  }
  
});
