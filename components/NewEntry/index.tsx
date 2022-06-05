import { Add, SaveOutlined } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useRef, useState } from "react";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/UI";

const NewEntry = () => {
  const [touched, setTouched] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { addEntry } = useContext(EntriesContext);
  const { isAddingEntry, toggleAdding } = useContext(UIContext);

  const isValid = () => inputValue.length > 10;

  const addTask = () => {
    if (!isValid()) return;
    addEntry(inputValue);
    toggleAdding();
    setTouched(false);
    setInputValue("");
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {!isAddingEntry ? (
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
            onChange={(e) => setInputValue(e.target.value)}
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
