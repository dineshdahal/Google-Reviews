import axios from 'axios'

const url='http://127.0.0.1:8000/api'

export const getReviews = async () => {
    try {
      const res = await axios.get(`${url}/reviews`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };