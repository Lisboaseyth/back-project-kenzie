import express, { Application } from "express";
import { handleErrors } from "./error";
import { clientRoutes } from "./routes/client.routes";
import { loginRoutes } from "./routes/login.routes";
import { contactRoutes } from "./routes/contact.routes";

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');


const app: Application = express()

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/client", clientRoutes)
app.use("/login", loginRoutes)
app.use("/contact", contactRoutes)

app.use(handleErrors)

export default app