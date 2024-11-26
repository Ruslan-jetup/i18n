import { LocalizationBase } from "./localization-base-interfase";

export interface IUsersTranslation extends LocalizationBase {
  title: string;
  actions: {
    edit: string;
    delete: string;
  };
}
