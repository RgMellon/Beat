import axios from 'axios';

const token =
  'BQD3X1QrbnrGfbqnXVteXFWq9QdmoByjJBuwh_3lnP0qBEdKdKW8ywgClX7cqsrMidvYfpFdp1HkhAGO_1m4Grf9pqvB16Wm4kKZtbioTrWKWLrorvdas9How1Uwa2Y018nMTXA1NyFYcvAzp0H3fDLzY6LQdp2BJsgYCeUao0H22lfgnfXyYqOgGaVgzFnT8n_cRC4e4iM99X0dyrzHuAJ5hz1LCCIn6BJQBvP2W6Y4Ct2UToDc5-46Uq4_iYjN-ApMAic-n97l0vtDxA';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
