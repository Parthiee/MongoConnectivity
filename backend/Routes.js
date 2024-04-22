const express = require('express');
const db = require('../Model/Model');

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

router.post('/home', async (req, res) => {
    try {
        console.log("You requested this: ", req.body);
        const { username, password } = req.body;

        const database = await db();
        const collection = database.collection('users');
        const user = await collection.findOne({ name :username });
      
        if (!user) {
            return res.status(404).json({ message: "User does not exist!" });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid Password!" });
        }

        return res.json({ message: "User logged in!" });
    } catch (e) {
        console.error('Error during login:', e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
