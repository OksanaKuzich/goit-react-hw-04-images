import axios from 'axios';

const KEY = '30075505-2d85101d237fc7d98fa57be1d';

export const fetchImages = async (name, page) => {
  const URL = `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const responce = await axios(URL);
    return responce.data.hits;
  } catch (error) {
    console.log(error.message);
  }
};
