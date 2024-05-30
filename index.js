const app = require('express')();
const PORT = process.env.PORT || 5500;
app.get('/', (req,res) => {
	res.send("Hellow World, Server is running :) ");
})

app.listen(PORT,'0.0.0.0' , () => {
	console.log("Server is up and running ..." );
})
