import axios from 'axios';
const api = 'https://jsonplaceholder.typicode.com';

export function getAllPost() {
   return axios.get(`${api}/posts`);
}

export function getPost(id) {
    return axios.get(`${api}/posts/${id}`);
}

export function getUserBy(id) {
    return axios.get(`${api}/users/${id}`);
}

export function getCommentsBy(id) {
    return axios.get(`${api}/comments?postId=${id}`);
}
