import client from '../../http-client';
import {
  GetColorResponse,
} from './types';


const getColor = async (): Promise<GetColorResponse> => {
  const response = await client.get('/colors');

  return response.data;
};

export default {
  getColor,
};
