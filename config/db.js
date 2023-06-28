import { connect } from "mongoose";
import category from "../models/category.js";
import categories from "./categories.js";

connect(`mongodb+srv://NotAdrian99:pEZVUZgpLXYe4lt5@cluster0.laqobh4.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("database connected");
    category
      .insertMany(categories)
      .then(() => {
        console.log("Categorías insertadas correctamente");
      })
      .catch((error) => {
        console.error("Error al insertar las categorías:", error);
      });
  })
  .catch((error) => console.log(error));
