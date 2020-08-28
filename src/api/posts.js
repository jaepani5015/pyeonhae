import axios from 'axios';

export const getUser = async () => {
    const res = await axios({
        method: 'post',
        url: 'http://3.34.200.65/login',
        data: {
            email: "pjhyl1127@gmail.com",
            password: "12341234"
        }
    });
    return res;
}