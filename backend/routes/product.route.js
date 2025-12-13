import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

// get all
router.get("/", getProducts);

// create product
router.post("/", createProduct);

// update product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

export default router;