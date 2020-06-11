import axios from 'axios';

const token =
  'BQC1qODQZwRIvW3BxV41gSsUUuJD2zjF6QcdmZfBgBsM7aGSp3pzsec4OfGkWqGCD9N0llFEx4dl80bvEvULIuzvvhcou0aPUkUpzPspH3V8ioq4bFz5yCAXdKdcL9JhNmO0ZbsE7mGTd-mfz5h3vi_uiXFmF1taqFUCLGfIJhJpremM6TQl3MJljv6a89hO1lwloXJVBuXO-FBkvSkDdN2rN37H83J859Gbq6mB4dvwHJGI0ULSXGrstxDI5TtiMFKWAbhFIbM8Abi-xg';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
