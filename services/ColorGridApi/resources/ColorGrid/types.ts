

export type Color = {
  colorName: string;
  id: number;
  saturation: boolean;
}

export type GetColorResponse = {
  message: string;
  data: Color[];
}