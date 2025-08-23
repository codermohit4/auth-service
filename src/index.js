const express = require('express');
// const cors = require("cors");
const bodyparser = require('body-parser');
const { PORT} =     require('./config/serverconfig')
const app = express();
const apiroutes = require('./routes/index');
const UserRepository = require('./repository/user-repository');
const UserService = require('./service/user-service');
 const PrepareAndStartServer = () => {
    // app.use(cors({ origin: "http://localhost:3000" }));

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    app.use('/api', apiroutes);
    app.listen(PORT, async () => {
        console.log(`Server started on port: ${PORT}`);

        // const service = new UserService();
        // const token = service.createtoken({id:1,email:"U5c6a@example.com"});
        // console.log(token);
        
        // verify the token 
        const service = new UserService();
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJVNWM2YUBleGFtcGxlLmNvbSIsImlhdCI6MTc1NTk1OTMxNiwiZXhwIjoxNzU1OTYyOTE2fQ.EyYeqR0vXb8rsKRhheSn2ACwETU_RexJJveXdzR0tPQ';    
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJVNWM2YUBleGFtcGxlLmNvbSIsImlhdCI6MTc1NTk2NjM4NCwiZXhwIjoxNzU1OTY2Mzg0fQ.thuEFvXCtjtqQuCpfpyBrMcVgy2Lbt06TCEY4FKHUTA';
        const response =  service.verifytoken(token);;
        console.log(response)
        // const repo = new UserRepository();
        // const response = await repo.getById(1);
        // console.log(response);
    });
 }

 PrepareAndStartServer();