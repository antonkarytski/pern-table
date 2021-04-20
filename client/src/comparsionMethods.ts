type ComparisonMethod = (
  controlValue: number | string,
  sourceValue: number | string
) => boolean;

type ComparisonMethodsList = {
  [key: string]: ComparisonMethod;
};

export const comparisonMethodsList: ComparisonMethodsList = {
  equal: (controlValue, sourceValue) => controlValue === sourceValue,
  contain: (controlValue, sourceValue) => {
    const normalizedControlValue = ("" + controlValue).toLowerCase();
    const normalizedSourceValue = ("" + sourceValue).toLowerCase();
    return normalizedSourceValue.includes(normalizedControlValue);
  },
  more: (controlValue, sourceValue) => controlValue < sourceValue,
  less: (controlValue, sourceValue) => controlValue > sourceValue,
};
