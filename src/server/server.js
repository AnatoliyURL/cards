import express from 'express'
import ReactDom from 'react-dom/server'
import {indexTemplate} from "./indexTempale";
import {App} from "../App";

const app = express()

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDom.renderToString(App()))
    )
})

app.listen(3000, () => {
    console.log('Start server')
})