if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

const express = require('express')
const webpack = require('webpack')
const webpackConfig =
  process.env.NODE_ENV === 'testing'
    ? require('./webpack.prod.conf')
    : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || 8080
// automatically open browser, if not set will be false
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', compilation => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

const uri = `http://localhost:${port}`

let _resolve
const readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log(`> Listening at ${uri}\n`)
  _resolve()
})

const server = app.listen(port, '0.0.0.0')

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
