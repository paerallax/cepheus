require('babel-register')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/end-to-end/specs'],
  output_folder: 'test/end-to-end/reports',
  custom_assertions_path: ['test/end-to-end/custom-assertions'],

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL:
          'http://localhost:' + (process.env.PORT || 8080)
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless', 'no-sandbox', 'disable-gpu']
        }
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
