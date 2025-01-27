import express from "express";
import { addInquiry, getInquiries, updateInquiry, deleteInquiry } from "../controllers/inquiryController.js";

const inquiryRouter = express.Router();

inquiryRouter.post("/", addInquiry);
inquiryRouter.get("/", getInquiries);
inquiryRouter.put("/:id", updateInquiry);
inquiryRouter.delete("/:id", deleteInquiry);

export default inquiryRouter;