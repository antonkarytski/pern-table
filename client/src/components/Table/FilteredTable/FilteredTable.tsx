import React from "react";
import Table, { TableProps } from "../Table";
import FilterMenu from "../../FilterMenu/FilterMenu";
import { SchemaField } from "../../../types";
import { useFilter, useHeadFilter } from "../../../hooks/hook.filter";
import classes from "./FilteredTable.module.scss";

interface FilteredTableProps extends TableProps {
  filterSettings: {
    exceptedFields: SchemaField[];
  };
}

export default function FilteredTable({
  filterSettings: { exceptedFields },
  renderSettings,
  data,
  onLoading,
}: FilteredTableProps) {
  const { filteredData, filterData } = useFilter(data);
  const filteredFields = useHeadFilter(data, exceptedFields) as SchemaField[];

  return (
    <div className={classes.FilteredTable}>
      <FilterMenu
        className={classes.Menu}
        fields={filteredFields}
        onFilter={filterData}
      />
      <Table
        data={filteredData}
        renderSettings={renderSettings}
        onLoading={onLoading}
      />
    </div>
  );
}
