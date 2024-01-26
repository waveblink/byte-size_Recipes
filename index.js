import express, {response} from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pkg from 'pg';
const { Pool } = pkg;


const app = express();
const port = 3000;
let recipes = [];
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

import { name } from "ejs";

dotenv.config();


const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432
}); 


app.get("/", (req,res) =>{
    getRecipes();
    res.render("index", {recipes: recipes});
});
app.get("/recent", (req,res) => {
    res.render("recent.ejs", {recipes: recipes});
});

app.get("/about", (req,res) =>{
    res.render("about");
});
app.get("/cookbook", (req,res) =>{
    res.render("cookbook");
});
app.get("/submitted", (req, res) => {
    res.render("submitted");
});

app.post("/cookbook", async (req, res) => {
    const newRecipe = {
        name: req.body.name,
        cuisine: req.body.cuisine,
        mealType: req.body.mealType,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    };

    try {
        const result = await pool.query(
            "INSERT INTO recipe_book (name, cuisine, mealType, ingredients, instructions) VALUES ($1, $2, $3, $4, $5)",
            [newRecipe.name, newRecipe.cuisine, newRecipe.meal, newRecipe.ingredients, newRecipe.instructions]
          );
            
        // Add the new recipe to the in-memory array
        recipes.push(newRecipe);

        // Render the success page with the newly added recipe
        res.render("submitted", { newRecipe });
    } catch (err) {
        console.error(err);
        res.render("error", { message: "Error adding recipe to the cookbook." });
    }
});

async function getRecipes() {
    try {
      const result = await pool.query("SELECT * FROM recipe_book");
      return result.rows;
    } catch (err) {
      console.error("Error fetching users:", err);
      return [];
    }
  }

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

