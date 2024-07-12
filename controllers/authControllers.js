
class AuthControllers {
  admin_login = async (req, res) => {
    console.log(req.body);
    res.send({ message: 'Login successful' });
  };
}
module.exports = new AuthControllers();
