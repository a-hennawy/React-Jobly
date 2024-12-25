const Company = ({ obj }) => {
  const { name, description, jobs } = obj;

  return (
    <div>
      {<h1>{name}</h1>}
      <p>{description}</p>
      <ul>
        {jobs.map((j) => (
          <li key={j.id}>{j.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Company;
