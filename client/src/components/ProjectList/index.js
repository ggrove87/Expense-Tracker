import React from "react";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ProjectList = ({
  projects,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!projects.length) {
    return (
      <Typography color="text.primary" variant="h5" m={2}>
        No projects yet
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {projects &&
        projects.map((project) => (
            <Grid item xs={12} md={6}>
              <Card
                align="center"
                sx={{ border: 1, maxWidth: 343, mx: "auto" }}
              >
                <CardContent>
                  <Typography color="text.primary" variant="h5" m={1}>
                    {project.projectTitle}
                  </Typography>
                  <Typography color="text.secondary" variant="subtitle2" m={2}>
                    {`You created this project on ${project.createdAt}`}
                  </Typography>
                  <Link
                    className="btn btn-primary btn-block btn-squared"
                    to={`/projects/${project._id}`}
                  >
                    <Button>View project's expenses</Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
        ))}
    </Grid>
  );
};

export default ProjectList;
