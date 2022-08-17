import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  return (
    <Container className="pb-4">
      <Row className="recipeList gy-5 gx-5">
        {recipes &&
          recipes.map((recipe) => (
            <Col xs={6} sm={6} md={4} lg={3}>
              {/* removed fixed column width for responsivenss -> style={{ width: "18rem" }} */}
              <Card key={recipe.id} className="recipeCard">
                <Card.Img
                  variant="top"
                  src={recipe.image}
                  style={{ width: "100%", height: "180px" }}
                />
                {/* for block sized button use -> className="d-grid gap-2" */}
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>
                    {recipe.description.substring(0, 140)}...
                  </Card.Text>
                  <Button variant="outline-success">
                    <Link
                      to={`recipes/${recipe.id}`}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Full recipe
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            // <div key={recipe.id} className="recipe-card">
            //   <h3>{recipe.title}</h3>
            //   <p>{recipe.cookingTime}</p>
            //   <p>{recipe.method.substring(0, 70)}...</p>
            //   <Link to={`recipes/${recipe.id}`}>Full recipe</Link>
            // </div>
          ))}
      </Row>
    </Container>
  );
}
