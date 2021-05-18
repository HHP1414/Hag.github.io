const express=require ("express");
const bodyParser=require ("body_Parser");
const app=express ();
app.use(bodyParser.urlencoded({extended:true}));
  app.get("/", function (req,express){
  res.sendFile(__dirname+"/index.html");
  app.post("/", function (req,res){
    var n1= Number(req.body.num1);
    var n2= Number(req.body.num2);
    res.send("Thanks for posting the form"); 
    var result(n1/(n2)²);
 res.send("The answer is"+ result);
    });
    
    app.listen(3000, function()
    {
      Console.log("server has started on port 3000");
    });
  