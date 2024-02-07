"use strict";
const { defineConfig } = require("cypress");
module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://127.0.0.1:3000',
        // https://docs.cypress.io/guides/references/configuration
        experimentalStudio: true,
        // https://docs.cypress.io/guides/references/cypress-studio#__docusaurus_skipToContent_fallback
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
