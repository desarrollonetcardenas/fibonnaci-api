"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const calculate_fibonnaci_1 = require("./calculate-fibonnaci");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname) + '/public/index.html');
});
app.get('/calculate-fibonnaci/:inputNumber', (0, cors_1.default)(), (req, res) => {
    const fibonnaci = new calculate_fibonnaci_1.Fibonnaci();
    res.send({
        result: fibonnaci.calculate(parseInt(req.params.inputNumber, 10))
    });
});
const port = parseInt(process.env.APP_PORT, 10);
const host = process.env.APP_HOST;
app.listen(port, host, () => {
    // tslint:disable-next-line:no-console
    console.log(`app service started and listening at http://${host}:${port}`);
});
//# sourceMappingURL=index.js.map