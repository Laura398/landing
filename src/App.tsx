import { useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./views/language-selector/LangageSelector";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="main-container">
        <div className="landing-page">
          <header>
            <div className="container">
              <a href="#" className="logo">
                <img src="/assets/logo.png" alt="logo" width={80} />
              </a>
              <ul className="links">
                <li>
                  <a
                    href="https://www.info.lauramathieu.com"
                    style={{ color: "white" }}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <LanguageSelector />
                </li>
              </ul>
            </div>
          </header>
          <div className="content">
            <div className="container">
              <div className="info">
                <img className="photo" src="/assets/photo.png" alt="photo" />
                <h1>Laura Mathieu</h1>
                <h2>{t("dev")}</h2>
                <a href="https://www.info.lauramathieu.com">
                  <button>{t("discover")}</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
