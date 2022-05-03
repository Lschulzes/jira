import { Add, SaveOutlined } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      <Button startIcon={<Add />} variant="outlined" fullWidth>
        Add Task
      </Button>
      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        placeholder="Just a simple text"
        autoFocus
        multiline
        label="New Entry"
      />
      <Box display="flex" justifyContent={"space-between"}>
        <Button variant="text">Cancel</Button>
        <Button variant="outlined" color="secondary" endIcon={<SaveOutlined />}>
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default NewEntry;
