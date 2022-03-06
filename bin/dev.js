const webpack = require('webpack')
const [ webpackClientConfig, webpackServerConfig ] = require('../webpack.config')
const nodemon = require('nodemon')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')

const hmrServer = express()
const clineCompiler = webpack(webpackClientConfig)

hmrServer.use(webpackDevMiddleware(clineCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    /*noInfo: true,
    watchOptions: {
        ignore: /dist/
    },*/
    writeToDisk: true,
    stats: 'errors-only'
}))

hmrServer.use(webpackHotMiddleware(clineCompiler, {
    path: '/static/__webpack_hmr'
}))

hmrServer.listen(3001, () => {
    console.log('HMR server successful')
})

const compiler = webpack(webpackServerConfig)

compiler.run((err) => {
    if (err) {
        console.log('ERROR', err)
    }

    compiler.watch({}, (err) => {
        if (err) {
            console.log('ERROR', err)
        }
        console.log('Dont have errors')
    })

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client')
        ]
    })
})