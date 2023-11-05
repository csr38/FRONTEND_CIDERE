import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { randomTraderName, randomEmail, randomDate, randomUpdatedDate } from '@mui/x-data-grid-generator';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'Nombre_Proveedor', headerName: 'Nombre Proveedor', width: 150 },
  { field: 'Rut_proveedor', headerName: 'Rut Proveedor', width: 150 },
  { field: 'Direccion', headerName: 'Dirección', width: 150 },
  { field: 'Mail', headerName: 'Mail', width: 450 },
  { field: 'Contacto', headerName: 'Contacto', width: 150 },
  { field: 'Telefono_Contacto', headerName: 'Telefono Contacto', width: 150 },
  { field: 'Categoria', headerName: 'Categoria', width: 150 },
  { field: 'Comuna', headerName: 'Comuna', width: 150 },
  { field: 'Fecha_Creacion', headerName: 'Fecha Creacion', type : 'dateTime', width: 150 },
];

const rows = [
  { id: 1, Nombre_Proveedor: randomTraderName(), Mail: randomEmail(), Fecha_Creacion: randomUpdatedDate()},
  { id: 2, Nombre_Proveedor: randomTraderName(), Mail: randomEmail()},
  { id: 3, Nombre_Proveedor: randomTraderName(), Mail: randomEmail()},
  { id: 4, Nombre_Proveedor: randomTraderName(), Mail: randomEmail()},
  { id: 5, Nombre_Proveedor: randomTraderName(), Mail: randomEmail()},
  { id: 6, Nombre_Proveedor: randomTraderName(), Mail: randomEmail()},
  { id: 7, Nombre_Proveedor: randomTraderName(), Mail: randomEmail()},
  { id: 8, Nombre_Proveedor: randomTraderName(), Mail: randomEmail()},
  { id: 9, Nombre_Proveedor: randomTraderName(), Mail: randomEmail()},
  { id: 10, Nombre_Proveedor: randomTraderName(), Mail: randomEmail() },
];

const GridListado = () => {
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });

  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});

  return (
    
    <Box >
  
      <FormControlLabel
        checked={columnVisibilityModel.id !== false}
        onChange={(event) =>
          setColumnVisibilityModel(() => ({ id: event.target.checked }))
        }
        control={<Switch color="primary" size="small" />}
        label="Show ID column"
      />
      <FormControlLabel
        checked={filterModel.quickFilterExcludeHiddenColumns}
        onChange={(event) =>
          setFilterModel((model) => ({
            ...model,
            quickFilterExcludeHiddenColumns: event.target.checked,
          }))
        }
        control={<Switch color="primary" size="small" />}
        label="Exclude hidden columns"
      />
      <Box>
        <DataGrid
          columns={columns}
          rows={rows}
          disableColumnFilter
          disableDensitySelector
          slots={{ toolbar: GridToolbar }}
          filterModel={filterModel}
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
        />
      </Box>
   
    </Box>
    
  );
}

export default GridListado;