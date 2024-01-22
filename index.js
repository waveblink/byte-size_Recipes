import express, {response} from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
let recipes = [];
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req,res) =>{
    res.render("index");
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

app.post("/cookbook", (req, res) => {
    const newRecipe = {
        name: req.body.name,
        cuisine: req.body.cuisine,
        meal: req.body.meal,
        recipe: req.body.recipe
    };

    recipes.push(newRecipe);

    res.render("submitted", {newRecipe});

});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

