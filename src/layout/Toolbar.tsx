import React from "react";
import { AppBar, Toolbar as MuiToolbar, IconButton, Typography, Tooltip } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import SaveIcon from '@mui/icons-material/Save';

const Toolbar: React.FC = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <MuiToolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Swimlane Editor
        </Typography>
        <Tooltip title="Add Node"><span><IconButton><AddBoxIcon /></IconButton></span></Tooltip>
        <Tooltip title="Add Swimlane"><span><IconButton><PlaylistAddIcon /></IconButton></span></Tooltip>
        <Tooltip title="Undo"><span><IconButton><UndoIcon /></IconButton></span></Tooltip>
        <Tooltip title="Redo"><span><IconButton><RedoIcon /></IconButton></span></Tooltip>
        <Tooltip title="Save"><span><IconButton><SaveIcon /></IconButton></span></Tooltip>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
