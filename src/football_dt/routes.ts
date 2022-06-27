import express from "express";
import { orden } from "./controller";

export const router = express.Router()

router.get('', orden)