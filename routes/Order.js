import express from "express";
import { getAdminOrders, getMyOrders, getOrderDetails, paymentVerification, placeOrder, placeOrderOnline, processOrder } from "../controllers/orderController.js";

import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();


router.post("/createorder", isAuthenticated, placeOrder);

router.post("/createonlineorder", isAuthenticated, placeOrderOnline);

router.post("/paymentverification", isAuthenticated, paymentVerification);

router.get('/myorders',isAuthenticated, getMyOrders);

router.get('/order/:id', isAuthenticated, getOrderDetails);

router.get('/admin/order',isAuthenticated,authorizeAdmin, getAdminOrders);

router.get('/admin/order/:id',isAuthenticated,authorizeAdmin, processOrder);



export default router;