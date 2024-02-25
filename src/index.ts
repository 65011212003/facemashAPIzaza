import { NextFunction, Request, Response } from "express";
const express = require("express");

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, this is your simple Express TypeScript API!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
