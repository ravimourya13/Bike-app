const db = require('../config/connection');

const Admin = {
    findByEmail: (email) => db.query('SELECT * FROM admins WHERE email = ?', [email]),
    create: (data) => db.query('INSERT INTO admins SET ?', data),
    // Others (optional)
    findAll: () => db.query('SELECT * FROM admins'),
    findById: (id) => db.query('SELECT * FROM admins WHERE id = ?', [id]),
};

module.exports = Admin;
