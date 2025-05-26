const express = require("express");
const router = express.Router();
const Lesson = require("../Models/Lesson"); // import model Lesson (bạn cần tạo file model)

// GET tất cả lessons
router.get("/", async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const lessons = req.body; // kỳ vọng là 1 mảng
    if (!Array.isArray(lessons)) {
      return res.status(400).json({ error: "Dữ liệu phải là mảng" });
    }
    const createdLessons = await Lesson.insertMany(lessons);
    res.json(createdLessons);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;
