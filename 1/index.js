const express = require('express')

const app = express();

app.get("/", (req, res) => {
        res.send("<h2> Bienvenue au docker Senegal!!! pays du terranga warkeur burba</h2>")
});
const port = process.env.port || 3000
app.listen(port, ()=>console.log('listen on port ${port}'))