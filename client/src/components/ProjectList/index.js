import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
    <Grid justifyContent="space-around"
      alignItems="center" container spacing={3}>
      {projects &&
        projects.map((project, index) => (
          <Grid item xs={12} md={3} key={index}>
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
