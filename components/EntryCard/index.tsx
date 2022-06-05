import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { DragEvent, useContext } from "react";
import { UIContext } from "../../context/UI";
import { Entry } from "../../interfaces";

const EntryCard = ({ entry }: { entry: Entry }) => {
  const { toggleDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent) => {
    toggleDragging();
    event.dataTransfer.setData("text", entry._id);
  };

  return (
    <Card
      draggable
      onDragStart={onDragStart}
      sx={{
        marginBottom: 1,
        background: "#ffffff08",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">
            {Math.trunc((Date.now() - entry.createdAt) / 1000 / 60)} minutes ago
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
