export function setFirstLetterToCapital(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
}

export function filterKeys(
  object: { [key: string]: unknown },
  exceptedFields: string[]
) {
  return Object.keys(object).filter(
    (fieldName) => !exceptedFields.includes(fieldName)
  );
}
