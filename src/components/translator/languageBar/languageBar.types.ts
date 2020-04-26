export enum Langs {
  ENGLISH = "english",
  EGG = "egg",
}

export type Props = {
  onChange: (type: Langs) => void;
};
