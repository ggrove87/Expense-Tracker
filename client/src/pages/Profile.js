import React from "react";
import { Navigate, useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";

import { useQuery } from "@apollo/client";

import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <Typography color="text.primary" variant="h5" m={2}>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </Typography>
    );
  }

  return (
    <>
      <Typography align="center" color="text.primary" variant="h5" m={2}>
        Welcome to your profile page!
      </Typography>

        <ProjectList
          projects={user.projects}
          title={`${user.username}'s projects...`}
          showTitle={false}
          showUsername={false}
        />
      {!userParam && <ProjectForm />}
    </>
  );
};

export default Profile;
