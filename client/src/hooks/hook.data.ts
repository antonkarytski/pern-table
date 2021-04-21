import { useCallback, useEffect, useMemo, useState } from "react";
import { TableSchema } from "../types";
import { REQUEST_HEAD, SERVER } from "../settings/server";
import { getDateFromFullDate } from "../helpers/helpers";

export function useDataRequest() {
  const [data, setData] = useState([]);
  const [onLoading, setOnLoading] = useState(false);
  const [onError, setOnError] = useState(false);

  const getData = useCallback(async () => {
    setOnError(false);
    setOnLoading(true);
    const rawResponse = await fetch(
      `${SERVER}/api/data/allrecords`,
      REQUEST_HEAD
    );
    if (rawResponse.ok) {
      const response = await rawResponse.json();
      setData(response);
    } else {
      setOnError(true);
    }
    setOnLoading(false);
  }, []);

  return { data, getData, onLoading, onError };
}

export function useServerData() {
  const { getData, data: rawData, onLoading, onError } = useDataRequest();
  const data = useMemo(() => {
    return rawData.map(({ date, ...restProps }: TableSchema) => {
      return { ...restProps, date: getDateFromFullDate(date) };
    });
  }, [rawData]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, onLoading, onError };
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
