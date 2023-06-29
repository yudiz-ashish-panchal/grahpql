import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_COMPANY = gql`
query Company {
  company {
    ceo
    coo
    cto
    cto_propulsion
    employees
    founded
    founder
    launch_sites
    name
    summary
    test_sites
    valuation
    vehicles
  }
}
`;

function CompanyDetails() {
  const { loading, error, data } = useQuery(GET_COMPANY);
  console.log('data?.company', data)

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
    
       <div><b>CEO Name:</b> {data?.company?.ceo}</div>
       <div><b> Total Employee : </b>{data?.company?.employees}</div>
       <div><b> Company founded :</b> {data?.company?.founded}</div>
       <div> <b> Company summary : </b>{data?.company?.summary}</div>
       <div><b> Company valuation : </b>{data?.company?.valuation}</div>
       <div> <b> Company vehicles : </b>{data?.company?.vehicles}</div>
     
    </div>
  );
}

export default CompanyDetails;