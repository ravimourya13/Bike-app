const db = require('../config/connection');

const User = {
    findByEmail: (email) => db.query('SELECT * FROM users WHERE email = ?', [email]),
    create: (data) => db.query('INSERT INTO users SET ?', data),
    // Others (optional)
    findAll: () => db.query('SELECT * FROM users'),
    findById: (id) => db.query('SELECT * FROM users WHERE id = ?', [id]),
};

module.exports = User;
