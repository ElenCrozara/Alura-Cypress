const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.alura.com.br',
    viewportWidth:  1920,
    viewportHeight:  1080,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'Cypress/report/mochawesome-report',
      overwrite: true,
      html: true,
      json: false,
      timestamp: 'mmddyyyy_HHMMss'
    }
  },
});
