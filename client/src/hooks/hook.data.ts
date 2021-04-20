import { useMemo } from "react";
import { TableSchema } from "../types";

export function useDate() {
  const server =
  const request = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  fetch(`${SERVER}/words?page=${page}&group=${group}`)
}

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
