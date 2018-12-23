import axios from 'axios'
const api = 'https://jsonplaceholder.typicode.com';

export function getAllPost() {
   return axios.get(`${api}/posts`);
}

export function getPost(id) {
    return axios.get(`${api}/posts/${id}`);
}
