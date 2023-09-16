export const escapeHTML = (str: string) => str.replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
  .replaceAll('`', '&#x60;');