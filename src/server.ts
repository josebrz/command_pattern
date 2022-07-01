import express, { Request, Response } from 'express';
import config from './config'
import {router as ordenRouter} from "./football_dt/routes";
import path from "path";

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static("public"));

app.set('views', path.join(__dirname,"..",'views'));
app.set('view engine', 'ejs');


app.get("/", (req: Request, res: Response) => {
    res.render("pages/home")
})

app.use(config.ordenUrl, ordenRouter)

app.listen(config.port, () => {
    console.log(`Example app listening on ${config.baseUrl}:${config.port}`)
})

