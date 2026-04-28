import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import todoRoutes from "./routes/todo.routes.js";
import todoViewRoutes from "./routes/todo.view.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { notFound } from "./middlewares/notFound.middleware.js";
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

// static css
app.use(express.static('src/public'));

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

// API Routes
app.use('/api/todos', todoRoutes)

// UI Routes
app.use('/todos', todoViewRoutes)

// 404
app.use(notFound);
// Handling Error
app.use(errorHandler);

export default app;