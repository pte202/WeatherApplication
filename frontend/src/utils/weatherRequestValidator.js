export function isValidLocation(location) {
  const onlyLettersHyphenAndCommaRegex = "^[\\sa-zA-Z,]+$";

  return location.match(onlyLettersHyphenAndCommaRegex) ? true : false;
}
