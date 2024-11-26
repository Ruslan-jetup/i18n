import { LocalizationBase } from "./localization-base-interfase";

export interface IVotingTranslation extends LocalizationBase {
  welcome: string;
  button: {
    submit: string;
    cancel: string;
  };
}
