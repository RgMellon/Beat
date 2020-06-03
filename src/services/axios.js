import axios from 'axios';

const token =
  'BQCiRVlkkrBImdIFz6c4C0YsaI_9xy6dhm2tvNJK8dAaQJwjPDD203UryWPlETCOCwPtIX95GfYn5EbdOn6k5kuDWcnuKm7k2Ng2clX_IBt1pZcNxHJiq_7i7fJN0SsV0gUJaQr-7qfxfARarI4OFS5nfH_uohCV2SsvjGePOJUH0XiZEdC4HSVKxB3p2b9r7l5hcTnteWSWKlFb9Mtg4Gg6VkE3In4H0I1aHlu0enNuh24zf02kFxW_M7IiWk9o4P98O23A5WEh61qHdQ';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
