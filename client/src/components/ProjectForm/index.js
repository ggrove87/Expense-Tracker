import React, { useState } from "react";
import { Link } from "react-router-dom";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useMutation } from "@apollo/client";

import { ADD_PROJECT } from "../../utils/mutations";
import { QUERY_PROJECTS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const ProjectForm = () => {
  const [projectTitle, setProjectTitle] = useState("");

  const [addProject, { error }] = useMutation(ADD_PROJECT, {
    update(cache, { data: { addProject } }) {
      try {
        const { projects } = cache.readQuery({ query: QUERY_PROJECTS });

        cache.writeQuery({
          query: QUERY_PROJECTS,
          data: { projects: [addProject, ...projects] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, projects: [...me.projects, addProject] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProject({
        variables: {
          projectTitle,
          // projectAuthor: Auth.getProfile().data.username,
        },
      });

      setProjectTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "projectTitle" && value.length <= 280) {
      setProjectTitle(value);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <form onSubmit={handleFormSubmit}>
            <Card
              align="center"
              sx={{ border: 1, maxWidth: 343, mx: "auto", mt: "1rem" }}
            >
              <CardContent>
                <Typography color="text.secondary" variant="h5" gutterBottom>
                  Add a new project:
                </Typography>
                <Box
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    multiline
                    label="project title"
                    variant="outlined"
                    name="projectTitle"
                    type="text"
                    value={projectTitle}
                    onChange={handleChange}
                  />
                </Box>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  style={{ cursor: "pointer" }}
                  sx={{ mb: "1rem" }}
                  type="submit"
                  variant="outlined"
                >
                  Add Project
                </Button>
              </CardActions>
            </Card>

            {error && (
              <div>
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your projects. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ProjectForm;
