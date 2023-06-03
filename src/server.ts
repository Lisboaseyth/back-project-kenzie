import app from "./app";
import { AppDataSource } from "./data-source";

const PORT: number = 3000
const runningMsg: string = `Server running on http://localhost:${PORT}`;

AppDataSource.initialize().then( async () => {
    console.log('Database connected');

    app.listen(PORT,() => {
        console.log(runningMsg);
    })
}).catch(err => {
    console.log(err);
    
})