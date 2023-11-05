import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import { ChartContainer, BarPlot } from "@mui/x-charts";
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];


const CardMiniGrafico = (props) => {
  return (
    <Card>
      <Grid container>
        <Grid xs={8}>
          <CardContent style={{ paddingRight: 0, margin: 0}}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              style={{ padding: 0, margin: 0}}
            >
              Usuarios Activos
            </Typography>
            <Typography variant="h5" component="div" style={{ padding: 0, margin: 0}}>
              10
            </Typography>
            <Typography variant="body2">20000</Typography>
          </CardContent>
        </Grid>
        <Grid xs={4} >
          <ChartContainer
            width={110}
            height={110}
            series={[{ data: uData, label: "uv", type: "bar" }]}
            xAxis={[{ scaleType: "band", data: xLabels }]}
            margin={{ top: 15, right: 0, bottom: 10, left: 5 }}
          
          >
            <BarPlot />
          </ChartContainer>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardMiniGrafico;
