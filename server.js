const app = require("./src/App")
require('dotenv').config()


app.listen(3000 , () => {
    console.log("Server is running on http://localhost:3000")
})