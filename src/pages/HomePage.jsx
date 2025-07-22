import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Link as RouterLink, useNavigate } from "react-router";




function HomePage() {
    const [category, setCategory] = useState("");
    const [updated, setUpdated] = useState("");

  return (
    <Container sx={{ py: "60px" }}>
      <Box sx={{ display: "flex"}}>
      <Typography variant="h3">All Notes (3)</Typography>
    <Box sx={{ml: "400px",}}>
      <FormControl sx={{width: "180px" , mr: "10px"}}>
          <InputLabel id="note_category_label">Category</InputLabel>
          <Select
            labelId="note_category_label"
            id="note_category"
            label="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <MenuItem value={"Personal"}>Personal</MenuItem>
            <MenuItem value={"Work"}>Work</MenuItem>
            <MenuItem value={"Idea"}>Idea</MenuItem>
          </Select>
        </FormControl>
      <FormControl sx={{width: "180px"}}>
          <InputLabel id="note_category_label">Sort BY</InputLabel>
          <Select
            labelId="note_category_label"
            id="note_category"
            label="Category"
            value={updated}
            onChange={(event) => setUpdated(event.target.value)}
          >
            <MenuItem value={"Last Updated"}>last Updated</MenuItem>
            <MenuItem value={"Title"}>Title</MenuItem>
          </Select>
        </FormControl>
            </Box>
                </Box>
        <Box>
      <Grid container spacing={4}>
        <Grid size={4}>
          <Card sx={{ width: "400px", mt: "30px" }}>
        <CardContent>
          <Typography variant="h5">
            Which theme should we pick
          </Typography>
          <Typography variant="h5" component="div">
            
          </Typography>
          <Button sx={{ bgcolor: "silver", color: "black", borderRadius: "40px"}}>Ideas</Button>
          <Typography sx={{ pt: "20px" ,}} >
            Time
          </Typography>
        </CardContent>
        <Button
        component={RouterLink}
        to="/edit">
            <DriveFileRenameOutlineIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />Edit
          </Button>
          <Button color="error" sx={{ml: "10px"}}>
            <DeleteIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}/>Delete
          </Button>
      </Card>
        </Grid>
        <Grid size={4}>
          <Card sx={{ width: "400px", mt: "30px" }}>
        <CardContent>
          <Typography variant="h5">
            Which theme should we pick
          </Typography>
          <Typography variant="h5" component="div">
            
          </Typography>
          <Button sx={{ bgcolor: "silver", color: "black", borderRadius: "40px"}}>Ideas</Button>
          <Typography sx={{ pt: "20px" ,}} >
            Time
          </Typography>
        </CardContent>
        <Button
        component={RouterLink}
        to="/edit">
            <DriveFileRenameOutlineIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />Edit
          </Button>
          <Button color="error" sx={{ml: "10px"}}>
            <DeleteIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}/>Delete
          </Button>
      </Card>
        </Grid>
        <Grid size={4}>
          <Card sx={{ width: "400px", mt: "30px" }}>
        <CardContent>
          <Typography variant="h5">
            Which theme should we pick
          </Typography>
          <Typography variant="h5" component="div">
            
          </Typography>
          <Button sx={{ bgcolor: "silver", color: "black", borderRadius: "40px"}}>Ideas</Button>
          <Typography sx={{ pt: "20px" ,}} >
            Time
          </Typography>
        </CardContent>
        <Button
        component={RouterLink}
        to="/edit">
            <DriveFileRenameOutlineIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />Edit
          </Button>
          <Button color="error" sx={{ml: "10px"}}>
            <DeleteIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}/>Delete
          </Button>
      </Card>
        </Grid>
      </Grid>


      </Box>

        <Fab color="primary" aria-label="add" sx={{mt: "400px", ml: "1000px"}} component={RouterLink} to="/add" >
            <AddIcon />
        </Fab>

      
    </Container>
  );
}


export default HomePage;