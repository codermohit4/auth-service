const express = require('express');
const bodyparser = require('body-parser');
const { PORT} =     require('./config/serverconfig')
const app = express();
const apiroutes = require('./routes/index');
 const PrepareAndStartServer = () => {
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    app.use('/api', apiroutes);
    app.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}`);
    });
 }

 PrepareAndStartServer();