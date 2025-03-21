const express = require('express');
const { validateDemoForm, submitDemoForm } = require('../controllers/demoController');

const router = express.Router();

/**
 * @swagger
 * /api/demo/submit:
 *   post:
 *     summary: Submit a demo request
 *     description: Submit a demo request with first name, last name, email, phone, preferred date, preferred time, and message.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The user's first name.
 *                 example: John
 *               lastName:
 *                 type: string
 *                 description: The user's last name.
 *                 example: Doe
 *               email:
 *                 type: string
 *                 description: The user's email address.
 *                 example: john@example.com
 *               phone:
 *                 type: string
 *                 description: The user's phone number.
 *                 example: 1234567890
 *               preferredDate:
 *                 type: string
 *                 format: date
 *                 description: The preferred date for the demo (YYYY-MM-DD).
 *                 example: 2023-10-15
 *               preferredTime:
 *                 type: string
 *                 description: The preferred time for the demo (HH:MM).
 *                 example: 14:30
 *               message:
 *                 type: string
 *                 description: The user's message.
 *                 example: I would like to book a demo for your product.
 *     responses:
 *       201:
 *         description: Demo request submitted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Demo request submitted successfully!
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
 *                         example: First name must be at least 2 characters long.
 *                       param:
 *                         type: string
 *                         example: firstName
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
router.post('/submit', validateDemoForm, submitDemoForm);

module.exports = router;