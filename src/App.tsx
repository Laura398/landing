import { useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./views/language-selector/LangageSelector";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="main-container">
        <div className="blur-circle1"></div>
        <div className="landing-page">
          <header>
            <div className="container">
              <a href="#" className="logo">
                <img src="./logo.png" alt="logo" width={80} />
              </a>
              <ul className="links">
                <li>Portfolio</li>
                <li><LanguageSelector /></li>
              </ul>
            </div>
          </header>
          <div className="content">
            <div className="container">
              <div className="info">
                <img className="photo" src="/assets/photo.png" alt="photo" />
                <h1>Laura Mathieu</h1>
                <h2>{t('dev')}</h2>
                <button>{t('discover')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <LanguageSelector />
      </div>
      <div className="App">
        <header className="App-header">
          <Avatar
            src="/assets/photo.png"
            sx={{
              "--Avatar-size": "8rem",
              border: "1px solid white",
              margin: "auto",
            }}
          />
          <Typography level="h1" mt={5}>
            Laura Mathieu
          </Typography>
          <Typography level="h3" mb={5}>
            {t("dev")}
          </Typography>
          <a href="https://www.portfolio.lauramathieu.com">
            <Button color="neutral" sx={{ m: "5" }}>
              {t("discover")}
            </Button>
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
