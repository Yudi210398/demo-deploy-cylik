import express from "express";
import { dataUSer } from "../controller/controllerAdmin.js";

const routerAdmin = express.Router();

routerAdmin.get("/", dataUSer);

export default routerAdmin;
