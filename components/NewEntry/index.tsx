import { Add, SaveOutlined } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useRef, useState } from "react";
import { EntriesContext } from "../../context/entries";

const NewEntry = () => {
  const [adding, setAdding] = useState(false);
  const [touched, setTouched] = useState(false);

  const inputValue = useRef("");

  const { addEntry } = useContext(EntriesContext);

  const isValid = () => inputValue.current.length > 10;

  const toggleAdding = () => setAdding((cur) => !cur);

  const addTask = () => {
    if (!isValid()) return;
    addEntry(inputValue.current);
    toggleAdding();
    inputValue.current = "";
  };
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {!adding ? (
        <Button
          onClick={toggleAdding}
          startIcon={<Add />}
          variant="outlined"
          fullWidth
        >
          Add Task
        </Button>
      ) : (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Just a simple text"
            autoFocus
            multiline
            label="New Entry"
            onBlur={() => setTouched(true)}
            onChange={(e) => (inputValue.current = e.target.value)}
            error={touched && !isValid()}
          />
          <Box display="flex" justifyContent={"space-between"}>
            <Button variant="text" onClick={toggleAdding}>
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlined />}
              onClick={addTask}
            >
              Add
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default NewEntry;
