const adminModel = require("../models/adminModel");
const { responsReturn } = require('../utiles/respons');
const jwt = require('jsonwebtoken');
const { createToken } = require('../utiles/tokenCreate');
const bcrypt = require('bcrypt'); // Fix the typo

class authControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email });
      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          const token = await createToken({ id: admin.id, role: admin.role }); // Use await if createToken is async
          res.cookie('accessToken', token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          responsReturn(res, 200, { token, message: 'Login success' });
        } else {
          responsReturn(res, 404, { error: 'Password wrong' });
        }
      } else {
        responsReturn(res, 401, { error: 'Invalid credentials' });
      }
    } catch (error) {
      responsReturn(res, 500, { error: error.message }); // Fix typo in 'message'
    }
  };
}

module.exports = new authControllers();
