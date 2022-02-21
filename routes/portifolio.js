//exibir a view portifolio.ejs

module.exports = (app) =>{
    app.get('/portifolio',(req,res)=>{
        res.render('portifolio.ejs')
    })
}