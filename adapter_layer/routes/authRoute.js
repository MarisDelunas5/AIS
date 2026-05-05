import * as AuthController from '../controllers/authControllers.js'
import express from 'express'


const authRoutes = express.Router()

authRoutes.post('/Register', AuthController.registerStudent);


export default authRoutes