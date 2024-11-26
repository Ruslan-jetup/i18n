import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { IVotingTranslation } from "./typing/voting-translation.interface";
import { IUsersTranslation } from "./typing/users-tanslation.interface";
import { votingEn } from "./translation/en/votingEn";
import { usersEn } from "./translation/en/usersEn";
import { votingUa } from "./translation/ua/votingUa";
import { usersUa } from "./translation/ua/usersUa";

export interface Translations {
  voting: IVotingTranslation;
  users: IUsersTranslation;
}

declare module "i18next" {
  interface CustomTypeOptions {
    resources: Translations;
  }
}

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      voting: votingEn,
      users: usersEn,
    },
    ua: {
      voting: votingUa,
      users: usersUa,
    },
  },
});

export default i18n;
