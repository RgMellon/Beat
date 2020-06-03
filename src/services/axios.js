import axios from 'axios';

const token =
  'BQDknl_AYSKV6PEwonb5Y6zQeoEPPNe-QKKtULMMM9fa3is2HXlZbN5M5HpZyxQ-aiSHyRpiL1ti2OYcD4wet8bOM_rwRoCt-mFOEpGS7k7RpFd6vLfpia8yUysXLzc_DFA807uHpIPdUBLcE30HK19-T3iQ1N_mEZYnkZVNFo5H_C5tF6fYx4haUsUgz8Mj5RZgn0ZUotMM8WVO-8P_r9vBxp4dWF9MEdSnmiCpAZH8tju8CB3A3mwWVcoNsZCXbonHLeLOEqxCg5S1og';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
