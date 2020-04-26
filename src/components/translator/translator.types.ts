import { Langs } from "./languageBar/languageBar.types";

export type ActionType = {
  type: Langs.ENGLISH | Langs.EGG;
};

export type StateType = {
  translator: (seggtance: string) => void;
};
