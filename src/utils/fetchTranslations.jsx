// eslint-disable-next-line consistent-return
export function fetchTranslations(lang, translations) {
  if (translations) {
    const { ar, en } = translations;
    if (lang === 'ar') {
      return ar;
    }
    return en;
  }
}
