import express from "express"
import cors from "cors"
import rateLimit from "express-rate-limit"

import connectToDatabase from "./Configs/db.js"
import ProductRoutes from "./Routes/ProductRoutes.js"
import ReviewRoutes from "./Routes/ReviewRoutes.js"


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());    

connectToDatabase();

// Rate limiting
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

//Routes
app.use("/api/products", ProductRoutes);
app.use("/api/reviews", ReviewRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})