import { useMemo } from "react";
import { TableSchema } from "../types";

export function useSlice(
  data: TableSchema[],
  recordsPerPage: number
): TableSchema[][] {
  return useMemo(() => {
    if (recordsPerPage === data.length) return [data];
    const pagesCount = Math.ceil(data.length / recordsPerPage);
    return Array(pagesCount)
      .fill(null)
      .map((el, index) => {
        return data.slice(index * recordsPerPage, recordsPerPage * (index + 1));
      });
  }, [data, recordsPerPage]);
}
