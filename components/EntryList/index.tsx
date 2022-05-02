import { List, Paper } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";
import { Entry } from "../../interfaces";
import EntryCard from "../EntryCard";

interface Props {
  status: Entry["status"];
}

const EntryList = ({ status }: Props) => {
  const { entries } = useContext(EntriesContext);

  const listEntries = useMemo(
    () => entries.filter((el) => el.status === status),
    [entries, status]
  );

  return (
    <div>
      {/* <Paper
        sx={{
          height: "calc(100vh - 250px",
          overflow: "scroll",
          backgroundColor: "transparent",
        }}
      > */}
      <List sx={{ opacity: 1 }}>
        {listEntries.map((el) => (
          <EntryCard key={el._id} entry={el} />
        ))}
      </List>
      {/* </Paper> */}
    </div>
  );
};

export default EntryList;
