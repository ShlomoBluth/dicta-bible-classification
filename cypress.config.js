const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  projectId: '4brer3',
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 180000,
  failOnStatusCode: false,
  reporter: 'cypress-multi-reporters',
  retries: {
    runMode: 1,
    openMode: 0,
  },
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: '',
    LIVE_URL: 'https://tiberias.dicta.org.il/#/',
    TOOL_TESTS: true,
    REQUESTS_TESTS: true,
    RECORD_KEY: 'c445b898-a31b-456c-84cf-a5237b76d20f',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://tiberias.dicta.org.il/#/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
