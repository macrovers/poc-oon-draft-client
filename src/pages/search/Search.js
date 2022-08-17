import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";

import useFetch from "../../hooks/useFetch";

// styles
import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  //   vanilla js feature - nothing to do with react
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  //   construct url
  const url = "http://localhost:3000/biryanirecipes?q=" + query;

  const { data: matchingRecipes, isPending, error } = useFetch(url);
  console.log(matchingRecipes);
  return (
    <div>
      <h3 className="page-title">
        Recipes containing <b>{query}</b> are
      </h3>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading data...</p>}
      {matchingRecipes && <RecipeList recipes={matchingRecipes} />}
    </div>
  );
}
