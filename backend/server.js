import express from 'express'; 
import authRoutes from "./routes/auth.routes.js"; 
import cors from 'cors'; 

const app = express(); 

// app.get("/", (req, res) => {
//     res.send("Server is ready");
// })

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
})); 

app.use(express.json()); 

app.use("/api/auth", authRoutes); 

app.listen(5000, ()=> {
    console.log("Server started at http://localhost:5000");
}); 