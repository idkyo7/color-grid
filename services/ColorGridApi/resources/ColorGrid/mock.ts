import MockAdapter from 'axios-mock-adapter';
import faker from 'faker';

import {Color, GetColorResponse } from './types';

const colorName = [
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Red',
  'White',
  'Green',
  'Yellow',
  'Teal',
  'Purple',
  'Brown',
  'Aqua',
  'Beige',
  'Black',
];

export const generateColor = (): Color => {
  const name = faker.random.arrayElement(colorName)
  const id = faker.random.number({min: 1, max: 999})
  const saturation = faker.random.boolean()

  return {
    id,
    colorName: name,
    saturation
  }
}



const productMock = (mock: InstanceType<typeof MockAdapter>): void => {

  mock.onGet('/colors').reply(() => {
    const limit = 20;

    const response: GetColorResponse = {
      message: 'success',
      data: Array.from({ length: limit }, generateColor),
    };

    return [200, response];
  });
};

export default productMock;
