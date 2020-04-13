const express = require('express');
const app = express();


const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.use('/',express.static('public'))

app.get('/othmanelgoubi.me',(req,res,next)=>
{
   res.sendFile(__dirname+'/public/index.html');
});



app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
  console.log(__dirname);

});