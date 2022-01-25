import express from "express";
import { addData } from "../Controllers/Product.js";

const Router = express.Router();

Router.post("/", addData);

export default Router;
