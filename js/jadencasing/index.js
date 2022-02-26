export function toJadenCase(str) {
  let phrase = str.split(" ");
  const regex = /^\w/g;
  let jadenCase = phrase.map(word => word = word.replace(regex, () => word[0].toUpperCase()));
  return jadenCase.join(' ');
}
