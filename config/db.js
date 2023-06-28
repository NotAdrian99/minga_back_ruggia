import { connect } from "mongoose";

connect(`mongodb+srv://NotAdrian99:pEZVUZgpLXYe4lt5@cluster0.laqobh4.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("database connected"))
  .catch((error) => console.log(error));
