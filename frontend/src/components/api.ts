import axios from 'axios';
import { toCamelCase, toSnakeCase } from 'components/utils/caseConverter';

const api = axios.create();

// Request interceptor - convert to snake_case
api.interceptors.request.use(config => {
  if (config.data) {
    config.data = toSnakeCase(config.data);
  }
  return config;
});

// Response interceptor - convert to camelCase
api.interceptors.response.use(response => {
  if (response.data) {
    response.data = toCamelCase(response.data);
  }
  return response;
});

export default api;
