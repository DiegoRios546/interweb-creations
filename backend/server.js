
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
require("dotenv").config();

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    process.exit(1);
  }
  console.log("Conectado a la base de datos MySQL");
});

// Rutas
app.post("/api/contact", (req, res) => {
  const { name, email, softwareType, message } = req.body;

  if (!name || !email || !softwareType || !message) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  const query = "INSERT INTO messages (name, email, software_type, message) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, softwareType, message], (err, result) => {
    if (err) {
      console.error("Error al insertar datos:", err);
      return res.status(500).json({ error: "Error al guardar el mensaje" });
    }
    res.status(201).json({ message: "Mensaje enviado exitosamente" });
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
