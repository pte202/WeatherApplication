/**
 *
 * @param {word to format} value
 * @param {*first character uppercase} upperCase
 * @param {*separatorFromCammelCase} separator
 */
export function formatCammelCaseProperties(value, upperCase, separator) {
  separator = separator ? separator : " ";

  return upperCase
    ? value.charAt(0).toUpperCase() +
        value.slice(1).replace(/([a-z0-9])([A-Z])/g, "$1" + separator + "$2")
    : value.charAt(0) +
        value
          .slice(1)
          .replace(/([a-z0-9])([A-Z])/g, "$1" + separator + "$2")
          .toLowerCase();
}
