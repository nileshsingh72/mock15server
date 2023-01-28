const {model , Schema} = require('mongoose');

const bmSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    BMI:{type:String , required :true },

},{
    versionKey:false , timestamps:true
})

const Mass = model('bmi', bmSchema);

module.exports = Mass;