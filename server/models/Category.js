const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = mongoose.Schema({
    ctype : {
        type : Number,
        default : 0
        /* 의류 : 0 ,, 시각장애물품 : 1 */
    },
    cname : {
        type : String,
        maxLength : 20
    },
    smallType : { //대분류
        type : String
    },
    small : { //소분류 필요하면 사용
        type : String,
        maxLength : 20
    }
})


const Category = mongoose.model("Category", categorySchema);

module.exports = { Category }