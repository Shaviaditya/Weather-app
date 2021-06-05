const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT||4500
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
