const router = require('express').Router();
const rateLimit = require('express-rate-limit');
const msgModel = require('../models/msgModel');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 2,
    message: "Please Try again later"
});

// router.get('/', (req, res) => {
//     res.send("Hello");
// });

router.post('/api/contact', limiter, async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const addedMsg = await msgModel.create({
            name, email, subject, message
        });
        console.log("This msg was added successfully ", addedMsg);
        res.status(200).json({ msg: "Message Received Successfully" });
    } catch (error) {
        console.error("Error adding message:", error);
        res.status(429).json({ error: "Rate limit exceeded. Please try again later." });
    }
});

module.exports = router;
