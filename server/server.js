const express = require("express");
const app = express();
const serviceRouter = require('./routes/services')
const cors = require('cors')
const dbConnection = require('./config/db.config')
const registerRoute = require('./routes/users.signup')
const loginRoute = require('./routes/users.login')
require('dotenv').config()

// const PORT = 8080

const PORT = 8081

app.use(cors({
  origin: '*'
}))

dbConnection()

app.use(express.json())
app.use('/api/v1/user', registerRoute)
app.use('/api/v1/user', loginRoute)
app.use('/api/v1/services', serviceRouter)



app.get("/", async (req, res) => {
  res.end()
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});