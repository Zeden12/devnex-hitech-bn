const express = require('express');
const { validateContactForm, submitContactForm } = require('../controllers/contactController');

const router = express.Router();

/**
 * @swagger
 * /api/contact/submit:
 *   post:
 *     summary: Submit a contact form
 *     description: Submit a contact form with full name, email, phone, and message.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: The user's full name.
 *                 example: GATANAZI Amin
 *               email:
 *                 type: string
 *                 description: The user's email address.
 *                 example: email@example.com
 *               phone:
 *                 type: string
 *                 description: The user's phone number.
 *                 example: 1234567890
 *               message:
 *                 type: string
 *                 description: The user's message.
 *                 example: Hello, I'm interested in Devnex HiTech Services!
 *     responses:
 *       201:
 *         description: Contact form submitted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Contact form submitted successfully!
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         example: Full name must be at least 2 characters long.
 *                       param:
 *                         type: string
 *                         example: fullName
 *                       location:
 *                         type: string
 *                         example: body
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Something went wrong.
 */
router.post('/submit', validateContactForm, submitContactForm);

module.exports = router;