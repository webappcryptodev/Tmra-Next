export interface IFilter {
  value: string;
  handleChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectData: string[];
  placeholder?: string;
}
