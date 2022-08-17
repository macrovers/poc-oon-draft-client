import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

// styles
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/biryanirecipes" + `/${id}`;

  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading data...</p>}
      {recipe && (
        <div className="recipe-detail">
          <h2 className="page-title">{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p>{recipe.method}</p>
          <p>Cooking Time is: {recipe.cookingTime}</p>
        </div>
      )}
    </div>
  );
}
