const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    Location: {
      type: String
    },
    Players: {
      type: Number
    },
    //author:{
     //   type: Schema.Types.ObjectId,
     //   ref:'User'
    //}
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Games", gamesSchema);