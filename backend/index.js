//export express function to create an express application
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome from my Social Media!</h1>')
})



app.listen(5000, () => {
    console.log('Port is listing.');
});
