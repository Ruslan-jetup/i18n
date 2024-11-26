import React from "react";
import { useTranslation } from "react-i18next";

export const Voting: React.FC = () => {
  const { t } = useTranslation('voting');

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <button>{t("button.submit")}</button>
      <button>{t("button.cancel")}</button>
    </div>
  );
}
