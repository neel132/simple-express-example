import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import todoRoutes from "./routes/todo.routes.js";
const app = express();

// Body Parser
app.use(express.json());

// Security headers
app.use(helmet());

// Logger
app.use(morgan('dev'));

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Routes
app.use('/api/todos', todoRoutes)

export default app;