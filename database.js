
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function getNotes(){
    const [rows] =await Pool.query("SELECT * FROM notes")
    console.log(rows)
}


async function getNote(id){
    const [rows] =await Pool.query('SELECT *FROM notes Where id = ?', [id])
    return rows
}

async function createNote(title, content) {
    const result = await pool.query('INSERT INTO notes (title, contents) VALUES (?,?)'[title, content])
    return {
        id
    }
}




const notes = await getNote()
console.log(notes)