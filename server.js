const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "nalmar-session",
    secret: "NALMAR_SECRET", 
    httpOnly: true
  })
);

const db = require("./app/models");

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to SignUp | SignIn | PG-EXPRESS-NODE" });
});

require('./app/routes/auth.routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});