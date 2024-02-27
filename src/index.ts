import express, { Request, Response } from "express";
import { conn } from './dbconn';

const app = express();
const port = 3000;

app.use(express.json());

// Your existing route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, this is your simple Express TypeScript API!');
});

app.get("/users", (req, res) => {
    conn.query("select * from User", (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});