import React from "react";
import { useTranslation } from "react-i18next";

export const Users: React.FC = () => {
  const { t } = useTranslation('users');

  return (
    <div>
      <h1>{t("title")}</h1>
      <button>{t("actions.edit")}</button>
      <button>{t("actions.delete")}</button>
    </div>
  )
}
