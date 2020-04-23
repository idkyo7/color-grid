import client from '../../http-client';
import { GetColorResponse } from './types';

// here's the action method of fetching my color data by point through some url

const getColor = async (): Promise<GetColorResponse> => {
  const response = await client.get('/colors');

  return response.data;
};

export default {
  getColor,
};
