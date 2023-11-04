import React from "react";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import CardPrincipal from "./components/CardPrincipal";




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const IndexPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{padding:30}} >
      <Grid container spacing={4} >
        <Grid xs={8}>
          <CardPrincipal />
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IndexPage;
