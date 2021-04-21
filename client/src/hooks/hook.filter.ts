import { useCallback, useEffect, useState } from "react";
import { filterKeys } from "../helpers/helpers";
import { SchemaField, TableSchema } from "../types";
import { OnFilter } from "../components/FilterMenu/FilterMenu";
import { COMPARISON_METHODS_LIST } from "../settings/comparisonMethods";

export function useHeadFilter(
  data: TableSchema[],
  exceptedFields: SchemaField[]
) {
  const [head, setHead] = useState(
    (() => {
      if (!data.length) return [];
      return filterKeys(data[0], exceptedFields);
    })()
  );

  useEffect(() => {
    if (!data.length) return;
    setHead(filterKeys(data[0], exceptedFields));
  }, [data, exceptedFields]);

  return head;
}

export function useFilter(initialData: TableSchema[]) {
  const [filteredData, setFilteredData] = useState(initialData);

  const filterData: OnFilter = useCallback(
    (controlValue, methodName, field) => {
      if (!controlValue) {
        setFilteredData(initialData);
        return;
      }
      const comparisonMethod = COMPARISON_METHODS_LIST[methodName];

      setFilteredData(
        initialData.filter((tableRecord: TableSchema) => {
          return comparisonMethod(controlValue, tableRecord[field]);
        })
      );
    },
    [initialData]
  );

  return { filteredData, filterData };
}
