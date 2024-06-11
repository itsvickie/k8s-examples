import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/health-check", (req: Request, res: Response) => {
  return res.status(200).send("It's all right!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});