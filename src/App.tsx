import React from "react";
import { Voting } from "./components/voting";
import { Users } from "./components/users";
import "./i18n/i18n";
import { Switch } from "antd";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <div>
      <Switch
        onChange={() =>
          i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua")
        }
        checkedChildren="Ук"
        unCheckedChildren="En"
      />
      <Voting />
      <Users />
    </div>
  );
};

export default App;
