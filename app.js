const express = require("express");
const cors = require("cors");
const middleware = require("./utils/middleware");
const keepaliveController = require("./controller/keepalive");
const entryController = require("./controller/entry");
const loginController = require("./controller/login");
const usuariosController = require("./controller/usuarios");

const app = express();

app.use(cors());
app.use(express.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(middleware.consoleData);
app.use(middleware.processToken);

app.use("/keepalive", keepaliveController);
app.use("/objeto", entryController);
app.use("/usuarios", usuariosController);
app.use("/login", loginController);

app.use(middleware.unknownEndpoint);
module.exports = app;
