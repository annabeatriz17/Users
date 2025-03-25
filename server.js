require("dotenv").config();
const express = require("express");
const cors = require("cors");
const postRoutes = require("./src/routes/postRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", postRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
