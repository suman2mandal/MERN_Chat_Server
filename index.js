const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());

// const mongoDB = "mongodb+srv://Suman:1qsc@mernchatcluster.vhdykxd.mongodb.net/MERNChatCluster?retryWrites=true&w=majority"
// mongoose.set('strictQuery', true);

// const con = mongoose.connect(mongoDB,(err)=>{
//     console.log(mongoDB);
//     if(err){
//         console.log("not connected");
//         console.log(err);
//     }else{
//         console.log('Connected to MongoDB');
//     }
// });

// Replace the URI with your own MongoDB+srv URI
// const uri = 'mongodb+srv://Suman:1qsc@mernchatcluster.vhdykxd.mongodb.net/MERNChatUserDB?retryWrites=true&w=majority';

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.log(err+"is the problem."));


// app.get('/api/getUserDetails', async (req, res) => {
//     try{
//         const User = await User.find();
//         console.log("HI");
//         return res.json(User);
        
//     }catch(err){
//         console.log(err);
//     }finally{
//         console.log("HI2");
//         res.send('Hello World!');
//     }
//     }
// );

// app.post('/api/AddNewUser', async (req, res) => {
//     try{
//         const User = await User.create({
//             name: req.params.name,
//             email: req.params.email,
//             password: req.params.password,
//         });
//         User.save();
//         res.json({status:'ok'})
//         res.send('Here');

//     }catch(err){
//         res.json({status:'error',error:'Problem'});
//     }finally{
//         res.send('Hello World!');
//     }
// });

// app.post('/api/UpdateUserDetails', (req, res) => {
//     console.log(req.params.UserEmail);
//     res.send('Hello World!');
//     }
// );

// app.get('/api/getMessage', (req, res) => {
//     console.log(req.params.UserEmail);
//     res.send('Hello World!');
//     }
// );

// app.post('/api/AddNewMessage', (req, res) => {
//     console.log(req.params.UserEmail);
//     res.send('Hello World!');
//     }
// );


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
  res.json({'message': 'Hello World'});
});



app.listen(3030, () => {
    console.log('Server running on port 3030');
    }
);