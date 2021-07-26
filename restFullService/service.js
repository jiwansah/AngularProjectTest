var exp = require('express'); // import the express module,
//Express packege similer to java service,
// to create REST Service known as https service
var mongoos = require('mongoose');// Is a packege connect to mongo DB. similar to ADO or Entity Framework,
var cor = require('cors');// For Cross domain policy, 2 Applicaton is running on different port
var parser = require('body-parser');// it is enable HTTPRequest and Response
var jtoken = require('jsonwebtoken');// it is secure the endpoint created in Express.js


const dbURL = 'mongodb://localhost:27017/userDB';
// Step1: Creating End point using Express.js
var api = exp(); //Aliasing
api.use(cor());
api.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
api.listen(9001,function(){
  console.log('Service started on port number 5001');
});

//  getting schima for creating a table and database throuvh code fast approach
// we have to enable the body parser for suppport http request
api.use(parser.urlencoded({extended:false}));
api.use(parser.json());

// Now connect to Database server.
mongoos.connect(dbURL, function (error){ });

/*********************************   User Service   *******************************/

// const schema  = mongoos.Schema;
const userSchema = new mongoos.Schema({
  userName: String,
  password: String,
  name: String,
  email: String,
  age: Number
}, {
  collection: 'tblUser'
});

// Bind Schema with table
var user = mongoos.model('tblUser', userSchema);


api.post('/users', (req, res) => {
  let temp  = req.body;
  let ctr  = new user(temp);

  ctr.save(function(error, data) {
    if(error){
      console.log(error);
    } else {
      res.status(200).send(temp);
    }
  });

});

api.get('/users', (req, res) => {

  user.find({}, function(error,data) {
    if(error){
      console.log('error');
    } else{
      // res.status(200).send(user);//callback
      res.status(200).json(data);
    }
  });
});

api.get('/users/:userName', (req, res) => {
  let username = req.params.userName;
  user.findOne({userName: username}, function(error,user) {
    if(error){
      console.log('error');
    } else{
      res.status(200).json(user);
    }
  });
});

api.delete('/users/:id', (req, res) => {

  let username = req.params.id;
  user.deleteOne({userName: username}, function(error, data) {
    if(error){
      console.log(error);
    } else {
      res.status(200).send(data);
    }
    console.log(data);
  });


});

api.post('/login', (req, res) => {
  let userData=req.body;

  user.findOne({userName: userData.userName, password: userData.password},function(error,user) {
        if(error){
            console.log('error');
        }
        else{
            if(!user){
                res.status(401).send('invalid data');
            }
            else{
                if(user.password !== userData.password || user.userName !== userData.userName) {
                    res.status(401).send('invalid password');
                }
                else{
                  // res.status(200).send({'msg':'You are successfully logged in'});
                   // Need to check
                   let payload={subject:user._id};
                   let token=jtoken.sign(payload,'secretKey');
                   res.status(200).send({token})
                }
            }
        }
      });

});


/*********************************   Customer Service   *******************************/

const customerSchema = new mongoos.Schema({
 // _id: any,
  title: String,
  name:String,
  address:String,
  email:String,
  mobile: String
}, {
  collection: 'tblCustomer'
});
var customerTBL = mongoos.model('tblCustomer', customerSchema);

api.post('/customers', (req, res) => {
  let temp  = req.body;
  let ctr  = new customerTBL(temp);
  ctr.save(function(error, data) {
    if(error){
      console.log(error);
    } else {
      res.status(200).send(temp);
    }
  });
});

api.get('/customers', checkPoint, (req, res) => {
  customerTBL.find({}, function(error,customer) {
    if (error) {
      console.log('error');
    } else{
      res.status(200).json(customer);
    }
  });
});

api.get('/customers/:id', (req, res) => {
  let id = req.params.id;
  customerTBL.find({_id: id}, function(error,customer) {
    if (error) {
      console.log('error');
    } else{
      res.status(200).json(customer);
    }
  });
});

api.delete('/customers/:id', (req, res) => {
  let id = req.params.id;
  user.deleteOne({_id: id}, function(error, data) {
    if(error){
      console.log(error);
    } else {
      res.status(200).send(data);
    }
    console.log(data);
  });
});


function checkPoint(req, res, next){
  // we will apply token authentication to secure authentication


  if(!req.headers.authorization)
    {
        return res.status(401).send('Unauthorized Request.......');
    }
    let token = req.headers.authorization.split(' ')[1]
    console.log(token);
    if (token === 'null')
    {
        return res.status(401).send('Unauthorized Request');
    }
    else
    {
        //jwt.sign()
        let payload = jtoken.verify(token,'secretKey',(err,token1)=>{
             if(err)
             {
                return res.status(401).send('Unauthorized Request');
             }
             else
             {
                req.userId=token1.subject;
                next();
             }

        });
    }
}
