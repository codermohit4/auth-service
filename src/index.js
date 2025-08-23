const express = require('express');
// const cors = require("cors");
const bodyparser = require('body-parser');
const { PORT} =     require('./config/serverconfig')
const app = express();
const apiroutes = require('./routes/index');
const UserRepository = require('./repository/user-repository');
 const PrepareAndStartServer = () => {
    // app.use(cors({ origin: "http://localhost:3000" }));

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    app.use('/api', apiroutes);
    app.listen(PORT, async () => {
        console.log(`Server started on port: ${PORT}`);
        const repo = new UserRepository();
        const response = await repo.getById(1);
        console.log(response);
    });
 }

 PrepareAndStartServer();