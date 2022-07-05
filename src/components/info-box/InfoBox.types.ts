export interface IInfoBox {
  title: string;
  isUp?: boolean;
  gainAmount: string;
  infoAmount: number;
  chartData: { data: number[] }[];
  chartColor: string;
}
