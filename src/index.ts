import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, this is your simple Express TypeScript API!');
});

// Add a route for basketball teams
interface BasketballTeam {
    id: number;
    name: string;
    city: string;
}

const basketballTeams: BasketballTeam[] = [
    { id: 1, name: 'Lakers', city: 'Los Angeles' },
    { id: 2, name: 'Celtics', city: 'Boston' },
    // Add more teams as needed
];

app.get('/teams', (req: Request, res: Response) => {
    res.json(basketballTeams);
});

app.get('/teams/:id', (req: Request, res: Response) => {
    const teamId = parseInt(req.params.id);
    const team = basketballTeams.find(team => team.id === teamId);

    if (team) {
        res.json(team);
    } else {
        res.status(404).json({ error: 'Team not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});