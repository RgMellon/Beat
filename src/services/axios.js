import axios from 'axios';

const token =
  'BQDDtpGx_1Xy0ELU-05axY_1AiWDVFwt_MuvpirUqyUyBLufLMPsnd5DMj3kxVB-ABQVVvxD4SMEhW-pnfVQCP6ExsCJ91ZUrwgR7tMi3M7Q5aFaW4VqXyV_AIsdUIb2eqJi6IaXcjWIfbKnhH2NxyerUcZEYqxr-yIxcM56uoh6yk8uz3jr53CfijiMEEFP91BBBuh3kjucx3cNUF5gVLDGBoeH-MP5WFCZIC90Sw-BCC2GxsIqtPftZq4RXN9zncws35umajFGuQ_zwQ';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
