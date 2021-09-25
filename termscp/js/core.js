/**
 * @description return navigator language. If language is not supported default will be returned
 * @returns {string}
 */

function getNavigatorLanguage() {
  const lang = navigator.language.split(/[-_]/)[0] || "en";
  if (!languageSupported(lang)) {
    return "en";
  }
  return lang;
}

/**
 * @description check whether provided language is supported by the website
 * @param {string} lang
 * @returns {boolean}
 */
function languageSupported(lang) {
  return ["en", "zh"].includes(lang);
}
