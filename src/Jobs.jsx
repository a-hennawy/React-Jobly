const Jobs = ({ obj }) => {
  const { title, salary, company } = obj;

  return (
    <div>
      <h1>{title}</h1>
      <div>{salary}</div>
      <br />
      <div>{company.name}</div>
    </div>
  );
};

export default Jobs;
