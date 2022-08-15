const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "cypress/cucumber-json",  
reportPath: "./reports/cucumber-htmlreport.html",
metadata: {
browser: {
name: "chrome",
version: "104",
},
device: "Parvez-Personal",
platform: {
name: "windows",
version: "10",
}
},
customData:{
    title: "UI-Automation-Report"

}
});