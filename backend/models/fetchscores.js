const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const fetchscoreSchema = new Schema(
    {
    std_id: {
        type: Number
    },
    teacher_id: {
        type: Number
    },
    term: {
        type: Number
    },
    mathexam: {
        type: Number
    },
    mathhw: {
        type: Number
    },
    mathmid: {
        type: Number
    },
    mathmex: {
        type: Number
    }
}
);

module.exports=mongoose.model("reports", fetchscoreSchema);