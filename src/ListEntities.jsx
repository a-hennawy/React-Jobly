import { useState, useEffect } from "react";

import EntityLinks from "./EntityLinks";
import SearchForm from "./searchForm";
import JoblyApi from "../starter/api";

const ListEntities = ({ data, entity }) => {
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  const searchEntity = async (nData) => {
    console.log(nData);
    if (entity === "companies") {
      const result = await JoblyApi.getCompanyByName(nData.name);
      setCurrentData(result);
    } else if (entity === "jobs") {
      const result = await JoblyApi.getJobByTitle(nData.title);
      setCurrentData(result);
    }
    // setCurrentData(newData);
  };

  if (!currentData || !currentData[entity]) {
    return <p>{`Loading ${entity}...`}</p>;
  }

  const entitiesArr = currentData[entity];

  return (
    <div>
      <p>{`Welcome to ${entity} link`}</p>
      <SearchForm searchEntity={searchEntity} entity={entity} />
      {entitiesArr.map((e) => (
        <EntityLinks obj={e} />
      ))}
    </div>
  );
};

export default ListEntities;
