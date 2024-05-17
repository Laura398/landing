import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  console.log(i18n.language);

  const countries = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "fr",
      name: "Français",
    },
  ];

  return (
    <Dropdown>
      <MenuButton variant="plain" color="neutral" sx={{color: "white"}}>
        {countries.find((lng) => lng.code === i18n.language)?.name}
        <img src={`/assets/flags/${i18n.language}.png`} width="18" style={{ marginLeft: "10px" }} />
      </MenuButton>
      <Menu>
        {countries.map((lng) => {
          console.log(lng.code, i18n.language);
          
          return (
            <MenuItem
              key={lng.code}
              onClick={() => {
                i18n.changeLanguage(lng.code);
                localStorage.setItem("laura-lang", lng.code);
              }}
            >
              {lng.name}
            </MenuItem>
          );
        })}
      </Menu>
    </Dropdown>
  );
}
