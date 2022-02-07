import { config } from "dotenv";
config();
import express from "express";
import path from "path";
import { Fibonnaci } from "./calculate-fibonnaci";
import cors from "cors";
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname) + '/public/index.html')
});

app.get('/calculate-fibonnaci/:inputNumber', cors(), (req, res) => {
    const fibonnaci = new Fibonnaci();
    res.send({
        result: fibonnaci.calculate(parseInt(req.params.inputNumber, 10))
    });
})

const port: number = parseInt(process.env.APP_PORT, 10);
const host: string =  process.env.APP_HOST;

app.listen(port, host, () => {
    // tslint:disable-next-line:no-console
    console.log(`app service started and listening at http://${host}:${port}`);
});