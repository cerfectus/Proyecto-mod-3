const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamesSchema = new Schema(
  {
    Title: {
      type: String,
      required: true,
      select: {
        type: String
       
      }
    },
    date: {
      type: String,
      required: true,
      
    },
    Time: {
      type: String,
      required: true
    },
    Location: {
      type: String,
      required: true,
      select:{
        type: String
      }
    },
    
      Players: {
      type: Number
    }
    
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);
gamesSchema.index({location: `2dsphere`});
module.exports = mongoose.model("Games", gamesSchema);
