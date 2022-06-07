import { DeleteOutlined, SaveOutlined } from "@mui/icons-material";
import {
  Button,
  capitalize,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Statuses } from "../../interfaces";

const status: Array<`${Statuses}`> = [
  "TODO",
  "IN_PROGRESS",
  "IN_TEST",
  "COMPLETED",
];

export const EntryPage = () => {
  const [inputValue, setInputValue] = useState<`${Statuses}`>("TODO");

  return (
    <Layout>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title="Entry:"
              subheader={`Created ${""} minutes ago`}
            />

            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="New Entry"
                autoFocus
                multiline
                label="New Entry"
              />

              <FormControl>
                <FormLabel>State</FormLabel>

                <RadioGroup row>
                  {status.map((option, index) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio defaultChecked={index === 0} />}
                      label={capitalize(
                        option.replace("_", " ").toLocaleLowerCase()
                      )}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                variant="contained"
                fullWidth
                startIcon={<SaveOutlined />}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{ position: "fixed", bottom: 30, right: 30, bgcolor: "error.dark" }}
      >
        <DeleteOutlined />
      </IconButton>
    </Layout>
  );
};

export default EntryPage;
