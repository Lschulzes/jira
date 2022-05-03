import { List, Paper } from "@mui/material";
import React, { DragEvent, useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/UI";
import { Entry } from "../../interfaces";
import EntryCard from "../EntryCard";

interface Props {
  status: Entry["status"];
}

const EntryList = ({ status }: Props) => {
  const { entries, moveEntry } = useContext(EntriesContext);
  const { toggleDragging, isDraggingEntry } = useContext(UIContext);

  const listEntries = useMemo(
    () => entries.filter((el) => el.status === status),
    [entries, status]
  );

  const onDrop = (event: DragEvent) => {
    const uuid = event.dataTransfer.getData("text");
    moveEntry(uuid, status);
    toggleDragging();
  };

  const allowDrop = (event: DragEvent) => event.preventDefault();

  return (
    <div onDrop={onDrop} onDragOver={allowDrop}>
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          // overflowY: "scroll",
          backgroundColor: "transparent",
          padding: "0 0.75rem",
        }}
      >
        <List
          sx={{
            opacity: isDraggingEntry ? 0.2 : 1,
            transition: "all 200ms",
          }}
        >
          {listEntries.map((el) => (
            <EntryCard key={el._id} entry={el} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
