// const express = require('express'); // traditional way
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve(); // this is for deployment

app.use(express.json()); //allows to parse json data in request body, middleware

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") { // this is for deployment
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get(/(.*)/, (req, res) => { // anything we visit, render app (except /api/products)
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log('server started at http://localhost:' + PORT);
});
