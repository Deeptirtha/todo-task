const mysql = require("mysql2")
const dotenv = require("dotenv")

dotenv.config()

const sqlModel = mysql.createConnection({
    host     : 'sql12.freemysqlhosting.net',
    port     :  3306,
    user     : 'sql12613009',
    password : 'YMuurMT2Mi',
    database : 'sql12613009'
})

sqlModel.connect((err) => {
    if (err) { console.log(err.message) }
    else { console.log("MySQL Connected") }
})

module.exports = { sqlModel }