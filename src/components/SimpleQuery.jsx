import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_LAUNCHES = gql`
  query {
    launches(limit: 10) {
      mission_name
    }
  }
`;

function SimpleUseQuery() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error)
  return (
    <div>
      <p>Error : {error}</p>
    </div>
  );

  return (
    <div>
        <h1>Use Query Demo</h1>
      <ul>
        {data?.launches?.map((launch) => (
          <li key={launch?.mission_name}>{launch?.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleUseQuery;