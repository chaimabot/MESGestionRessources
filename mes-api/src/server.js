const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/UserRoutes");
const machinesRoutes = require("./routes/MachineRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion DB
connectDB();

// Middleware
app.use(express.json());
app.use("/images", express.static("assets/images"));

//front
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/machines", machinesRoutes);

app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
