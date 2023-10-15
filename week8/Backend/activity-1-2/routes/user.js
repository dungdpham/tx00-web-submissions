const express = require('express');

// controller functions
const { loginUser, signupUser } = require('../controllers/userController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterUserRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       required:
 *         - name
 *         - email
 *         - password
 *       example:
 *         name: Bob
 *         email: bob@gmail.com
 *         password: 4wa95#Cf-
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginUserRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       required:
 *         - email
 *         - password
 *       example:
 *         email: bob@gmail.com
 *         password: 4wa95#Cf-
 */

// Define User routes first
/**
 * @swagger
 * tags:
 *   - name: "User"
 *     description: "Endpoints related to user management"
 */

// signup route
/**
 * @swagger
 * /user/signup:
 *   post:
 *     summary: Signup User
 *     operationId: SignupUser
 *     tags:
 *       - Authentication
 *     requestBody:
 *       description: User signup data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: john_doe
 *               email: john@example.com
 *               password: 4wa95#Cf-
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid user data
 */
router.post('/signup', signupUser);

// login route
/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login User
 *     operationId: LoginUser
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Bearer token
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: User login data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: susan@gmail.com
 *               password: 4wa95#Cf-
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Invalid user credentials
 */
router.post('/login', loginUser);

module.exports = router;
