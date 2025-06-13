// pages/api/register.js
const { registerUser } = require('../../controllers/userController');

export default function handler(req, res) {
  if (req.method === 'POST') {
    return registerUser(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
