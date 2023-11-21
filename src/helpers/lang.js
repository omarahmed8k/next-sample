import i18n from "./i18n";

export function checkFixLang(lang) {
  localStorage.setItem("lang", lang);
  if (lang === "en") {
    document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    document.getElementsByTagName("body")[0].setAttribute("dir", "ltr");
  }

  if (lang === "ar") {
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
  }
}

export function switchLang(lang) {
  i18n.changeLanguage(lang);
  localStorage.setItem("lang", lang);
  document.getElementsByTagName("html")[0].setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.getElementsByTagName("body")[0].setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.getElementsByTagName("html")[0].setAttribute("lang", lang);
}
