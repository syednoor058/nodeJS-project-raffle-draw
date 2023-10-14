require("dotenv").config();
const http = require("http");
const app = require("./app/app");

const server = http.createServer(app);

const PORT = 8200;
server.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
});