const axios = require('axios');

const checkRecaptcha = async (req, res) => {
    const { token, inputVal } = req.body;
    try {
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${proess.env.REACT_APP_SECRET_KEY_RECAPTCHA}&response=${token}`
        );
        if(response.data.success) {
            res.send('Human');
        } else {
            response.send('Robot')
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error veifyinf recaptcha');
    }
};

module.exports = checkRecaptcha;