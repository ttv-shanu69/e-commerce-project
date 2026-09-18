import { app } from './app.js'
import dotenv from 'dotenv'
dotenv.config();

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is runnin at port ${process.env.PORT}`)
});

app.get('/', (req, res) => {
    res.send("backend server is very fast runnin!")
});