const express = require("express");
const cors = require("cors");
const app = express()

//middleware

app.use(express.json()) //req.body
app.use(cors())

//Routes//

//register and login routes

app.use("/auth", require("./routes/jwtAuth"))

//dashboard routes

app.use("/dashboard", require("./routes/dashboard"))

app.listen(5000, () =>{
    console.log('server listen on port 5000')
})