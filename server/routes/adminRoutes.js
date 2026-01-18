import express from "express";
import { adminLogin, approveCommentById, deleteCommentById,
getAllBlogsAdmin, getAllComments, getDashboard } from "../controllers/adminController.js";
import auth from "../middleware/auth.js";

const adminRouter =express.Router();

adminRouter.post("/login",adminLogin);
adminRouter.get("/comments",auth ,getAllComments);//path that give all comments
adminRouter.get("/blogs",auth ,getAllBlogsAdmin);//Give blog list for admin
adminRouter.post("/delete-comment",auth ,deleteCommentById);//Give blog list for admin
adminRouter.post("/approve-comment",auth ,approveCommentById);//Give approve comments
adminRouter.get("/dashboard", auth, getDashboard);;//Give approve comments


export default adminRouter;