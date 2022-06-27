import express from 'express';
import config from './config'
import {router as ordenRouter} from "./football_dt/routes";

const app = express()
app.use(config.ordenUrl, ordenRouter)

app.listen(config.port, () => {
    console.log(`Example app listening on ${config.baseUrl}:${config.port}`)
})

