const { body, validationResult } = require('express-validator');
const Demo = require('../models/Demo');

exports.validateDemoForm = [
  body('firstName')
    .notEmpty().withMessage('First name is required')
    .isLength({ min: 2 }).withMessage('First name must be at least 2 characters long'),

  body('lastName')
    .notEmpty().withMessage('Last name is required')
    .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters long'),

  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email address'),

  body('phone')
    .notEmpty().withMessage('Phone number is required')
    .isMobilePhone().withMessage('Invalid phone number'),

  body('preferredDate')
    .notEmpty().withMessage('Preferred date is required')
    .isISO8601().withMessage('Preferred date must be in YYYY-MM-DD format'),

  body('preferredTime')
    .notEmpty().withMessage('Preferred time is required')
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('Preferred time must be in HH:MM format'),

  body('message')
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10 }).withMessage('Message must be at least 5 characters long'),
];

exports.submitDemoForm = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, phone, preferredDate, preferredTime, message } = req.body;

  try {
    const newDemo = new Demo({ firstName, lastName, email, phone, preferredDate, preferredTime, message });
    await newDemo.save();
    res.status(201).json({ message: 'Demo request submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};