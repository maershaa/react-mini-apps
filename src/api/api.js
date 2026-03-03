import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54316467-1c8c04d8c56deb65224177ffe';

async function getImages(qwery = '', page = 1) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: qwery,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export { getImages };
