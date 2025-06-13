const db = require('../config/connection');
const bcrypt = require('bcrypt');

// Get all admins
exports.getAdmins = async (req, res) => {
    try {
        const admins = await db.query('SELECT * FROM admins');
        res.json(admins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Register a new admin
exports.registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.query(
            'INSERT INTO admins (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword]
        );
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Admin login
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const results = await db.query('SELECT * FROM admins WHERE email = ?', [email]);
        const admin = results[0];

        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.json({ id: admin.id, name: admin.name, email: admin.email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
