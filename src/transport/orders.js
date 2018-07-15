import axios from 'axios';

export default axios.create({
  baseURL: 'https://burger-hut.firebaseio.com/'
});
