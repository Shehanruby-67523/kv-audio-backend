import express from "express";
import { addProduct, getProducts } from "../controllers/productController.js";
import { updateProducts } from "../controllers/usercontroller.js";

const productRouter = express.Router();

productRouter.post("/",addProduct);
productRouter.get("/",getProducts);
productRouter.put("/key",updateProducts);

export default productRouter;