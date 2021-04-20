import React, { useState, useEffect } from "react";
import { SchemaField, TableSchema } from "../../types";
import classes from "./Table.module.scss";
import { useHeadFilter } from "../../hooks/hook.filter";
import ButtonsSet from "../Buttons/ButtonsSet";
import { useSlice } from "../../hooks/hook.data";

export interface TableProps {
  data: TableSchema[];
  renderSettings: {
    exceptedFields: SchemaField[];
    recordsPerPage: number;
    usePagination: boolean;
  };
}

export default function Table({
  data,
  renderSettings: {
    exceptedFields,
    recordsPerPage,
    usePagination: isUsePagination,
  },
}: TableProps) {
  const [page, setPage] = useState(0);
  const wordsToRender = useSlice(
    data,
    isUsePagination ? recordsPerPage : data.length
  );
  const head = useHeadFilter(data, exceptedFields);

  useEffect(() => {
    const pagesCount = Math.ceil(data.length / recordsPerPage);
    if (page + 1 > pagesCount) setPage(pagesCount);
  }, [data, recordsPerPage, page]);

  return (
    <div className={classes.TableWrap}>
      <div className={classes.TableContainer}>
        <table className={classes.Table}>
          <thead>
            <tr>
              {head.map((key, index) => {
                return <th key={key + index}>{key}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {wordsToRender[page]?.map((tableRecord, index) => {
              return (
                <tr key={"row" + tableRecord.id + index}>
                  {head.map((headName) => {
                    return (
                      <td key={`${tableRecord.id}${headName}${index}`}>
                        {tableRecord[headName as SchemaField]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {isUsePagination ? (
        <ButtonsSet
          buttonsCount={wordsToRender.length}
          onClick={(index) => setPage(index)}
          className={classes.Pagination}
          activeIndex={page}
          classes={{
            button: classes.PaginationButton,
            buttonActive: classes.Active,
          }}
        />
      ) : null}
    </div>
  );
}
