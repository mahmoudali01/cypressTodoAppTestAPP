const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1pv2dw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
