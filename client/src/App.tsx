import React from "react";
import classes from "./Styles.module.scss";
import FilteredTable from "./components/Table/FilteredTable/FilteredTable";
import { useServerData } from "./hooks/hook.data";

function App() {
  const { data, onLoading } = useServerData();

  return (
    <div className={classes.Main}>
      <FilteredTable
        onLoading={onLoading}
        data={data}
        filterSettings={{ exceptedFields: ["id", "date"] }}
        renderSettings={{
          exceptedFields: ["id"],
          recordsPerPage: 20,
          usePagination: true,
        }}
      />
    </div>
  );
}

export default App;
