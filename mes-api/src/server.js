const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/UserRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
