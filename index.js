const express = require("express");
const app = express();

//DB Connection
const connectDB = require("./config/dbConnection");

//Routes Imports
const urlRoute = require("./routes/urlRoute");

//Middlewares
app.use(express.json());

//Routes
app.use("/api/url", urlRoute);

const PORT = 8000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});

//POST http://localhost:8000/api/url {"url":"..."}
//GET http://localhost:8000/api/url/[pwIxvRe7]
//GET http://localhost:8000/api/url/analytics/[pqfGWKfvF]
