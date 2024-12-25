import { useState } from "react";

const SearchForm = ({ searchEntity, entity }) => {
  const INITIAL_VALS = {
    name: "",
    title: "",
  };
  const [formData, setFormData] = useState(INITIAL_VALS);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log("Welcome," + formData.username);
    //Do i need to run a function to do something?
    searchEntity(formData);
    setFormData(INITIAL_VALS);
  };

  const companySearch = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Search</label>
      <input
        type="text"
        placeholder="Search companies"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );

  const jobSearch = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Search</label>
      <input
        type="text"
        placeholder="Search jobs"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );

  const searching = () => {
    if (entity === "companies") {
      return companySearch;
    } else if (entity === "jobs") {
      return jobSearch;
    }
  };

  return searching();
};

export default SearchForm;
