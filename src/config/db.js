const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://tanishkag258:Tannu123@cluster0.chkowbm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'





// const mongoDbUrl = process.env.MONGODB_URL;

const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}




// const mongoDbUrl='mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'