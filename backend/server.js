const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const lessonRoutes = require("./Routes/Lessonroutes"); // import router

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5174'}));

// Kết nối MongoDB
mongoose.connect("mongodb://localhost:27017/english_learning", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// Sử dụng router cho lesson
app.use('/api/lessons', lessonRoutes);

// Lắng nghe server
app.listen(5000, () => console.log("Server running on port 5000"));
