import { useState } from "react";
import { useHistory } from "react-router-dom";

// styles
import "./Searchbar.css";

export default function Searchbar() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    // redirect user to search page - with the queryparamter added to the search url
    history.push(`/search?q=${searchText}`);
  };
  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
