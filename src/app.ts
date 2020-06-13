import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const add = (a: number, b: number): number => a + b;
const name: string = 'Iqra';

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(add(5, 5))
  res.send('Hello ' + name);
});

app.listen(5000, () => console.log('Server running at port 5000 ... '));