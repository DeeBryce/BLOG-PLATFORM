require("dotenv").config();

const express = require("express");
const authRoutes = require("./routes/authRoutes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

// Logging middleware (helpful for debugging)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "jwt auth sessions",
    endpoints: {
      auth: "/auth",
      users: "/api",
      admin: "/api/admin",
    },
  });
});
app.use("/auth", authRoutes);

// const startServer = async () => {
//   try {
//     // Connect to MongoDB


//     // Start HTTP server
//     app.listen(PORT, () => {
//       console.log(`\n✓ Server running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("Failed to start server:", error);
//     process.exit(1);
//   }
// };

// startServer();