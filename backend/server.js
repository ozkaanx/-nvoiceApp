import express from "express";
import cors from "cors";
import productRoutes from "./Routes/PrdocutRoute.js";

const app = express();
app.use(cors());
app.use(express.json());


app.use("/product", productRoutes);

app.listen(3001, () => {
  console.log("Server running...");
});
