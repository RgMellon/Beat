import axios from 'axios';

const token =
  'BQDFpcyTPxOgCkPFohHRPWI1tqta990jWOa80--8ZsHN4G6y1bnuIw20CQHU79MISfpmW8iBS1nR0z4LGuCwFv3kYB82z1lRyj7CPgTCY7v0XjxoXc4YDdv__rtsVeKTWI0ndEw3o6M3K8-d71ikDqxcYFoVV8GHdEaAvRou9ko5DrqpPpKtmcPyMur-uXKFyLTJ01rOWoFfhxD96RwtdFOW_nyKlxyc4T0SclQJdjWEzxbECn3yUJ6l1Uj9TWwfhWebAMzMFDSrzZjCwQ';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
