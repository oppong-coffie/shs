const fetchscoreSchema = require("../models/fetchscores");

//  fetch all reports
const fetchscore = async (req, res) => {
      const scores = await fetchscoreSchema.find({})
      res.status(200).json(scores)
  }

//   fetch report by id
const idscores = async (req, res) => {
    const { std_id } = req.params;
    const workout = await fetchscoreSchema.find(std_id);
    if (!workout) {
      return res.status(404).json({ error: "no such workout" });
    }
    res.status(200).json(workout);
  };
  
module.exports={
    fetchscore,
    idscores
}