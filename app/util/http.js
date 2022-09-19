import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';

// Funcion que consume el endpoint de users y retorno la data.
export async function fetchUsers() {
    const response = await axios.get(URL + '/users');

    return response.data;
};

// Funcion que consume el endpoint de posteos y retorno la data.
export async function fetchPosts() {
    const response = await axios.get(URL + '/posts');

    return response.data;
};

// Funcion que consume el endpoint de commentarios de un posteo
// envio por parametro el id del post.

export async function fetchCommentsByPost(id) {
    const response = await axios.get(URL + `/posts/${id}/comments`);

    return response.data;
};