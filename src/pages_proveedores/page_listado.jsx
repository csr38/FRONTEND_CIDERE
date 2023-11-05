import React from "react";

import GridListado from "./components/grid_listado";
import { Container } from "@mui/material";

const PageListado = () => {
    return (
        <box>
        <h1>Listado</h1>

        <Container sx={{ mt: 1, mb: 1, padding:0, overflowX:"auto", maxWidth:"80vw"}}>
        <GridListado />
        </Container>
        
        
        </box>
    );
}

export default PageListado;