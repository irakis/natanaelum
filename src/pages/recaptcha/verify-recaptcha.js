import axios from "axios";

const VerifyRecaptcha = async (data) => {
  try {
    const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_SECRET_KEY_RECAPTCHA}&response=${data.token}`
    );
    if (response.data.success) {
      //response.send('verification positive');
      data.action('verification positive')

    } else {
        //response.send('verification negative');;
        data.action('verification negative');
    }
  } catch (error) {
        console.log(error);
  }
};

export default VerifyRecaptcha;