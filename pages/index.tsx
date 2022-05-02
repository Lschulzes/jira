import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import type { NextPage } from "next";
import EntryList from "../components/EntryList";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Todos" />
            <CardContent>
              <EntryList status="TODO" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In Progress" />
            <CardContent>
              <EntryList status="IN_PROGRESS" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In Test" />
            <CardContent>
              <EntryList status="IN_TEST" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completed" />
            <CardContent>
              <EntryList status="COMPLETED" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
