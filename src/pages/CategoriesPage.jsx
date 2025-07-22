import { useState } from "react";
import { Link as RouterLink } from "react-router";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

function CategoriesPage() {
  /*
    rule for form fields state: one state for one field
  */
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("Welcome to <b>Forward College</b>");

  return (
    <Container
      maxWidth="md"
      sx={{
        py: "60px",
      }}
    >
      <Typography variant="h3">Manage Categories</Typography>
      <Paper
        elevation={3}
        sx={{
          p: "20px",
          mt: "20px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <TextField
            fullWidth
            id="note_title"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Button sx={{ bgcolor: "lightblue", color: "white", ml: "10px" }}>
            Add
          </Button>
        </Box>
        <Box sx={{ mt: "20px" }}>
          <Typography variant="h4" sx={{ mb: "10px" }}>
            Existing Content (3)
          </Typography>
          <Box sx={{ ml: "20px" }}>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6" sx={{ mb: "10px" }}>
                Personal
              </Typography>
              <Box sx={{ ml: "660px", display: "flex" }}>
                <DriveFileRenameOutlineIcon />
                <DeleteIcon />
              </Box>
            </Box>
          </Box>
          <Box sx={{ ml: "20px" }}>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6" sx={{ mb: "10px" }}>
                Work
              </Typography>
              <Box sx={{ ml: "693px", display: "flex" }}>
                <DriveFileRenameOutlineIcon />
                <DeleteIcon />
              </Box>
            </Box>
          </Box>
          <Box sx={{ ml: "20px" }}>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6" sx={{ mb: "10px" }}>
                Ideas
              </Typography>
              <Box sx={{ ml: "690px", display: "flex" }}>
                <DriveFileRenameOutlineIcon />
                <DeleteIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default CategoriesPage;
