import express from "express";
import {
  ContactUsForm,
  GetAllRestaurants,
} from "../controller/public.controller.js";

const router = express.Router();

router.post("/contact-us", ContactUsForm);

// Add this
router.get("/restaurants", GetAllRestaurants);

export default router;