import React, { useState, Fragment } from "react";
import { gql } from "@apollo/client";

import { useQuery } from "@apollo/client";

import "./App.css";
import User from "./User";

const GET_USERS = gql`
  {
    users {
      id
      login
      avatar_url
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <main className="App">
      <h1>Github | Users</h1>
      {data.users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </main>
  );
}
