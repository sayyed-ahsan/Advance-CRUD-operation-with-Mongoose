import express, { Request, Response } from "express";
import cors from "cors";
import { StudentRout } from "./app/modules/student.route";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/students", StudentRout);

const getaController = (req: Request, res: Response) => {
  res.send(`Hello `);
};

app.get("/", getaController);

export default app;
