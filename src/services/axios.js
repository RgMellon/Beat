import axios from 'axios';

const token =
  'BQCYqNbh9OGMSm5wpURRYkOb81cyCxoY0pd8K2HMDEAlu7WwVTTKcyZjXmRkpNttVdZ3L9J8Whj9oE-HkvNkQa0dltCj6lQhiMAgJ7Htins-fUsK0ObmR4B-YH08xk4woRDiifkVJVdMVnMiYs_uWsZEGlaSb44XAm6CDZcmzYPOj7hw9VQNxBiIOjtf8AcBAm5xmB6kuvajCEFLRuFA1PROvT576WkIJREToQxrVZVBX3WLfPquWUbXWUSS-UtK0ZURJr52HAqkEdNQJg';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
