import { useNavigate, useParams } from "react-router-dom";

import JoblyApi from "../starter/api";
import { useEffect, useState } from "react";
import Company from "./company";
import Jobs from "./Jobs";

const EntityItem = ({ data, cantFind, entity }) => {
  const { handle, id, username } = useParams();
  const [entityData, setEntityData] = useState(null);
  const navigate = useNavigate();

  const paramKey =
    entity === "companies" ? handle : entity === "jobs" ? id : username;

  useEffect(() => {
    if (!data || !data[entity]) {
      navigate(cantFind);
      return;
    }

    const fetchData = async () => {
      try {
        if (entity == "companies") {
          const entityDetails = await JoblyApi.getCompany(paramKey);

          setEntityData(entityDetails);
        } else if (entity === "jobs") {
          const entityDetails = await JoblyApi.getJobs(paramKey);

          setEntityData(entityDetails);
        }
      } catch (err) {
        console.error(err);
        navigate(cantFind);
      }
    };
    fetchData();
  }, [data, entity, paramKey, cantFind, navigate]);

  if (!entityData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>
        {entity === "companies" && <Company obj={entityData} />}
        {entity === "jobs" && <Jobs obj={entityData} />}
      </h1>
    </div>
  );
};

export default EntityItem;
