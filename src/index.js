const express = require('express');
const { PORT} =     require('./config/serverconfig')
const app = express();
 const PrepareAndStartServer = () => {
    app.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}`);
    });
 }

 PrepareAndStartServer();