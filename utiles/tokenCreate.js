const jwt = require('jsonwebtoken');

module.exports.createToken = async (data) => {
    const token = await jwt.sign(data, process.env.SECRET, { expiresIn: '7d' })

    return token;
}
// const jwt = require('jsonwebtoken');

// module.exports.createToken = (data) => {
//     const token = jwt.sign(data, process.env.SECRET, { expiresIn: '7d' });

//     return token;
// }
