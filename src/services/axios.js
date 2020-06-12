import axios from 'axios';

const token =
  'BQC37r3IMYMT7ufar6j_h1TgL57gBRQ5v_rKtsFlVPooTxdsyepmM0bDwJsMwD-IjfSOXJ5uoS6AMBiCHoLmZ4k8kfRTnOzLfi17IgNJUSsVfUv19rsRK-A4XcZatoSp8EYixmP_9sei7muJBNKQbEg84Drt04eYwsWuE9_Avo-vqZDyoTgv5XWzi8a1uYRYFle_zZm42hjnpliAlIo4tUAACwnpCNFhBs_TnzBiNsLjiltXrRxoHyyj4lO1lfBcu8DpKWZojVIB_yvL5w';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
