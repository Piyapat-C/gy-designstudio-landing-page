// Run Mongose
const mongoose = require('mongoose')

//Connect to MongoDB
const dbUrl = 'mongodb+srv://gy-studio:gem&yokstudio@cluster0.iqegztt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbUrl,{
    useNewUrlParser:true, 
    useUnifiedTopology:true
}).catch(error=>console.log(error))

// Design Schema
let clientSchema = mongoose.Schema({
    email:String
}, { timestamps: true})

//Build Model
let Client = mongoose.model("clients", clientSchema)

//Export Model
module.exports = Client 
