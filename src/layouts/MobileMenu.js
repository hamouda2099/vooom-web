import Link from "next/link";
import { useState } from "react";
import LocaleSwitcher from "./../components/locale-switcher";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
const MobileMenu = () => {
  const router = useRouter();
  const { t } = useTranslation("");
  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);
  const onClick = (e) => {
    const body = document.querySelector("body");
    body.classList.toggle("active");
    e.preventDefault();
  };
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) => (value === activeMenu ? "active" : "");
  return (
    <ul>
      <li>
        <Link href="/">{t("header.Home")}</Link>
      </li>
      <li>
        <Link href="about">{t("header.About")}</Link>
      </li>
      <li>
        <Link href="services">{t("header.Services")}</Link>
      </li>
      <li>
        <Link href="become-partner">{t("header.Vendor")}</Link>
      </li>
      <li>
        <Link href="contacts">{t("header.Contacts")}</Link>
      </li>
      <li> <LocaleSwitcher /></li>
    </ul>
  );
};
export default MobileMenu;
