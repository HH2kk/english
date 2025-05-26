const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

<<<<<<< Updated upstream
const lessonRoutes = require("./Routes/Lessonroutes"); // import router

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5174'}));
=======
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5174' }));

>>>>>>> Stashed changes

// Kết nối MongoDB
mongoose.connect("mongodb://localhost:27017/english_learning", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

<<<<<<< Updated upstream
// Sử dụng router cho lesson
app.use('/api/lessons', lessonRoutes);

// Lắng nghe server
=======
// Mô hình từ vựng
const Word = mongoose.model("Word", {
  word: String,
  meaning: String,
});

// ROUTE GET dữ liệu
app.get("/api/words", async (req, res) => {
  console.log("Request received");
  const words = await Word.find();
  res.json(words);
});

// ROUTE POST thêm dữ liệu
app.post("/api/words", async (req, res) => {
  const word = new Word(req.body);
  await word.save();
  res.json(word);
});

>>>>>>> Stashed changes
app.listen(5000, () => console.log("Server running on port 5000"));
