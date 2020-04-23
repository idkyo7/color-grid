import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import colorMock from 'services/ColorGridApi/resources/ColorGrid/mock';

const instance = axios.create({
  baseURL: process.env.API_URL,
});

if (process.env.USE_MOCK_API === 'true') {
  const mock = new MockAdapter(instance, { delayResponse: Math.random() * 2000 });

  colorMock(mock);
}

export default instance;
