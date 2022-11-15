import express from "express";

import { createProduct, createReview, deleteProduct, deleteReview, getAllProducts, getProductDetails, getReview, updateProduct } from "../controllers/productController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createProduct", isAuthenticated,authorizeAdmin,createProduct);

router.get("/getallitems", getAllProducts);

router.get("/getproductdetail/:id", getProductDetails);

router.put("/admin/product/:id",isAuthenticated,  authorizeAdmin,updateProduct);

router.delete("/admin/product/:id",isAuthenticated, authorizeAdmin, deleteProduct);

router.put("/review",isAuthenticated, createReview);

router.get("/getallreview", isAuthenticated, getReview);

router.delete("/delete",isAuthenticated, deleteReview);



export default router;
