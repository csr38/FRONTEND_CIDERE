import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import CardPrincipal from "./components/CardPrincipal";
import CardCarousel from "./components/CardCarousel";
import CardMiniGrafico from "./components/CardMiniGrafico";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const IndexPage = () => {
  const [data, setData] = useState("uno");

  return (
    <Box sx={{ flexGrow: 1 }} style={{ padding: 30 }}>
      <Grid container spacing={4}>
        <Grid xs={8}>
          <CardPrincipal />
        </Grid>
        <Grid xs={4}>
          <CardCarousel />
        </Grid>
        <Grid xs={4}>
          <CardMiniGrafico data={data} />
        </Grid>
        <Grid xs={4}>
          <CardMiniGrafico data={data} />
        </Grid>
        <Grid xs={4}>
          <CardMiniGrafico data={data} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default IndexPage;
