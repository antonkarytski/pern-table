import React from "react";
import tableData from "./MOCK_DATA.json";
import classes from "./Styles.module.scss";
import FilteredTable from "./components/Table/FilteredTable/FilteredTable";

//requests to get fields from database
//refactor
//final styles

function App() {
  return (
    <div className={classes.Main}>
      <FilteredTable
        data={tableData}
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
