const express= require('express')
const app= express()

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use( express.static( "./views" ) );

app.get('/',(req,res)=>{
    res.render('space_shooter')

})
app.listen(3000 || process.env.PORT )
console.log('server is running')