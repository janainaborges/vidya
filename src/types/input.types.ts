export interface IInputSearch {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size: string
}
