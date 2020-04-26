export type Props = {
  value: string;
  isInput: boolean;
  onUpdate: (input: string) => void;
  renderProps: JSX.Element;
};
